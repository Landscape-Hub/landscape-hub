import { useState, useCallback } from 'react';
import { useGetServices } from './use-get-services';
import { useCreateService } from './use-create-service';
import { useUpdateService } from './use-update-service';
import { useDeleteService } from './use-delete-service';
import { ServiceDto } from '@landscape/api';
import { toast } from 'react-toastify';

export const useServicePresenter = () => {
  const {
    serviceList,
    isLoading,
    refetch,
    error: fetchError,
  } = useGetServices();
  const [selectedService, setSelectedService] = useState<ServiceDto | null>(
    null
  );
  const [error, setError] = useState<string | null>(null);
  const [successMsg, setSuccessMsg] = useState<string | null>(null);

  // Create service
  const createServiceMutation = useCreateService();

  // Update service
  const updateServiceMutation = useUpdateService();

  // Delete service
  const deleteServiceMutation = useDeleteService();

  const handleSelectService = useCallback((service: ServiceDto) => {
    setSelectedService(service);
    setError(null); // Clear error when selecting a new service
  }, []);

  const handleCreateService = useCallback(
    async (newService: Omit<ServiceDto, 'id'>) => {
      setError(null);
      try {
        await createServiceMutation.mutateAsync({
          body: newService,
        });
        setSuccessMsg(`Service ${newService.serviceName} successfully created`);
        toast.success(successMsg);
      } catch (err) {
        setError(`failed to create service: ${err}`);
        toast.error(error);
      }
    },
    [createServiceMutation]
  );

  const handleUpdateService = useCallback(
    async (service: ServiceDto) => {
      setError(null);
      try {
        await updateServiceMutation.mutateAsync({
          body: service,
          path: {
            id: service?.id,
          },
        });
        const success = (await refetch()).isSuccess;

        if (success) {
          setSuccessMsg(`Service ${service?.serviceName} successfully updated`);
          toast.success(successMsg);
        }
      } catch (err) {
        setError(`failed to update service ${service?.serviceName}: ${err}`);
        toast.error(error);
      }
    },
    [updateServiceMutation]
  );

  const handleDeleteService = useCallback(
    async (service: ServiceDto) => {
      setSuccessMsg(null);
      setError(null);
      try {
        await deleteServiceMutation.mutateAsync({
          path: {
            id: service?.id,
          },
        });
        await refetch();
        setSuccessMsg(`Service ${service?.serviceName} successfully deleted`);
        toast.success(successMsg);
      } catch (err) {
        setError(`Failed to delete ${service?.serviceName}: ${err}`);
        toast.error(error);
      }
    },
    [deleteServiceMutation, refetch]
  );

  return {
    services: serviceList,
    isLoading,
    selectedService,
    successMsg,
    error: error || fetchError || null, // Combine errors
    handleSelectService,
    handleCreateService,
    handleUpdateService,
    handleDeleteService,
  };
};
