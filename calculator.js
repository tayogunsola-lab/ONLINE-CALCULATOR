function toNumber(value) {
  const num = Number(value)
  if (Number.isNaN(num)) {
    throw new Error('Enter valid numbers.')
  }
  return num
}

function add(a, b) {
  return toNumber(a) + toNumber(b)
}

function subtract(a, b) {
  return toNumber(a) - toNumber(b)
}

function power(a, b) {
  return toNumber(a) ** toNumber(b)
}

function exponential(a, b) {
  return toNumber(a) * 10 ** toNumber(b)
}

function exponent(a) {
  return 10 ** toNumber(a)
}

function factorial(a) {
  const n = toNumber(a)
  if (n < 0) {
    throw new Error('Factorial is not defined for negative numbers.')
  }
  let result = 1
  for (let i = 2; i <= n; i++) {
    result *= i
  }
  return result
}

function sqrt(a) {
  return Math.sqrt(toNumber(a))
}

function rt(a, b) {
  return toNumber(a) ** (1 / toNumber(b)) || Math.pow(toNumber(a), 1 / toNumber(b))
}

function log(a, b) {
  return Math.log(toNumber(a)) / Math.log(toNumber(b))
}

function log10(a) {
  return Math.log10(toNumber(a))
}

function multiply(a, b) {
  return toNumber(a) * toNumber(b)
}

function divide(a, b) {
  const numerator = toNumber(a)
  const denominator = toNumber(b)
  if (denominator === 0 && numerator === 0) {
    return `Undefined`
  }
  if (denominator === 0) {
    return `∞`
  }
  
  return numerator / denominator
}

function sin(a) {
  return Math.sin(toNumber(a))
}

function cos(a) {
  return Math.cos(toNumber(a))
}

function tan(a) {
  return Math.tan(toNumber(a))
}

function sec(a) {
  return 1 / cos(a)
}

function cosec(a) {
  return 1 / sin(a)
}

function cot(a) {
  return 1 / tan(a)
}

export default {
  toNumber,
  add,
  subtract,
  power,
  exponential,
  exponent,
  sqrt,
  rt,
  log,
  log10,
  multiply,
  divide,
  sin,
  cos,
  tan,
  sec,
  cosec,
  cot,
  factorial
}