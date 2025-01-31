// This file is auto-generated by @hey-api/openapi-ts

export type AgentDto = {
  id?: number;
  name?: string | null;
  email?: string | null;
  phone?: string | null;
  location?: string | null;
  rating?: number;
  profilePictureUrl?: string | null;
  specialties?: Array<string> | null;
};

export type AgentForCreationDto = {
  name?: string | null;
  email?: string | null;
  phone?: string | null;
  location?: string | null;
  rating?: number;
  profilePictureUrl?: string | null;
  specialties?: Array<string> | null;
};

export type AgentForUpdateDto = {
  name?: string | null;
  email?: string | null;
  phone?: string | null;
  location?: string | null;
  rating?: number;
  profilePictureUrl?: string | null;
  specialties?: Array<string> | null;
};

export type CustomerDto = {
  id?: number;
  fullName?: string | null;
  email?: string | null;
  phone?: string | null;
  address?: string | null;
};

export type CustomerForCreationDto = {
  fullName?: string | null;
  email?: string | null;
  phone?: string | null;
  address?: string | null;
};

export type CustomerForUpdateDto = {
  fullName?: string | null;
  email?: string | null;
  phone?: string | null;
  address?: string | null;
};

export type JobDto = {
  id?: number;
  agentId?: number;
  customerId?: number;
  serviceId?: number;
  jobDate?: string;
  jobStatus?: string | null;
  totalCost?: number;
};

export type JobForCreationDto = {
  agentId?: number;
  customerId?: number;
  serviceId?: number;
  jobDate?: string;
  jobStatus?: string | null;
  totalCost?: number;
};

export type JobForUpdateDto = {
  agentId?: number;
  customerId?: number;
  serviceId?: number;
  jobDate?: string;
  jobStatus?: string | null;
  totalCost?: number;
};

export type MetricDto = {
  id?: number;
  name?: string | null;
  description?: string | null;
  timeStamp?: string;
  metricTypeId?: number;
  runFrequencyId?: number;
  runDay?: string | null;
  serviceAlignmentId?: number;
  dataGranularityId?: number;
  consequenceEligible?: boolean;
  metricCalculation?: string | null;
  valueType?: string | null;
  additionalInformation?: string | null;
  status?: string | null;
  createdUserId?: number;
  createdDateTime?: string;
  updatedUserId?: number;
  updatedDateTime?: string;
};

export type MetricForCreationDto = {
  metricPrefixId: string;
  name: string;
  description?: string | null;
  metricTypeId?: number;
  runFrequencyId?: number;
  runDay?: string | null;
  serviceAlignmentId?: number;
  dataGranularityId?: number;
  consequenceEligible?: boolean;
  metricCalculation?: string | null;
  valueType?: string | null;
  additionalInformation?: string | null;
  status: string;
  createdUserId?: number;
  createdDateTime?: string;
  updatedUserId?: number;
  updatedDateTime?: string;
  metricOwnerId?: number;
  metricAlignmentIdentifierId?: number;
};

export type MetricForUpdateDto = {
  metricPrefixId: string;
  name: string;
  description?: string | null;
  metricTypeId?: number;
  runFrequencyId?: number;
  runDay?: string | null;
  serviceAlignmentId?: number;
  dataGranularityId?: number;
  consequenceEligible?: boolean;
  metricCalculation?: string | null;
  valueType?: string | null;
  additionalInformation?: string | null;
  status: string;
  createdUserId?: number;
  createdDateTime?: string;
  updatedUserId?: number;
  updatedDateTime?: string;
  metricOwnerId?: number;
  metricAlignmentIdentifierId?: number;
};

export type MetricRunFrequencyDto = {
  id?: number;
  name?: string | null;
  description?: string | null;
  status?: boolean;
};

export type MetricRunFrequencyForCreationDto = {
  name?: string | null;
  description?: string | null;
  status?: boolean;
  createdUserId?: number;
  createdBy?: string | null;
};

export type MetricRunFrequencyForUpdateDto = {
  name?: string | null;
  description?: string | null;
  status?: boolean;
  updatedUserId?: number;
  updatedBy?: string | null;
};

export type MetricThresholdDirectionTypeDto = {
  id?: number;
  name?: string | null;
  description?: string | null;
  status?: boolean;
};

export type MetricThresholdDirectionTypeForCreationDto = {
  name?: string | null;
  description?: string | null;
  status?: boolean;
  createdUserId?: number;
  createdBy?: string | null;
};

