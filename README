# Basic HCM with Express.js

## Installation

The projects requires [Node.js](https://nodejs.org/) to run.

Cloning the project.
```sh
git clone https://github.com/melhalees/basic-hcm-api.git
```

Install the dependencies and devDependencies and start the server.
```sh
basic-hcm-api
npm i
npm run dev
```

For production environments...

## Endpoints

Employees Endpoints:

| Endpoint | README |
| ------ | ------ |
| index | /api/v1/employees |
| create | /api/v1/employees |
| read | /api/v1/employees/5effaa5662679b5af2c58829Sen |
| update | /api/v1/employees/5effaa5662679b5af2c58829 |
| deltee | /api/v1/employees/5effaa5662679b5af2c5882b |

### Index Endpoint Respone Example:
```json
[
	{
		"_id": "5effaa5662679b5af2c58829Sen",
		"firstName": "John",
		"lastName": "Doe",
		"birthDate": "1990-01-01",
		"bio": "I am a software engineer"
	},
	{
		"_id": "5effaa5662679b5af2c58829",
		"firstName": "Jane",
		"lastName": "Doe",
		"birthDate": "1990-01-01",
		"bio": "I am a software engineer"
	},
	{
		"_id": "5effaa5662679b5af2c5882b",
		"firstName": "John",
		"lastName": "Doe",
		"birthDate": "1990-01-01",
		"bio": "I am a software engineer"
	}
]
```

### Create Endpoint - **Request** Example:
Request Body:
```json
{
	"firstName":"Mohamed",
	"lastName":"Elhalees",
	"birthDate":"2001-05-23",
	"bio":"Hello Express.js"
}
```

Response:
```json
{
	"message": "Employee added"
}
```

### Update Endpoint - **Request** Example:
Request Body:
```json
{
	"lastName":"Marzouk",
}
```

Response:
```json
{
	"message": "Employee updated"
}
```
