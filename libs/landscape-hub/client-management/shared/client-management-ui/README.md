# **Client Management** 

## **Entity Models**

### **1. Client Entity**

**Description**: Represents users who are seeking landscaping services.

#### **Attributes:**

- **ClientID** (Primary Key): Unique identifier for each client.
- **Email**: Client's email address for communication and login.
- **PasswordHash**: Hashed password for authentication.
- **FirstName**
- **LastName**
- **PhoneNumber**
- **Address**:
  - **Street**
  - **City**
  - **State/Province**
  - **PostalCode**
  - **Country**
- **PreferredContactMethod**: Email, phone, etc.
- **CreatedAt**: Timestamp of when the client account was created.
- **UpdatedAt**: Timestamp of the last update to the client account.
- **ProfilePictureUrl**
- **Preferences**:
  - **BudgetRange**: Minimum and maximum budget for projects.
  - **ProjectTypes**: Types of projects interested in (e.g., garden design, lawn care).
  - **PreferredStartDate**: When the client wishes to start the project.
- **CommunicationPreferences**:
  - **EmailNotifications**: Boolean for receiving email updates.
  - **SMSNotifications**: Boolean for receiving SMS updates.
- **SavedAgents**: List of AgentIDs that the client has favorited.
- **Inquiries**: List of InquiryIDs submitted by the client.

#### **Relationships:**

- **Inquiries**: One-to-Many relationship with the **Inquiry** entity.
- **Projects**: One-to-Many relationship with the **Project** entity.
- **Reviews**: One-to-Many relationship with the **Review** entity.

---

### **2. Agent Entity**

**Description**: Represents service providers offering landscaping services.

#### **Attributes:**

- **AgentID** (Primary Key): Unique identifier for each agent.
- **Email**: Agent's email address for communication and login.
- **PasswordHash**: Hashed password for authentication.
- **CompanyName**
- **ContactPersonFirstName**
- **ContactPersonLastName**
- **PhoneNumber**
- **BusinessAddress**:
  - **Street**
  - **City**
  - **State/Province**
  - **PostalCode**
  - **Country**
- **WebsiteUrl**
- **CreatedAt**: Timestamp of when the agent account was created.
- **UpdatedAt**: Timestamp of the last update to the agent account.
- **ProfilePictureUrl**
- **Bio**: Description of the agent's business and expertise.
- **ServicesOffered**: List of ServiceIDs representing services provided.
- **PortfolioItems**: List of PortfolioItemIDs showcasing past work.
- **SubscriptionPlan**: Current subscription tier (e.g., Basic, Premium).
- **SubscriptionExpiryDate**
- **LicensesAndCertifications**: List of certifications or licenses held.
- **AverageRating**: Average rating based on client reviews.
- **TotalReviews**: Total number of reviews received.
- **Availability**:
  - **WorkingHours**: Typical working hours.
  - **AvailableDates**: Dates available for new projects.
- **ServiceAreas**: Geographic areas where services are offered.
- **CommunicationPreferences**:
  - **EmailNotifications**: Boolean for receiving email updates.
  - **SMSNotifications**: Boolean for receiving SMS updates.
- **Leads**: List of InquiryIDs received.
- **Projects**: List of ProjectIDs being handled.

#### **Relationships:**

- **Services**: One-to-Many relationship with the **Service** entity.
- **PortfolioItems**: One-to-Many relationship with the **PortfolioItem** entity.
- **Leads (Inquiries)**: One-to-Many relationship with the **Inquiry** entity.
- **Reviews**: One-to-Many relationship with the **Review** entity.
- **Projects**: One-to-Many relationship with the **Project** entity.

---

### **3. Supporting Entities**

To fully model the interactions between clients and agents, additional entities are needed.

#### **a. Inquiry Entity**

**Description**: Represents a service request submitted by a client to one or more agents.

**Attributes:**

