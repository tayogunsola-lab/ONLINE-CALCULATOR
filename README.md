# Online Calculator

A simple online calculator built with Node.js and Express.
It supports query string operations (add, subtract, multiply, divide) and returns results in Plain Text format.
`Plain Text was prioritized over JSON for simplicity.`
This project also includes sample requests and basic API documentation.

---

## Features

* Two operation types: Simple and Scientific

```
* Simple: Addition, Subtraction, Division, Multiplication
* Acientific: Trig Functions, Root, Power, Exponential, Factorial
```
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
├── .gitignore             To keep the repo clean and remove unnecessary files
├── README.md              Project documentation
├── index.js               Main server file
├── calculator.js          Calculator logic module
├── eslint.config.js       To configure the behavior of ESLint
├── package-lock.json      To ensures that the same version of a specific dependency is installed
└── package.json           Project metadata and dependencies
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

### Enpoint for Single Number Operations

```
http://localhost:3000/calc?num={num}&op={op}
```

### Endpoint for Multiple Number Operations

```
http://localhost:3000/calc?num1={num1}&num2={num2}&op={op}
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

* `num1` First Input for Double Number Operations
* `num2` Second Input for Double Number Operations
* `num` Input for Single Number Operations
* `op` Operation to perform

### Supported Operations

#### Multiple Number Operations
* add
* subtract
* power
* multiply
* rt
* log
* divide
* exponential
* exponent

#### Single Number Operations
* sqrt
* log10
* sin
* cos
* tan
* asin
* acos
* atan
* sec
* cosec
* cot
* factorial

---

## Example Requests
### Arithmetic Operations (Requires num1, num2)
Addition:

```
GET /calc?num1={num1}&num2={num2}&op=add
```

Subtraction:

```
GET /calc?num1={num1}&num2={num2}&op=subtract
```

Multiplication:

```
GET /calc?num1={num1}&num2={num2}&op=multiply
```

Division:

```
GET /calc?num1={num1}&num2={num2}&op=divide
```

Power:

```
GET /calc?num1={num1}&num2={num2}&op=power
```

Nth Root:

```
GET /calc?num1={num1}&num2={num2}&op=rt
```

Log (custom base):

```
GET /calc?num1={num1}&num2={num2}&op=log
```

Scientific Notation:
```
GET /calc?num1={num1}&num2={num2}&op=exponential
```

### Trigonometric Functions (Requires num)
Sine:

```
GET /calc?num={num}&op=sin
```

Cosine:

```
GET /calc?num={num}&op=cos
```

Tangent: 

```
GET /calc?num={num}&op=tan
```

Sine Inverse:

```
GET /calc?num={num}&op=asin
```

Cosine Inverse:

```
GET /calc?num={num}&op=acos
```

Tangent Inverse:

```
GET /calc?num={num}&op=atan
```

Cotangent Inverse:

```
GET /calc?num={num}&op=cot
```

Secant:

```
GET /calc?num={num}&op=sec
```

Cosecant:

```
GET /calc?num={num}&op=cosec
```

### Logarithm and Exponential (Requires num)
Square Root:

```
GET /calc?num={num}&op=sqrt
```

Log Base 10:

```
GET /calc?num={num}&op=log10
```

10 to the power of n:

```
GET /calc?num={num}&op=exponent
```

### Other Operations
Factorial:

```
GET /calc?num={num}&op=factorial
```


---

## Sample Response

```
Addition: The value of 22 + 33 is 55

Multiplication: The value of 2 * 3 is 6

Division: The value of 22 ÷ 11 is 2

Tan: The value of tan 45º is 1.6197751905438615

Sin: The value of sin 45º is 0.8509035245341184

Cos: The value of cos 45º is 0.5253219888177297

Factorial: The value of 45! is 1.1962222086548019e+56
```

---

## Common Errors

* Using letters instead of numbers
* Dividing by zero(returns Undfined for Divisions with zero as both Numerator and Denominator and Infinty '∞' for 0 as the denominator alone)
* Using an unsupported operation

The API returns clear error messages when these issues occur.

## Contributors and their tasks


1. NAME: Chukwuebuka Timothy Ayogu, 
   EMAIL: ayogutimothy107@gmail.com
   REG NO: BD/2025/TC5/186
2. Name: Tayo Ogunsola
   Email:  tayogunsola@gmail.com
   Reg No: BD/2025/TC5/183
3. Name: Adepoju Yusuf, 
   Email: yusufadepoju22@gmail.com, 
   Reg No: BD/2025/TC5/199
4. Name: Omoju Oluwamayowa
   Email: omojumayowa@gmail.com
   Reg No: BD/2025/TC5/196
5. Name: Oladosu Abdullateef.
   Email: ayofrenzy719@gmail.com 
   Reg No:BD/2025/TC5/126
6. Name: Obi Celine Praise
   Email: obipraise2002@gmail.com 
   Reg No: BD/2025/TC5/135
7. Name:  Asil Adongo 
   Email adongoasil@gmail.com 
   Reg no: BD/2025/TC5/195


