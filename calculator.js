// ===============================
// Utility Functions
// ===============================

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

function toRadians(degrees) {
  return degrees * (Math.PI / 180)
}

function toDegrees(radians) {
  return radians * (180 / Math.PI)
}

function snapNearInt(x, eps = 1e-12) {
  if (!Number.isFinite(x)) return x
  const rounded = Math.round(x)
  return Math.abs(x - rounded) < eps ? rounded : x
}

function ensureFinite(result) {
  if (!Number.isFinite(result)) {
    throw new Error("Result too large.")
  }
  return result
}

// ===============================
// Basic Operations
// ===============================

function add(a, b) {
  return toNumber(a) + toNumber(b)
}

function subtract(a, b) {
  return toNumber(a) - toNumber(b)
}

function multiply(a, b) {
  return toNumber(a) * toNumber(b)
}

function divide(a, b) {
  const numerator = toNumber(a)
  const denominator = toNumber(b)

  if (denominator === 0) {
    throw new Error("Division by zero.")
  }

  return numerator / denominator
}

function power(a, b) {
  const result = toNumber(a) ** toNumber(b)
  return ensureFinite(result)
}

function exponential(a, b) {
  const result = toNumber(a) * 10 ** toNumber(b)
  return ensureFinite(result)
}

function exponent(a) {
  const result = 10 ** toNumber(a)
  return ensureFinite(result)
}

// ===============================
// Roots & Logarithms
// ===============================

function sqrt(a) {
  const n = toNumber(a)

  if (n < 0) {
    throw new Error("Square root of negative number is not real.")
  }

  return Math.sqrt(n)
}

function rt(a, b) {
  const base = toNumber(a)
  const degree = toNumber(b)

  if (degree === 0) {
    throw new Error("Root degree cannot be zero.")
  }

  if (base < 0 && !Number.isInteger(degree)) {
    throw new Error("Root of negative number must have integer degree.")
  }

  if (base < 0 && degree % 2 === 0) {
    throw new Error("Even root of negative number is not real.")
  }

  return base ** (1 / degree)
}

function log(a, b) {
  const value = toNumber(a)
  const base = toNumber(b)

  if (value <= 0) {
    throw new Error("Logarithm undefined for zero or negative numbers.")
  }

  if (base <= 0 || base === 1) {
    throw new Error("Invalid logarithm base.")
  }

  return Math.log(value) / Math.log(base)
}

function log10(a) {
  const n = toNumber(a)

  if (n <= 0) {
    throw new Error("Logarithm undefined for zero or negative numbers.")
  }

  return Math.log10(n)
}

// ===============================
// Factorial
// ===============================

function factorial(a) {
  const n = toNumber(a)

  if (n < 0) {
    throw new Error("Factorial is not defined for negative numbers.")
  }

  if (!Number.isInteger(n)) {
    throw new Error("Factorial is only defined for integers.")
  }

  if (n > 170) {
    throw new Error("Number too large for factorial calculations.")
  }

  let result = 1
  for (let i = 2; i <= n; i++) {
    result *= i
  }

  return result
}

// ===============================
// Trigonometric Functions (Degree Based)
// ===============================

function sin(a) {
  const result = Math.sin(toRadians(toNumber(a)))
  return snapNearInt(result)
}

function cos(a) {
  const result = Math.cos(toRadians(toNumber(a)))
  return snapNearInt(result)
}

function tan(a) {
  const deg = toNumber(a)

  if ((deg - 90) % 180 === 0) {
    throw new Error("Tangent undefined at this angle.")
  }

  const result = Math.tan(toRadians(deg))
  return snapNearInt(result)
}

function sec(a) {
  const c = cos(a)

  if (c === 0) {
    throw new Error("Secant undefined at this angle.")
  }

  return 1 / c
}

function cosec(a) {
  const s = sin(a)

  if (s === 0) {
    throw new Error("Cosecant undefined at this angle.")
  }

  return 1 / s
}

function cot(a) {
  const t = tan(a)

  if (t === 0) {
    throw new Error("Cotangent undefined at this angle.")
  }

  return 1 / t
}

// ===============================
// Inverse Trigonometric Functions (Returns Degrees)
// ===============================

function asin(a) {
  const val = toNumber(a)

  if (val < -1 || val > 1) {
    throw new Error("Input must be between -1 and 1.")
  }

  return toDegrees(Math.asin(val))
}

function acos(a) {
  const val = toNumber(a)

  if (val < -1 || val > 1) {
    throw new Error("Input must be between -1 and 1.")
  }

  return toDegrees(Math.acos(val))
}

function atan(a) {
  return toDegrees(Math.atan(toNumber(a)))
}

// ===============================
// Export
// ===============================

export default {
  toNumber,
  add,
  subtract,
  multiply,
  divide,
  power,
  exponential,
  exponent,
  sqrt,
  rt,
  log,
  log10,
  factorial,
  sin,
  cos,
  tan,
  sec,
  cosec,
  cot,
  asin,
  acos,
  atan
}
