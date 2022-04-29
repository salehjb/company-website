export default function validate(data, type) {
  const errors = {};

  if (type === "Sign up") {
    if (!data.name.trim()) {
      errors.name = "Name is required";
    } else {
      delete errors.name;
    }
  
    if (!data.username.trim()) {
      errors.username = "Username is required";
    } else {
      delete errors.username;
    }
  }

  if (!data.email.trim()) {
    errors.email = "Email is required";
  } else if (!/\S+@\S+\.\S+/.test(data.email)) {
    errors.email = "Email is not valid";
  } else {
    delete errors.email;
  }

  if (!data.password.trim()) {
    errors.password = "Password is required";
  } else if (data.password.length < 6) {
    errors.password = "Password must be at least 6 characters";
  } else {
    delete errors.password;
  }

  return errors;
}