export type MetricThresholdDirectionTypeForUpdateDto = {
  name?: string | null;
  description?: string | null;
  status?: boolean;
  updatedUserId?: number;
  updatedBy?: string | null;
};

export type MetricTypeDto = {
  id?: number;
  name?: string | null;
  description?: string | null;
  status?: boolean;
};

export type MetricTypeForCreationDto = {
  name?: string | null;
  description?: string | null;
  status?: boolean;
  createdUserId?: number;
  createdBy?: string | null;
};

export type MetricTypeForUpdateDto = {
  name?: string | null;
  description?: string | null;
  status?: boolean;
  updatedUserId?: number;
  updatedBy?: string | null;
};

export type ReviewDto = {
  id?: number;
  jobId?: number;
  rating?: number;
  reviewText?: string | null;
  reviewDate?: string;
};

export type ReviewForCreationDto = {
  jobId?: number;
  rating?: number;
  reviewText?: string | null;
  reviewDate?: string;
};

export type ReviewForUpdateDto = {
  jobId?: number;
  rating?: number;
  reviewText?: string | null;
  reviewDate?: string;
};

export type ServiceAlignmentTypeDto = {
  id?: number;
  name?: string | null;
  description?: string | null;
  acronym?: string | null;
  status?: boolean;
};

export type ServiceAlignmentTypeForCreationDto = {
  name?: string | null;
  description?: string | null;
  acronym?: string | null;
  status?: boolean;
  createdUserId?: number;
  createdBy?: string | null;
};

export type ServiceAlignmentTypeForUpdateDto = {
  name?: string | null;
  description?: string | null;
  acronym?: string | null;
  status?: boolean;
  updatedUserId?: number;
  updatedBy?: string | null;
};

export type ServiceDto = {
  id: number;
  serviceName?: string | null;
  description?: string | null;
  categoryId?: number | null;
  categoryName?: string | null;
  basePrice?: number | null;
  costEstimate?: number | null;
  profitMarginTarget?: number;
  pricingModel?: string | null;
};

export type ServiceForCreationDto = {
  serviceName?: string | null;
  description?: string | null;
};

export type ServiceForUpdateDto = {
  serviceName?: string | null;
  description?: string | null;
};

export type UserDto = {
  userID?: number;
  fullName?: string | null;
  email?: string | null;
  phoneNumber?: string | null;
  address?: string | null;
  city?: string | null;
  stateOrProvince?: string | null;
  postalCode?: string | null;
  country?: string | null;
  jobTitle?: string | null;
  bio?: string | null;
  createdDate?: string;
  lastUpdatedDate?: string;
};

export type GetAgentData = {
  path: {
    id: number;
  };
};

export type GetAgentResponse = AgentDto;

export type GetAgentError = unknown;

export type PutAgentsByIdData = {
  body: AgentForUpdateDto;
  path: {
    id: number;
  };
};

export type PutAgentsByIdResponse = void;

export type PutAgentsByIdError = unknown;

export type DeleteAgentsByIdData = {
  path: {
    id: number;
  };
};

export type DeleteAgentsByIdResponse = void;

export type DeleteAgentsByIdError = unknown;

export type GetAgentsResponse = Array<AgentDto>;

export type GetAgentsError = unknown;

export type PostAgentsData = {
  body: AgentForCreationDto;
};

export type PostAgentsResponse = AgentDto;

export type PostAgentsError = unknown;

export type GetCustomerData = {
  path: {
    id: number;
  };
};

export type GetCustomerResponse = CustomerDto;

export type GetCustomerError = unknown;

export type PutCustomersByIdData = {
  body: CustomerForUpdateDto;
  path: {
    id: number;
  };
};

export type PutCustomersByIdResponse = void;

export type PutCustomersByIdError = unknown;

export type DeleteCustomersByIdData = {
  path: {
    id: number;
  };
};

export type DeleteCustomersByIdResponse = void;

export type DeleteCustomersByIdError = unknown;

export type GetCustomersResponse = Array<CustomerDto>;

export type GetCustomersError = unknown;

export type PostCustomersData = {
  body: CustomerForCreationDto;
};

export type PostCustomersResponse = CustomerDto;

export type PostCustomersError = unknown;

export type GetJobData = {
  path: {
    id: number;
  };
};

export type GetJobResponse = JobDto;

export type GetJobError = unknown;

export type PutJobsByIdData = {
  body: JobForUpdateDto;
  path: {
    id: number;
  };
};

export type PutJobsByIdResponse = void;

export type PutJobsByIdError = unknown;

