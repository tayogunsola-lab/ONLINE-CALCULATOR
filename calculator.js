function toNumber(value) {
  if (value === '' || value === null || value === undefined) {
    throw new Error('Enter valid numbers.')
  }
  if (typeof value === 'string' && value.trim() === '') {
    throw new Error('Enter valid numbers.')
  }
  const num = Number(value)
  if (Number.isNaN(num)) {
    throw new Error('Enter valid numbers.')
  }
  if (!Number.isFinite(num)) {
    throw new Error('Number is too large or too small.')
  }
  return num
}

function toDegrees(radians) {
  return radians * (Math.PI/180)
}

function snapNearInt(x, eps = 1e-12) {
  if (typeof x !== 'number' || !Number.isFinite(x)) return x
  const r = Math.round(x)
  return Math.abs(x - r) < eps ? r : x
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
  if (n > 170) {
    throw new Error('Number too large for factorial calculations.')
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
  if ( toNumber(b) === 0 ) {
    throw new Error('Root degree cannot be zero.')
  }
  return toNumber(a) ** (1 / toNumber(b)) || Math.pow(toNumber(a), 1 / toNumber(b))
}

function log(a, b) {
  if (toNumber(a) <= 0 || toNumber(b) <= 0 || toNumber(b) === 1) {
    throw new Error('Invalid input for logarithm.')
  }
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
  const deg = toNumber(a)
  const out = Math.sin(toDegrees(deg))
  return snapNearInt(out)
}

function cos(a) {
  const deg = toNumber(a)
  const out = Math.cos(toDegrees(deg))
  return snapNearInt(out)
}

function tan(a) {
  const deg = toNumber(a)
  const out = Math.tan(toDegrees(deg))
  return snapNearInt(out)
}

function asin(a) {
  return Math.asin(toNumber(toDegrees(a)))
}

function acos(a) {
  return Math.acos(toNumber(toDegrees(a)))
}

function atan(a) {
  return Math.atan(toNumber(toDegrees(a)))
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
  asin,
  acos,
  atan,
  sec,
  cosec,
  cot,
  factorial
}