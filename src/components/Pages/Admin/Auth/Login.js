import PagesIndex from "../../PagesIndex";

const Login = () => {
  const navigate = PagesIndex.useNavigate();

  const formik = PagesIndex.useFormik({
    initialValues: {
      email: "",
      password: "",
    },

    validate: (values) => {
      const errors = {};
      if (!values.email) {
        errors.email = PagesIndex.valid_err.EMPTY_EMAIL_ERROR;
      } else if (!PagesIndex.valid_regex.Email_regex(values.email)) {
        errors.email = PagesIndex.valid_err.INVALID_EMAIL_ERROR;
      }
      if (!values.password) {
        errors.password = PagesIndex.valid_err.EMPTY_PASSWORD_ERROR;
      } else if (!PagesIndex.valid_regex.Password_Rejex(values.password)) {
        errors.password = PagesIndex.valid_err.PASSWORD__LENGTH_ERROR;
      }
      return errors;
    },
    onSubmit: async (values) => {
      const res = await PagesIndex.auth_services.LOGIN(values);
      if (res.status) {
        PagesIndex.toast.success(res.message);
        localStorage.setItem("token", res.data)
        setTimeout(() => {
          navigate("/");
        }, 1000);
      } else {
        PagesIndex.toast.error(res.message);
      }
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
    <PagesIndex.Auth_design_wrapper>
      <div className="mx-auto mw-450">
        <div className="text-center mb-4">
          <img src="assets/img/logo.svg" className="img-fluid" alt="Logo" />
        </div>
        <div className="mb-4">
          <h4 className="mb-2 fs-20">Sign In</h4>
          <p>Access the CRMS panel using your email and passcode.</p>
        </div>
        <div className="mb-3">
          <PagesIndex.ReusableForm
            fieldtype={fields.filter((field) => !field.showWhen)}
            formik={formik}
            btn_name={"Sign In"}
            button_Size={"w-100"}
            show_submit={true}
            form_type="login"
          />
        </div>
        
        {/* <div className="mb-3">
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
        </div> */}
        <div className="form-set-login or-text mb-3">
          <h4>OR</h4>
        </div>
        <div className="d-flex align-items-center justify-content-center flex-wrap mb-3">
          <div className="text-center me-2 flex-fill">
            <a
              href="#"
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
              href="#"
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
              href="#"
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
          <p className="fw-medium text-gray">Copyright © 2024</p>
        </div>
      </div>
    </PagesIndex.Auth_design_wrapper>
  );
};

export default Login;