export type DeleteJobsByIdData = {
  path: {
    id: number;
  };
};

export type DeleteJobsByIdResponse = void;

export type DeleteJobsByIdError = unknown;

export type GetJobsResponse = Array<JobDto>;

export type GetJobsError = unknown;

export type PostJobsData = {
  body: JobForCreationDto;
};

export type PostJobsResponse = JobDto;

export type PostJobsError = unknown;

export type GetMetricRunFrequencyData = {
  path: {
    id: number;
  };
};

export type GetMetricRunFrequencyResponse = MetricRunFrequencyDto;

export type GetMetricRunFrequencyError = unknown;

export type GetMetricRunFrequenciesResponse = Array<MetricRunFrequencyDto>;

export type GetMetricRunFrequenciesError = unknown;

export type PostMetricRunFrequenciesData = {
  body: MetricRunFrequencyForCreationDto;
};

export type PostMetricRunFrequenciesResponse = MetricRunFrequencyDto;

export type PostMetricRunFrequenciesError = unknown;

export type PutMetricRunFrequenciesData = {
  body: MetricRunFrequencyForUpdateDto;
  query: {
    id: number;
  };
};

export type PutMetricRunFrequenciesResponse = void;

export type PutMetricRunFrequenciesError = unknown;

export type DeleteMetricRunFrequenciesData = {
  query: {
    id: number;
  };
};

export type DeleteMetricRunFrequenciesResponse = void;

export type DeleteMetricRunFrequenciesError = unknown;

export type GetMetricRunFrequenciesByNameData = {
  path: {
    name: string;
  };
};

export type GetMetricRunFrequenciesByNameResponse = MetricRunFrequencyDto;

export type GetMetricRunFrequenciesByNameError = unknown;

export type GetMetricThresholdDirectionTypeData = {
  path: {
    id: number;
  };
};

export type GetMetricThresholdDirectionTypeResponse =
  MetricThresholdDirectionTypeDto;

export type GetMetricThresholdDirectionTypeError = unknown;

export type GetMetricThresholdDirectionTypesResponse =
  Array<MetricThresholdDirectionTypeDto>;

export type GetMetricThresholdDirectionTypesError = unknown;

export type PostMetricThresholdDirectionTypesData = {
  body: MetricThresholdDirectionTypeForCreationDto;
};

export type PostMetricThresholdDirectionTypesResponse =
  MetricThresholdDirectionTypeDto;

export type PostMetricThresholdDirectionTypesError = unknown;

export type PutMetricThresholdDirectionTypesData = {
  body: MetricThresholdDirectionTypeForUpdateDto;
  query: {
    id: number;
  };
};

export type PutMetricThresholdDirectionTypesResponse = void;

export type PutMetricThresholdDirectionTypesError = unknown;

export type DeleteMetricThresholdDirectionTypesData = {
  query: {
    id: number;
  };
};

export type DeleteMetricThresholdDirectionTypesResponse = void;

export type DeleteMetricThresholdDirectionTypesError = unknown;

export type GetMetricThresholdDirectionTypesByNameData = {
  path: {
    name: string;
  };
};

export type GetMetricThresholdDirectionTypesByNameResponse =
  MetricThresholdDirectionTypeDto;

export type GetMetricThresholdDirectionTypesByNameError = unknown;

export type GetMetricTypeData = {
  path: {
    id: number;
  };
};

export type GetMetricTypeResponse = MetricTypeDto;

export type GetMetricTypeError = unknown;

export type GetMetricTypesResponse = Array<MetricTypeDto>;

export type GetMetricTypesError = unknown;

export type PostMetricTypesData = {
  body: MetricTypeForCreationDto;
};

export type PostMetricTypesResponse = MetricTypeDto;

export type PostMetricTypesError = unknown;

export type PutMetricTypesData = {
  body: MetricTypeForUpdateDto;
  query: {
    id: number;
  };
};

export type PutMetricTypesResponse = void;

export type PutMetricTypesError = unknown;

export type DeleteMetricTypesData = {
  query: {
    id: number;
  };
};

export type DeleteMetricTypesResponse = void;

export type DeleteMetricTypesError = unknown;

export type GetMetricTypesByNameData = {
  path: {
    name: string;
  };
};

export type GetMetricTypesByNameResponse = MetricTypeDto;

export type GetMetricTypesByNameError = unknown;

export type GetMetricData = {
  path: {
    id: number;
  };
};

export type GetMetricResponse = MetricDto;

