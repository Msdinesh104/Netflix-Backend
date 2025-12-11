// const express = require("express");
// const cors = require("cors");

// const app = express();
// app.use(cors());

// app.use(express.urlencoded({ extended: true }));
// app.use(express.json());

// const name = "msd@gmail.com";
// const pass = 1234;

// app.post("/login", (req, res) => {
//   const Email = req.body.email === name;
//   const Password = Number(req.body.password) === pass;

//   const emailError = Email ? null : "Please enter a valid email or mobile number.";
//   const passwordError = Password ? null : "Your password must contain between 4 and 60 characters.";

//   if (Email && Password) {
//     res.send({ success: true });
//   } else {
//     res.send({
//       success: false,
//       emailError,
//       passwordError, // match frontend naming
//     });
//   }
// });

// const PORT = process.env.PORT || 3000;

// app.listen(PORT, () => {
//   console.log(`Server started on port ${PORT}`);
// });

const express = require("express");
const cors = require("cors");

const app = express();
app.use(cors());
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.post("/login", (req, res) => {
  const { email, password } = req.body;

  let emailError = null;
  let passwordError = null;

  // Email validation
  if (!email || email.trim() === "") {
    emailError = "Please enter a valid email or mobile number.";
  }

  // Password validation
  if (!password || password.length < 4 || password.length > 60) {
    passwordError = "Your password must contain between 4 and 60 characters.";
  }

  // If no errors
  if (!emailError && !passwordError) {
    res.send({ success: true });
  } else {
    res.send({
      success: false,
      emailError,
      passwordError,
    });
  }
});

const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
  console.log(`Server started on port ${PORT}`);
});
