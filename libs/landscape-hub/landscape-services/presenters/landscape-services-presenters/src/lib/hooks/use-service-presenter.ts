import { useState, useCallback } from 'react';
import { useGetServices } from './use-get-services';
import { useCreateService } from './use-create-service';
import { useUpdateService } from './use-update-service';
import { useDeleteService } from './use-delete-service';
import { Service } from '@landscape/schema';

export const useServicePresenter = () => {
  const {
    serviceList,
    isLoading,
    refetch,
    error: fetchError,
  } = useGetServices();
  const [selectedService, setSelectedService] = useState<Service | null>(null);
  const [error, setError] = useState<string | null>(null);
  const [successMsg, setSuceessMsg] = useState<string | null>(null);

  // Create service
  const createServiceMutation = useCreateService();

  // Update service
  const updateServiceMutation = useUpdateService();

  // Delete service
  const deleteServiceMutation = useDeleteService();

  const handleSelectService = useCallback((service: Service) => {
    setSelectedService(service);
    setError(null); // Clear error when selecting a new service
  }, []);

  const handleCreateService = useCallback(
    async (newService: Omit<Service, 'id'>) => {
      setError(null);
      try {
        await createServiceMutation.mutateAsync({
          body: newService,
        });
        setSuceessMsg(`Service ${newService.serviceName} successfully created`);
      } catch (err) {
        setError(`failed to create service: ${err}`);
      }
    },
    [createServiceMutation]
  );

  const handleUpdateService = useCallback(
    async (service: Service) => {
      setError(null);
      try {
        await updateServiceMutation.mutateAsync({
          body: service,
          path: {
            id: service.id,
          },
        });
        setSuceessMsg(`Service ${service.serviceName} successfully created`);
      } catch (err) {
        setError(`failed to update service ${service.serviceName}: ${err}`);
      }
    },
    [updateServiceMutation]
  );

  const handleDeleteService = useCallback(
    async (service: Service) => {
      setError(null);
      try {
        await deleteServiceMutation.mutateAsync({
          path: {
            id: service.id,
          },
        });
        await refetch();
        setSuceessMsg(`Service ${service.serviceName} successfully deleted`);
      } catch (err) {
        setError(`failed to delete ${service.serviceName}: ${err}`);
      }
    },
    [deleteServiceMutation]
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
