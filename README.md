# asggn_dashboard

Overview
This project is a responsive Tech Assessment Dashboard built using Next.js. It includes
functionalities for managing and viewing assessments, with backend integration using
PostgreSQL. The goal of this project is to demonstrate a scalable and interactive UI for a
SaaS-based platform.

Hit this URL : localhost:3000/dashboard
to navigate to dashbord

Features---

Frontend:
 Responsive Dashboard:
1. Header with navigation links: Dashboard, Assessments, and Profile.
2. User avatar with a dropdown menu for Settings and Logout.
3. Search bar for filtering assessments dynamically by title.
4. Sorting functionality for assessments by date and status.

 Components:
1. Header: Includes navigation, a logo, and a user avatar with a dropdown menu.
2. AssessmentTable: Displays assessments with sorting and filtering functionality.
3. SummaryCards: Displays statistics like total assessments and completed assessments.
4. New Assessment Button: Opens a modal or navigates to a new page with a dummy
message for starting a new assessment.

Backend:
PostgreSQL Integration:
 Database schema includes an `assessments` table with the following columns:

 CREATE TABLE assessments (
 id SERIAL PRIMARY KEY,
 title VARCHAR(255) NOT NULL,
 status VARCHAR(50) NOT NULL DEFAULT 'Not Started',
 score INTEGER,
 date_assigned DATE NOT NULL DEFAULT CURRENT_DATE,
 createdAt TIMESTAMP DEFAULT NOW(),
 updatedAt TIMESTAMP DEFAULT NOW()
 );

API Routes in Next.js:
1. GET /api/assessments: Fetches all assessments from the PostgreSQL database.
Use a tool like Postman or Thunder client to test this end point
Use request mode Get
http://localhost:3000/api/assessments

2. PUT /api/assessments: Updates the status and score of a specific assessment.
Use request mode Put
http://localhost:3000/api/assessments
example to put in request body
{ "id": 1,
 "status": "Completed",
 "score": 100
}


Tools and Technologies Used

Frontend:
1. Next.js: React-based framework for server-side rendering and static site generation.
2. CSS Modules: Modular and scoped styling for components.

Backend:
1. PostgreSQL: Relational database for storing assessment data.
2. pg: PostgreSQL client for Node.js to query the database.
3. Sequelize: ORM for database schema management and migrations.

Approach

1. Frontend Development:
• Created a responsive layout with CSS Modules
• Implemented interactive features:
• Dropdown for the avatar.
• Search bar for filtering assessments by title.
• Sorting assessments by date and status.

2.Backend Development:
• Set up a PostgreSQL database for persistent data storage.
• Used Next.js API routes to handle:
• Fetching assessments (GET).
• Updating assessment status and score (PUT).

3. Database Integration:
• Designed a relational schema for the `assessments` table.
• Used `pg` library to query PostgreSQL directly.
• Added migrations and seeders using Sequelize.

4. UX Enhancements:
• Added a search bar to dynamically filter assessments.
• Created dropdown menus for intuitive navigation.
• Improved the visual appeal with CSS modules and background effects.

Challenges Faced

1.Case-Sensitive Column Names in PostgreSQL:
 - PostgreSQL treats unquoted column names as lowercase, causing errors with camelCase
names like `updatedAt`.
 - Solution: Used double quotes (`"updatedAt"`) in SQL queries to handle camelCase.

2. Integrating Next.js with PostgreSQL:
 - Managing database connections within API routes required careful handling of
asynchronous queries.

3. Responsive Design:
 - Ensuring components like the dropdown and table behaved correctly on various screen
sizes.

How to Run the Project

1. Clone the repository:
• git clone https://github.com/Kashika2004/asggn_dashboard.git
• cd tech-assessment-dashboard

2. Configure the database:
• Create a PostgreSQL database
• Update src/utils/db.js with your database credentials

3. Apply database migrations:
• npx sequelize-cli db:migrate

4. Start the development server:
• npm run dev

5. Open your browser and navigate to http://localhost:3000.
Hit this url : localhost:3000/dashboard
to navigate to dashbord
