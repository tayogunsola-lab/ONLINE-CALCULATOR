import express from "express";
import calculator from "./calculator.js";

const app = express();

app.get("/calc", (req, res) => {

  try {
  const { num1, num2, op } = req.query;

  let result;
  // call calculator functions
  if (op === "add") {
    result = calculator.add(num1, num2);
  }
  else if (op === "sub") {
    result = calculator.subtract(num1, num2);
  }
  else if (op === "mul") {
    result = calculator.multiply(num1, num2);
  }
  else if (op === "div") {
    result = calculator.divide(num1, num2);
  }
  else {
    throw new Error("Invalid operation");
  }

  //  RESPONDE FORMATTING
  res.json({
    success: true,
    message: "Calculation successful",
    data: {
      num1,
      num2,
      operation: op,
      result
    }
  });

} catch (error) {
  // ERROR RESPONSE FORMAT
  res.json({
    success: false,
    message: error.message
  });
}

});

app.get("/", (req, res) => {
  res.send("Server is running on port 3000");
});

app.listen(3000);
