import express from 'express'
import calculator from './calculator.js'

const app = express()

app.get('/', (req, res) => {
  res.send('Hello, Welcome to Calculator')
})


app.get('/calc', (req, res) => {
  const { num1, num2, num, op } = req.query
  try {
    let result
    let message

    switch (op) {
      case 'add':
        result = calculator.add(num1, num2)
        message = `The value of ${num1} + ${num2} is ${result}`
        break

      case 'subtract':
        result = calculator.subtract(num1, num2)
        message = `The value of ${num1} - ${num2} is ${result}`
        break

      case 'multiply':
        result = calculator.multiply(num1, num2)
        message = `The value of ${num1} x ${num2} is ${result}`
        break

      case 'divide':
        result = calculator.divide(num1, num2)
        message = `The value of ${num1} ÷ ${num2} is ${result}`
        break

      case 'power':
        result = calculator.power(num1, num2)
        message = `The value of ${num1} ^ ${num2} is ${result}`
        break

      case 'rt':
        result = calculator.rt(num1, num2)
        message = `The value of ${num2}th root of ${num1} is ${result}`
        break

      case 'log':
        result = calculator.log(num1, num2)
        message = `The value of log base ${num2} of ${num1} is ${result}`
        break

      case 'exponential':
        result = calculator.exponential(num1, num2)
        message = `The value of ${num1} x 10^${num2} is ${result}`
        break

      case 'sin':
        result = calculator.sin(num)
        message = `The value of sin ${num}º is ${result}`
        break

      case 'cos':
        result = calculator.cos(num)
        message = `The value of cos ${num}º is ${result}`
        break

      case 'tan':
        result = calculator.tan(num)
        message = `The value of tan ${num}º is ${result}`
        break

      case 'asin':
        result = calculator.asin(num)
        message = `The value of sin inverse ${num}º is ${result}`
        break

      case 'acos':
        result = calculator.acos(num)
        message = `The value of cos inverse ${num}º is ${result}`
        break

      case 'atan':
        result = calculator.atan(num)
        message = `The value of tan inverse ${num}º is ${result}`
        break

      case 'cot':
        result = calculator.cot(num)
        message = `The value of cot ${num}º is ${result}`
        break

      case 'sec':
        result = calculator.sec(num)
        message = `The value of sec ${num}º is ${result}`
        break

      case 'cosec':
        result = calculator.cosec(num)
        message = `The value of cosec ${num}º is ${result}`
        break

      case 'sqrt':
        result = calculator.sqrt(num)
        message = `The value of sqrt ${num} is ${result}`
        break

      case 'log10':
        result = calculator.log10(num)
        message = `The value of log10 ${num} is ${result}`
        break

      case 'exponent':
        result = calculator.exponent(num)
        message = `The value of 10^${num} is ${result}`
        break
      
      case 'factorial':
        result = calculator.factorial(num)
        message = `The value of ${num}! is ${result}`
        break

      default:
        throw new Error('Invalid Operation!')
    }

    return res.send(message)
  } catch (error) {
    return res.status(400).send(error.message)
  }
})

const port = process.env.PORT
app.listen(port, () => {
  console.log(`Calculator is running on http://localhost:${port}`)
})