- **InquiryID** (Primary Key)
- **ClientID** (Foreign Key to Client)
- **AgentID** (Foreign Key to Agent)
- **ServiceID** (Foreign Key to Service)
- **Message**: Details or description provided by the client.
- **PreferredContactTime**
- **Status**: Pending, Accepted, Rejected, Closed.
- **CreatedAt**
- **UpdatedAt**

**Relationships:**

- **Client**: Many-to-One relationship.
- **Agent**: Many-to-One relationship.
- **Service**: Many-to-One relationship.
- **CommunicationLogs**: One-to-Many relationship with the **CommunicationLog** entity.

#### **b. Service Entity**

**Description**: Represents a specific type of service offered by agents.

**Attributes:**

- **ServiceID** (Primary Key)
- **AgentID** (Foreign Key to Agent)
- **ServiceName**
- **Description**
- **PricingModel**: Fixed, Hourly, Per Square Foot, etc.
- **PriceRange**: Minimum and maximum price.
- **DurationEstimate**: Estimated time to complete.
- **CreatedAt**
- **UpdatedAt**

**Relationships:**

- **Agent**: Many-to-One relationship.
- **Inquiries**: One-to-Many relationship with the **Inquiry** entity.

#### **c. PortfolioItem Entity**

**Description**: Represents a project completed by the agent, showcased in their portfolio.

**Attributes:**

- **PortfolioItemID** (Primary Key)
- **AgentID** (Foreign Key to Agent)
- **Title**
- **Description**
- **Images**: List of image URLs.
- **ProjectDate**
- **CreatedAt**
- **UpdatedAt**

**Relationships:**

- **Agent**: Many-to-One relationship.

#### **d. Project Entity**

**Description**: Represents an actual project that is being or has been carried out between a client and an agent.

**Attributes:**

- **ProjectID** (Primary Key)
- **ClientID** (Foreign Key to Client)
- **AgentID** (Foreign Key to Agent)
- **ServiceID** (Foreign Key to Service)
- **InquiryID** (Foreign Key to Inquiry)
- **StartDate**
- **EndDate**
- **Status**: Scheduled, In Progress, Completed, Cancelled.
- **TotalCost**
- **PaymentStatus**: Pending, Paid, Overdue.
- **CreatedAt**
- **UpdatedAt**

**Relationships:**

- **Client**: Many-to-One relationship.
- **Agent**: Many-to-One relationship.
- **Service**: Many-to-One relationship.
- **Inquiry**: One-to-One relationship.

#### **e. Review Entity**

**Description**: Represents a review submitted by a client about an agent after a project completion.

**Attributes:**

- **ReviewID** (Primary Key)
- **ClientID** (Foreign Key to Client)
- **AgentID** (Foreign Key to Agent)
- **ProjectID** (Foreign Key to Project)
- **Rating**: Typically a numeric value (e.g., 1-5 stars).
- **Comment**
- **CreatedAt**

**Relationships:**

- **Client**: Many-to-One relationship.
- **Agent**: Many-to-One relationship.
- **Project**: Many-to-One relationship.

#### **f. CommunicationLog Entity**

**Description**: Records communications between clients and agents.

**Attributes:**

- **CommunicationLogID** (Primary Key)
- **InquiryID** (Foreign Key to Inquiry)
- **SenderType**: 'Client' or 'Agent'
- **SenderID**: ClientID or AgentID
- **MessageContent**
- **SentAt**

**Relationships:**

- **Inquiry**: Many-to-One relationship.

---

## **Endpoints**

Separate endpoints for clients and agents ensure a clear separation of concerns and security.

### **Client Endpoints**

1. **Authentication:**
  - `POST /api/clients/register`: Register a new client.
  - `POST /api/clients/login`: Client login.
  - `POST /api/clients/logout`: Client logout.

2. **Profile Management:**
  - `GET /api/clients/:clientId`: Get client profile.
  - `PUT /api/clients/:clientId`: Update client profile.
  - `DELETE /api/clients/:clientId`: Delete client account.

3. **Inquiries:**
  - `POST /api/clients/:clientId/inquiries`: Submit a new inquiry.
  - `GET /api/clients/:clientId/inquiries`: Get all inquiries by the client.
  - `GET /api/clients/:clientId/inquiries/:inquiryId`: Get details of a specific inquiry.

