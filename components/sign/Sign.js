import Image from "next/image";
import Link from "next/link";
// Hooks
import { useState, useEffect } from "react";
// Styles
import styles from "./sign.module.scss";
// Validate Function
import validate from "../validate";
// Toastify
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import notify from "../toast";

function Sign({ image, type }) {
  const [form, setForm] = useState({
    name: "",
    username: "",
    email: "",
    password: "",
  });
  const [errors, setErrors] = useState({});
  const [toched, setToched] = useState({});

  useEffect(() => {
    setErrors(validate(form, type));
  }, [form, toched, type]);

  function handleChangeInput(e) {
    setForm({ ...form, [e.target.id]: e.target.value });
    console.log(errors);
  }

  function handleSubmit(e) {
    e.preventDefault();

    if (Object.keys(errors).length === 0) {
      notify(`Your ${type} successfully`, "success");
    } else {
      notify(`Please fix the following errors`, "error");
      setToched({
        name: true,
        username: true,
        email: true,
        password: true,
      });
    }
  }

  function focusHandler(e) {
    setToched({ ...toched, [e.target.id]: true });
  }

  return (
    <div className={styles.sign_container}>
      <div className={styles.left_side}>
        <Image src={image} alt="signup" />
      </div>
      <div className={styles.right_side}>
        <div className={styles.right_side_content}>
          <div className={styles.back_link_container}>
            <Link href="/">
              <a className={styles.back_link}>
                <i className="fa-solid fa-arrow-left"></i>
                <span>Home</span>
              </a>
            </Link>
          </div>
          <h1 className={styles.header}>{type} to Panak</h1>
          <div className={styles.google_sign}>
            <button>
              <i className="fa-brands fa-google"></i> {type} with Google
            </button>
          </div>
          <div className={styles.or}>
            <div></div>
            <span>or</span>
            <div></div>
          </div>
          <form className={styles.form_container} onSubmit={handleSubmit}>
            {type === "Sign up" && (
              <div className={styles.name_username}>
                <div className={styles.input_container}>
                  <label htmlFor="name">Name</label>
                  <input
                    type="text"
                    id="name"
                    onChange={handleChangeInput}
                    value={form.name}
                    onFocus={focusHandler}
                  />
                  {errors.name && toched.name && (
                    <span className={styles.error}>{errors.name}</span>
                  )}
                </div>
                <div className={styles.input_container}>
                  <label htmlFor="username">Username</label>
                  <input
                    type="text"
                    id="username"
                    onChange={handleChangeInput}
                    value={form.username}
                    onFocus={focusHandler}
                  />
                  {errors.username && toched.username && (
                    <span className={styles.error}>{errors.username}</span>
                  )}
                </div>
              </div>
            )}
            <div className={styles.input_container}>
              <label htmlFor="email">Email</label>
              <input
                type="email"
                id="email"
                onChange={handleChangeInput}
                value={form.email}
                onFocus={focusHandler}
              />
              {errors.email && toched.email && (
                <span className={styles.error}>{errors.email}</span>
              )}
            </div>
            <div className={styles.input_container}>
              <label htmlFor="password">Password</label>
              <input
                type="password"
                id="password"
                onChange={handleChangeInput}
                value={form.password}
                onFocus={focusHandler}
              />
              {errors.password && toched.password && (
                <span className={styles.error}>{errors.password}</span>
              )}
            </div>
            <div className={styles.buttons_container}>
              <button type="submit">{type}</button>
              <div>
                {type === "Sign up"
                  ? "You have already account?"
                  : "You want create a account?"}{" "}
                <Link href={type === "Sign up" ? "/signin" : "/signup"}>
                  <a>{type === "Sign up" ? "Sign in" : "Sign up"}</a>
                </Link>
              </div>
            </div>
          </form>
          <ToastContainer />
        </div>
      </div>
    </div>
  );
}

export default Sign;
