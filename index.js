app.get('/calc', (req, res) => {
  let { num1, num2, num, op } = req.query

  try {
    if (!op) {
      throw new Error('Operation (op) is required')
    }

    // Convert values to numbers safely
    if (num1 !== undefined) num1 = Number(num1)
    if (num2 !== undefined) num2 = Number(num2)
    if (num !== undefined) num = Number(num)

    // Validate numbers
    if (
      (num1 !== undefined && isNaN(num1)) ||
      (num2 !== undefined && isNaN(num2)) ||
      (num !== undefined && isNaN(num))
    ) {
      throw new Error('Invalid number input')
    }

    let result
    let message

    switch (op) {

      // 🔹 Two-number operations
      case 'add':
      case 'subtract':
      case 'multiply':
      case 'divide':
      case 'power':
      case 'rt':
      case 'log':
      case 'exponential':

        if (num1 === undefined || num2 === undefined) {
          throw new Error('num1 and num2 are required for this operation')
        }

        if (op === 'divide' && num2 === 0) {
          throw new Error('Cannot divide by zero')
        }

        result = calculator[op](num1, num2)
        break


      // 🔹 One-number operations
      case 'sin':
      case 'cos':
      case 'tan':
      case 'asin':
      case 'acos':
      case 'atan':
      case 'cot':
      case 'sec':
      case 'cosec':
      case 'sqrt':
      case 'log10':
      case 'exponent':
      case 'factorial':

        if (num === undefined) {
          throw new Error('num is required for this operation')
        }

        if (op === 'sqrt' && num < 0) {
          throw new Error('Cannot take square root of negative number')
        }

        if (op === 'factorial' && num < 0) {
          throw new Error('Factorial not defined for negative numbers')
        }

        result = calculator[op](num)
        break

      default:
        throw new Error('Invalid Operation!')
    }

    message = `Result is ${result}`
    return res.send(message)

  } catch (error) {
    return res.status(400).send(error.message)
  }
})
