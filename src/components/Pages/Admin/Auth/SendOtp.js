import PagesIndex from "../../PagesIndex";

const SendOtp = () => {
  const navigate = PagesIndex.useNavigate();
  const formik = PagesIndex.useFormik({
    initialValues: {
      email: "",
    },

    validate: (values) => {
      const errors = {};
      if (!values.email) {
        errors.email = PagesIndex.valid_err.EMPTY_EMAIL_ERROR;
      } else if (!PagesIndex.valid_regex.Email_regex(values.email)) {
        errors.email = PagesIndex.valid_err.INVALID_EMAIL_ERROR;
      }

      return errors;
    },
    onSubmit: async (values) => {
      const res = await PagesIndex.auth_services.SEND_OTP(values);
console.log(res)
      if (res.status) {
        PagesIndex.toast.success(res.message);
    setTimeout(()=>{
      navigate("/reset-password",{state:{otp:res.otp}})
    },1000)
      } else{ PagesIndex.toast.error(res.message);}
     
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
  ];
  return (
    <PagesIndex.Auth_design_wrapper>
      <div className="mx-auto mw-450">
        <div className="text-center mb-4">
          <img src="assets/img/logo.svg" className="img-fluid" alt="Logo" />
        </div>
        <div className="mb-4">
          <h4 className="mb-2 fs-20">Forgot Password?</h4>
          <p>
            If you forgot your password, well, then we’ll email you instructions
            to reset your password.
          </p>
        </div>

        <PagesIndex.ReusableForm
          fieldtype={fields.filter((field) => !field.showWhen)}
          formik={formik}
          btn_name={"Send OTP"}
          button_Size={"w-100"}
          show_submit={true}
          form_type="forgot"
        />
        <div className="mb-3 mt-3 text-center">
          <h6>
            Return to{" "}
            <PagesIndex.Link to="/login" className="text-purple link-hover">
              {" "}
              Login
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

export default SendOtp;