export type GetMetricError = unknown;

export type GetMetricsResponse = Array<MetricDto>;

export type GetMetricsError = unknown;

export type PostMetricsData = {
  body: MetricForCreationDto;
};

export type PostMetricsResponse = MetricDto;

export type PostMetricsError = unknown;

export type PutMetricsData = {
  body: MetricForUpdateDto;
  query: {
    id: number;
  };
};

export type PutMetricsResponse = void;

export type PutMetricsError = unknown;

export type DeleteMetricsData = {
  query: {
    id: number;
  };
};

export type DeleteMetricsResponse = void;

export type DeleteMetricsError = unknown;

export type GetMetricsByMetricNameData = {
  path: {
    metricName: string;
  };
};

export type GetMetricsByMetricNameResponse = MetricDto;

export type GetMetricsByMetricNameError = unknown;

export type GetReviewData = {
  path: {
    id: number;
  };
};

export type GetReviewResponse = ReviewDto;

export type GetReviewError = unknown;

export type PutReviewsByIdData = {
  body: ReviewForUpdateDto;
  path: {
    id: number;
  };
};

export type PutReviewsByIdResponse = void;

export type PutReviewsByIdError = unknown;

export type DeleteReviewsByIdData = {
  path: {
    id: number;
  };
};

export type DeleteReviewsByIdResponse = void;

export type DeleteReviewsByIdError = unknown;

export type GetReviewsResponse = Array<ReviewDto>;

export type GetReviewsError = unknown;

export type PostReviewsData = {
  body: ReviewForCreationDto;
};

export type PostReviewsResponse = ReviewDto;

export type PostReviewsError = unknown;

export type GetServiceAlignmentTypeData = {
  path: {
    id: number;
  };
};

export type GetServiceAlignmentTypeResponse = ServiceAlignmentTypeDto;

export type GetServiceAlignmentTypeError = unknown;

export type GetServiceAlignmentTypesResponse = Array<ServiceAlignmentTypeDto>;

export type GetServiceAlignmentTypesError = unknown;

export type PostServiceAlignmentTypesData = {
  body: ServiceAlignmentTypeForCreationDto;
};

export type PostServiceAlignmentTypesResponse = ServiceAlignmentTypeDto;

export type PostServiceAlignmentTypesError = unknown;

export type PutServiceAlignmentTypesData = {
  body: ServiceAlignmentTypeForUpdateDto;
  query: {
    id: number;
  };
};

export type PutServiceAlignmentTypesResponse = void;

export type PutServiceAlignmentTypesError = unknown;

export type DeleteServiceAlignmentTypesData = {
  query: {
    id: number;
  };
};

export type DeleteServiceAlignmentTypesResponse = void;

export type DeleteServiceAlignmentTypesError = unknown;

export type GetServiceAlignmentTypesByNameData = {
  path: {
    name: string;
  };
};

export type GetServiceAlignmentTypesByNameResponse = ServiceAlignmentTypeDto;

export type GetServiceAlignmentTypesByNameError = unknown;

export type GetServiceData = {
  path: {
    id: number;
  };
};

export type GetServiceResponse = ServiceDto;

export type GetServiceError = unknown;

export type PutServicesByIdData = {
  body: ServiceForUpdateDto;
  path: {
    id: number;
  };
};

export type PutServicesByIdResponse = void;

export type PutServicesByIdError = unknown;

export type DeleteServicesByIdData = {
  path: {
    id: number;
  };
};

export type DeleteServicesByIdResponse = void;

export type DeleteServicesByIdError = unknown;

export type GetServicesResponse = Array<ServiceDto>;

export type GetServicesError = unknown;

export type PostServicesData = {
  body: ServiceForCreationDto;
};

export type PostServicesResponse = ServiceDto;

export type PostServicesError = unknown;

export type GetUserData = {
  path: {
    id: number;
  };
};

export type GetUserResponse = UserDto;

export type GetUserError = unknown;

export type PutUsersByIdData = {
  body: UserDto;
  path: {
    id: number;
  };
};

export type PutUsersByIdResponse = void;

export type PutUsersByIdError = unknown;

export type DeleteUsersByIdData = {
  path: {
    id: number;
  };
};

export type DeleteUsersByIdResponse = void;

export type DeleteUsersByIdError = unknown;

export type GetUsersResponse = Array<UserDto>;

export type GetUsersError = unknown;

export type PostUsersData = {
  body: UserDto;
};

export type PostUsersResponse = UserDto;

export type PostUsersError = unknown;
