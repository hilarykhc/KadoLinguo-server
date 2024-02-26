# InStock

## Project Setup

### Installation - Server

#### Clone Repository

Clone the project repository to your local machine by running the following command:

```bash
git clone https://github.com/charuzain/InStock-Api.git
```

#### Setup

1. Navigate to the project folder in your terminal.

2. Install the project dependencies by running the following command:

```bash
npm install
```

#### Run

To run the server locally, use nodemon by executing the following command:

```bash
npm start
```

### .env file

Create an \`.env\` file in your root folder and replace the values with your own configuration values.

```env
# The port that the server will listen on.
PORT=8080
BACKEND_URL=http://localhost
DB_LOCAL_DBNAME='kadolinguo_knex_mysql'
DB_LOCAL_USER='root'
DB_LOCAL_PASSWORD='your local password'
```

## MySQL DB and Data

To set up the database for the project, follow these steps:

1. **Create Database**: Connect to your local MySQL server and run the following command to create a database named 'kadolinguo_knex_mysql':

```sql
create database kadolinguo_knex_mysql;
```

2. **Switch to Database**: After creating the database, switch to the 'kadolinguo_knex_mysql' database by running the following command:

```sql
use kadolinguo_knex_mysql;
```

3. **Run Migrations and Seed Data**: Navigate to the server folder of your project and run the migrations and seed data scripts.

```bash
npx knex migrate:latest
```

```bash
npx knex seed:run
```

These commands will set up the necessary tables and seed data for the project.

### Built With

#### Front-end

- React
- JavaScript
- HTML5
- Sass
- CSS3

#### Back-end

- Node.js
- Express
- Knex
