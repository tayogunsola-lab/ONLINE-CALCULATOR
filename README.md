# Online Calculator

A simple online calculator built with Node.js and Express.
It supports query string operations (add, subtract, multiply, divide) and returns results in JSON format.
This project also includes sample requests and basic API documentation.

---

## Features

* Four core operations: Addition, Subtraction, Multiplication, and Division
* Input validation to ensure only numbers are processed
* Custom error handling for division by zero
* Built using modern JavaScript with ES Modules (import/export)

---

## Tech Stack

* Runtime: Node.js 24.12.0
* Framework: Express 5.2.1
* Version Control: Git

---

## Project Structure

```
online-calculator/
│
├── index.js         Main server file
├── calculator.js    Calculator logic module
├── package.json     Project metadata and dependencies
└── README.md        Project documentation
```

---

## Installation

### 1. Clone the repository

```
git clone https://github.com/tayogunsola-lab/ONLINE-CALCULATOR.git
```

### 2. Navigate into the project directory

```
cd ONLINE-CALCULATOR
```

### 3. Install dependencies

```
npm install
```

### 4. Start the server

```
node index.js
```

The server will start at:

```
http://localhost:3000
```

---

## API Usage

### Base URL

```
http://localhost:3000
```

---

### Health Check

```
GET /
```

Response:

```
Server is running on port 3000
```

---

## Calculator Endpoint

```
GET /calc
```

### Query Parameters

* `num1` First number
* `num2` Second number
* `op` Operation to perform

### Supported Operations

* add
* sub
* mul
* div

---

## Example Requests

Addition:

```
/calc?num1=10&num2=5&op=add
```

Subtraction:

```
/calc?num1=10&num2=5&op=sub
```

Multiplication:

```
/calc?num1=10&num2=5&op=mul
```

Division:

```
/calc?num1=10&num2=5&op=div
```

---

## Sample Response

```json
{
  "success": true,
  "message": "Calculation successful",
  "data": {
    "num1": "10",
    "num2": "5",
    "operation": "add",
    "result": 15
  }
}
```

---

## Common Errors

* Using letters instead of numbers
* Dividing by zero
* Using an unsupported operation

The API returns clear error messages when these issues occur.

## Contributors and their tasks


