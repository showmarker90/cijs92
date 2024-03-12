import { Button, Input } from "antd";
import React from "react";
import { useFormik } from "formik";

import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import * as yup from "yup";

const validationSchema = yup.object().shape({
  username: yup.string().required(),
  password: yup.string().required(),
  confirmationPassword: yup.string().required(),
});

const App = () => {
  const formik = useFormik({
    initialValues: {
      username: "",
      password: "",
      confirmationPassword: "",
    },

    onSubmit: (value) => {
      toast.success(`Welcome ${value.username}`);
    },
    validationSchema,
    validate: ({ password, confirmationPassword }) => {
      if (password !== confirmationPassword) {
        return { confirmationPassword: "please check password validation" };
      }
    },
  });

  const {
    username: usernameError,
    password: passwordError,
    confirmationPassword: confirmationPasswordErr,
  } = formik.errors;
  return (
    <form onSubmit={formik.handleSubmit}>
      <div>
        <label>Username</label>
        <Input
          value={formik.values.username}
          onChange={formik.handleChange}
          name="username"
          status={usernameError && "error"}
        />
        {usernameError && <p className="error">{usernameError}</p>}
      </div>
      <div>
        <label>Password</label>
        <Input
          value={formik.values.password}
          onChange={formik.handleChange}
          name="password"
          status={passwordError && "error"}
        />
        {passwordError && <p className="error">{passwordError}</p>}
      </div>

      <div>
        <label>Confirmation Password</label>
        <Input
          value={formik.values.confirmationPassword}
          onChange={formik.handleChange}
          name="confirmationPassword"
          status={confirmationPasswordErr && "error"}
        />
        {confirmationPasswordErr && (
          <p className="error">{confirmationPasswordErr}</p>
        )}
      </div>
      <Button
        type="primary"
        style={{
          marginTop: "10px",
        }}
        htmlType="submit"
      >
        Sign up
      </Button>

      <Button type="primary" danger onClick={formik.handleReset}>
        Reset
      </Button>
      <ToastContainer />
    </form>
  );
};
export default App;
