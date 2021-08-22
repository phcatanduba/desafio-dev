## About

The purpose of this SPA is to persist the data that the user uploads in a txt file to show the data of each store that uses the system.
The user will have two options to upload or view the store data.

## How to run
1. Clone this repository
2. Create a database using ``migrations`` 
- 2.1 Enter to postgres terminal
```bash
sudo su postgres
psql postgres
```
- 2.2 Create a database
```bash
CREATE DATABASE [database_name];
```

- 2.3 Go to the back-end folder
```bash
cd ./backend
```

- 2.4 Insert your database info at ``.env file`` as the following example
```bash
DATABASE_URL='postgres://postgres:PASSWORD@localhost:5432/DATABASE_NAME'
```
- 2.5 Finally, you can run migrations to create the tables
```bash
npm run build
npm run typeorm migration: run
```

3. Install dependencies
```bash
npm i
```
4. Run the back-end with
```bash
npm run dev
```
5. Go to the front-end folder
```bash
cd ./frontend
```
6. Configure the .env file
``` bash 
REACT_APP_API_BASE_URL = api_ul || http://localhost:4000
```
7. Run the front-end
``` bash
 npm start
```
## How to test

- 1.1 Create a test database
```bash
CREATE DATABASE [database_test_name];
```
- 1.2 Insert your test database info at ``.env file`` as the following example
```bash
DATABASE_URL='postgres://postgres:PASSWORD@localhost:5432/DATABASE_TEST_NAME'
```
- 1.3 Finally, you can run migrations to create the tables
```bash
npm run build
npm run typeorm migration: run
```

3. Run
```bash
npm test
```
