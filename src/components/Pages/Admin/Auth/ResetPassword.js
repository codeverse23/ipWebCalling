import PagesIndex from "../../PagesIndex";

const ResetPassword = () => {
  const navigate = PagesIndex.useNavigate();
const location = PagesIndex.useLocation()
const otp = location.state.otp

  const formik = PagesIndex.useFormik({
    initialValues: {
      email: "",
      password: "",
      confirmPassword:"",
      // otp:""
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
      if(!values.confirmPassword){
        errors.confirmPassword = PagesIndex.valid_err.EMPTY_CONFIRM_ERROR
      }else if(values.confirmPassword  !== values.password ){
        errors.confirmPassword = PagesIndex.valid_err.CONFIRM_AND_NEW_PASSWORD_ERROR
      }
      // if(!values.otp){
      //   errors.otp = PagesIndex.valid_err.EMPTY_OTP_ERROR
      // }
      return errors;
    },
    onSubmit: async (values) => {
      const data = {
        email:values.email,
        password:values.password,
        otp : otp.toString(),
      }
      const res = await PagesIndex.auth_services.RESET_PASSWORD(data)
      if (res.status) {
        PagesIndex.toast.success(res.message);
    setTimeout(()=>{
      navigate("/login")
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
    // {
    //   name: "otp",
    //   label: "Otp",
    //   type: "text",
    //   label_size: 12,
    //   col_size: 12,
    // },
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
          <h4 className="mb-2 fs-20">Reset Password?</h4>
          <p>Enter New Password &amp; Confirm Password to get inside</p>
        </div>

        <PagesIndex.ReusableForm
          fieldtype={fields.filter((field) => !field.showWhen)}
          formik={formik}
          btn_name={"Change Password"}
          button_Size={"w-100"}
          show_submit={true}
          form_type="resetpassword"
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
        <div className="text-center">
          <p className="fw-medium text-gray">Copyright © 2024</p>
        </div>
      </div>
    </PagesIndex.Auth_design_wrapper>
  );
};

export default ResetPassword;
