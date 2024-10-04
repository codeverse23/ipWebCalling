import { useFormik } from "formik";
import React from "react";
import { Link } from "react-router-dom";
import ReusableForm from "../../Helpers/FormikForm/ReusableForm";

const Login = () => {
  const formik = useFormik({
    initialValues: {
      email: "",
      password: "",
    },

    validate: (values) => {},
    onSubmit: async (values) => {
      console.log(values);
    },
  });

  const fields = [
    {
      name: "email",
      label: "Email",
      type: "text",
      label_size: 12,
      col_size: 12,
    },
    {
      name: "password",
      label: "Password",
      type: "password",
      label_size: 12,
      col_size: 12,
    },
  ];
  return (
    <div className="main-wrapper">
      <div className="account-content">
        <div className="d-flex flex-wrap w-100 vh-100 overflow-hidden account-bg-01">
          <div className="d-flex align-items-center justify-content-center flex-wrap vh-100 overflow-auto p-4 w-50 bg-backdrop">
            <div className="mx-auto mw-450">
              <div className="text-center mb-4">
                <img
                  src="assets/img/logo.svg"
                  className="img-fluid"
                  alt="Logo"
                />
              </div>
              <div className="mb-4">
                <h4 className="mb-2 fs-20">Sign In</h4>
                <p>Access the CRMS panel using your email and passcode.</p>
              </div>
              <div className="mb-3">
                <ReusableForm
                  fieldtype={fields.filter((field) => !field.showWhen)}
                  formik={formik}
                  btn_name={"Sign In"}
                  button_Size={"w-100"}
                  show_submit={true}
                  form_type="login"
                />
              </div>
              <div className="mb-3">
                <h6>
                  New on our platform?
                  <Link
                    to="/register"
                    href="register.html"
                    className="text-purple link-hover"
                  >
                    {" "}
                    Create an account
                  </Link>
                </h6>
              </div>
              <div className="form-set-login or-text mb-3">
                <h4>OR</h4>
              </div>
              <div className="d-flex align-items-center justify-content-center flex-wrap mb-3">
                <div className="text-center me-2 flex-fill">
                  <a
                    href="javascript:void(0);"
                    className="br-10 p-2 px-4 btn bg-pending  d-flex align-items-center justify-content-center"
                  >
                    <img
                      className="img-fluid m-1"
                      src="assets/img/icons/facebook-logo.svg"
                      alt="Facebook"
                    />
                  </a>
                </div>
                <div className="text-center me-2 flex-fill">
                  <a
                    href="javascript:void(0);"
                    className="br-10 p-2 px-4 btn bg-white d-flex align-items-center justify-content-center"
                  >
                    <img
                      className="img-fluid  m-1"
                      src="assets/img/icons/google-logo.svg"
                      alt="Facebook"
                    />
                  </a>
                </div>
                <div className="text-center flex-fill">
                  <a
                    href="javascript:void(0);"
                    className="bg-dark br-10 p-2 px-4 btn btn-dark d-flex align-items-center justify-content-center"
                  >
                    <img
                      className="img-fluid  m-1"
                      src="assets/img/icons/apple-logo.svg"
                      alt="Apple"
                    />
                  </a>
                </div>
              </div>
              <div className="text-center">
                <p className="fw-medium text-gray">Copyright © 2024 - CRMS</p>
              </div>
            </div>
         
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