4. **Favorites:**
  - `POST /api/clients/:clientId/favorites`: Add an agent to favorites.
  - `GET /api/clients/:clientId/favorites`: Get list of favorite agents.
  - `DELETE /api/clients/:clientId/favorites/:agentId`: Remove an agent from favorites.

5. **Reviews:**
  - `POST /api/clients/:clientId/reviews`: Submit a review for an agent.
  - `GET /api/clients/:clientId/reviews`: Get all reviews submitted by the client.

6. **Projects:**
  - `GET /api/clients/:clientId/projects`: Get all projects associated with the client.

### **Agent Endpoints**

1. **Authentication:**
  - `POST /api/agents/register`: Register a new agent.
  - `POST /api/agents/login`: Agent login.
  - `POST /api/agents/logout`: Agent logout.

2. **Profile Management:**
  - `GET /api/agents/:agentId`: Get agent profile.
  - `PUT /api/agents/:agentId`: Update agent profile.
  - `DELETE /api/agents/:agentId`: Delete agent account.

3. **Services:**
  - `POST /api/agents/:agentId/services`: Add a new service.
  - `GET /api/agents/:agentId/services`: Get all services offered by the agent.
  - `PUT /api/agents/:agentId/services/:serviceId`: Update a service.
  - `DELETE /api/agents/:agentId/services/:serviceId`: Delete a service.

4. **Portfolio Management:**
  - `POST /api/agents/:agentId/portfolio`: Add a new portfolio item.
  - `GET /api/agents/:agentId/portfolio`: Get all portfolio items.
  - `PUT /api/agents/:agentId/portfolio/:itemId`: Update a portfolio item.
  - `DELETE /api/agents/:agentId/portfolio/:itemId`: Delete a portfolio item.

5. **Leads (Inquiries):**
  - `GET /api/agents/:agentId/inquiries`: Get all inquiries received.
  - `GET /api/agents/:agentId/inquiries/:inquiryId`: Get details of a specific inquiry.
  - `PUT /api/agents/:agentId/inquiries/:inquiryId`: Update inquiry status (e.g., accept, reject).

6. **Projects:**
  - `GET /api/agents/:agentId/projects`: Get all projects being handled.
  - `PUT /api/agents/:agentId/projects/:projectId`: Update project details/status.

7. **Reviews:**
  - `GET /api/agents/:agentId/reviews`: Get all reviews received.

8. **Subscription Management:**
  - `GET /api/agents/:agentId/subscription`: Get current subscription details.
  - `POST /api/agents/:agentId/subscription`: Upgrade or change subscription.
  - `PUT /api/agents/:agentId/subscription`: Update payment information.
  - `DELETE /api/agents/:agentId/subscription`: Cancel subscription.

---

## **Database Schema**

Below is a representation of how the entities might relate in a relational database.

### **Tables and Relationships**

1. **Clients Table**
  - Primary Key: `ClientID`
  - Relationships:
    - `ClientID` in **Inquiries** (One-to-Many)
    - `ClientID` in **Projects** (One-to-Many)
    - `ClientID` in **Reviews** (One-to-Many)

2. **Agents Table**
  - Primary Key: `AgentID`
  - Relationships:
    - `AgentID` in **Services** (One-to-Many)
    - `AgentID` in **PortfolioItems** (One-to-Many)
    - `AgentID` in **Inquiries** (One-to-Many)
    - `AgentID` in **Projects** (One-to-Many)
    - `AgentID` in **Reviews** (One-to-Many)

3. **Services Table**
  - Primary Key: `ServiceID`
  - Foreign Key: `AgentID`
  - Relationships:
    - `ServiceID` in **Inquiries** (One-to-Many)
    - `ServiceID` in **Projects** (One-to-Many)

4. **PortfolioItems Table**
  - Primary Key: `PortfolioItemID`
  - Foreign Key: `AgentID`

