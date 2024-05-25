import { useState } from "react";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";

function Login() {
  const [user, setUser] = useState({
    userEmail: "",
    userPassword: "",
  });

  const [errors, setErrors] = useState({
    userEmailError: "",
    userPasswordError: "",
  });

  const [showPassword, setShowPassword] = useState(false);

  const validateEmail = (email) => {
    const pattern = /\S+@\S+\.\S+/;
    return pattern.test(email);
  };

  const validatePassword = (password) => {
    const pattern =
      /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[!@#$%^&*])(?=.*[a-zA-Z]).{8,}$/;
    return pattern.test(password);
  };

  const handleInput = (eve) => {

    if (eve.target.name ==='userEmail') {
       setUser({ ...user, userEmail: eve.target.value });
       setErrors({
        ...errors,
        userEmailError: validateEmail(eve.target.value)
          ? ""
          : "Invalid email format",
      });
    } else if (eve.target.name ==='userPassword') {
         setUser({ ...user, userPassword: eve.target.value });
         setErrors({
        ...errors,
        userPasswordError: validatePassword(eve.target.value)
          ? ""
          : "Password must be at least 8 characters long and contain at least 1 uppercase letter, 1 lowercase letter, 1 symbol, and 1 number",
      });
    }
  };

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  return (
    <Form>
      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>Email address</Form.Label>
        <Form.Control
          value={user.userEmail}
          name="userEmail"
          onChange={handleInput}
          type="email"
          placeholder="Enter email"
          // isInvalid={!!errors.userEmailError}
        />
        <p className="text-danger">{errors.userEmailError}</p>
        <Form.Control.Feedback type="invalid">
          {errors.userEmailError}
        </Form.Control.Feedback>
        <Form.Text className="text-muted">
          We'll never share your email with anyone else.
        </Form.Text>
      </Form.Group>

      <Form.Group className="mb-3" controlId="formBasicPassword">
        <Form.Label>Password</Form.Label>
        <Form.Control
          value={user.userPassword}
          name="userPassword"
          onChange={handleInput}
          type={showPassword ? "text" : "password"}
          placeholder="Password"
          // isInvalid={!!errors.userPasswordError}
        />
        <p className="text-danger">{errors.userPasswordError}</p>
        <Button variant="secondary" onClick={togglePasswordVisibility}>
          {showPassword ? "Hide" : "Show"} Password
        </Button>
        <Form.Control.Feedback type="invalid">
          {errors.userPasswordError}
        </Form.Control.Feedback>
      </Form.Group>

      <Button variant="primary" type="submit">
        Submit
      </Button>
    </Form>
  );
}

export default Login;
