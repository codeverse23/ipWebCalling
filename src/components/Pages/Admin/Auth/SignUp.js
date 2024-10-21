import PagesIndex from "../../PagesIndex";

const SignUp = () => {
  const formik = PagesIndex.useFormik({
    initialValues: {
      username: "",
      password: "",
      email: "",
      confirmPassword: "",
    },

    validate: (values) => {},
    onSubmit: async (values) => {
      console.log(values);
    },
  });

  const fields = [
    {
      name: "username",
      label: "Name",
      type: "text",
      label_size: 12,
      col_size: 12,
    },
    {
      name: "email",
      label: "Email Address",
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
    {
      name: "confirmPassword",
      label: "Confirm Password",
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
          <h4 className="mb-2 fs-20">Register</h4>
          <p>Create new CRMS account</p>
        </div>
        <div className="mb-3">
          <PagesIndex.ReusableForm
            fieldtype={fields.filter((field) => !field.showWhen)}
            formik={formik}
            btn_name={"Sign Up"}
            button_Size={"w-100"}
            show_submit={true}
            form_type="register"
          />
        </div>
        <div className="mb-3">
          <h6>
            Already have an account?{" "}
            <PagesIndex.Link to="/login" className="text-purple link-hover">
              {" "}
              Sign In Instead
            </PagesIndex.Link>
          </h6>
        </div>
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

export default SignUp;