5. **Inquiries Table**
  - Primary Key: `InquiryID`
  - Foreign Keys: `ClientID`, `AgentID`, `ServiceID`
  - Relationships:
    - `InquiryID` in **CommunicationLogs** (One-to-Many)
    - `InquiryID` in **Projects** (One-to-One)

6. **Projects Table**
  - Primary Key: `ProjectID`
  - Foreign Keys: `ClientID`, `AgentID`, `ServiceID`, `InquiryID`
  - Relationships:
    - `ProjectID` in **Reviews** (One-to-One)

7. **Reviews Table**
  - Primary Key: `ReviewID`
  - Foreign Keys: `ClientID`, `AgentID`, `ProjectID`

8. **CommunicationLogs Table**
  - Primary Key: `CommunicationLogID`
  - Foreign Key: `InquiryID`

---

## **Managing From Front-End Application**

### **For Clients:**

- **Registration and Authentication**: Dedicated sign-up and login pages for clients.
- **Profile Management**: Interfaces to update personal information and preferences.
- **Browse Services and Agents**: View services offered by agents without mixing data.
- **Submit Inquiries**: Forms to request services from agents.
- **View Inquiries and Projects**: Dashboards to track the status of their inquiries and ongoing projects.
- **Review Agents**: Ability to submit reviews after project completion.
- **Favorite Agents**: Save agents to a favorites list for easy access.

### **For Agents:**

- **Registration and Authentication**: Separate sign-up and login pages for agents.
- **Profile Management**: Interfaces to update business information, services, and portfolio.
- **Manage Services**: Add, edit, or remove services offered.
- **View Leads (Inquiries)**: Dashboard to manage incoming inquiries.
- **Project Management**: Tools to update project statuses and communicate with clients.
- **Subscription Management**: Interfaces to manage their subscription plans and billing.
- **View Reviews**: Access to feedback provided by clients.

### **UI Considerations:**

- **Navigation**: Ensure clients and agents have access only to their respective sections.
- **Role-Based Access Control**: Implement front-end checks to prevent cross-access.
- **User Experience**: Tailor the UI/UX to suit the needs of each user type.

---

## **Managing From Back-End Application**

- **Separate Controllers/Services**: Implement distinct back-end controllers or services for clients and agents.
- **Security**:
  - **Authentication**: Use JWT or session-based authentication for both clients and agents.
  - **Authorization**: Enforce access control to ensure only authorized actions are permitted.
- **Data Validation**: Validate input data separately for clients and agents based on their specific requirements.
- **Logging and Monitoring**: Keep detailed logs for auditing and troubleshooting purposes.

---

## **Advantages of Separate Entities and Endpoints**

- **Security**: Reduces the risk of unauthorized access between clients and agents.
- **Maintainability**: Easier to manage and update codebases when entities are separated.
- **Scalability**: Allows independent scaling of client and agent services based on demand.
- **Clarity**: Simplifies understanding of the system architecture for developers and stakeholders.

---

## **Additional Considerations**

- **Notification System**: Implement a notification system to alert clients and agents of relevant updates (e.g., new inquiries, status changes).
- **Search and Filtering**:
  - For clients: Ability to search for agents based on services, location, ratings.
  - For agents: Ability to filter leads based on service types, locations.
- **Data Privacy Compliance**: Ensure compliance with data protection laws (e.g., GDPR) by providing clear privacy policies and data handling practices.
- **Analytics and Reporting**:
  - For agents: Insights into their performance, inquiry conversion rates.
  - For platform administrators: Overall platform metrics.

---

## **Conclusion**

By keeping clients and agents as separate entities with distinct endpoints, you achieve a clean separation of concerns, enhanced security, and improved manageability. The detailed entity models provided above include comprehensive attributes and relationships to capture all necessary information for both user types. This structure supports a robust platform capable of scaling and adapting to future needs.

---

**Note**: The specific attributes and relationships can be adjusted based on the exact requirements of your application. Additionally, while this model focuses on a relational database structure, you can adapt it to other database types (e.g., NoSQL) as needed.

Let me know if you need further details on any aspect or assistance with other components!
