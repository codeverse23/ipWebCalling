import { FieldArray } from "formik";
import PagesIndex from "../../Pages/PagesIndex";


const ReusableForm = ({
  fieldtype,
  formik,
  btn_name,
  title,
  VerifyMobileN,
  button_Size,
  Disable_Button,
  after_password_field,
  after_submit_button,
  after_text_field,
  btn_design,
  disabledSubmit,
  isLoading,
  show_submit,
  show_preview,
  form_type,
}) => {
  const location = PagesIndex.useLocation();

  const [passwordVisible, setPasswordVisible] = PagesIndex.useState({});


  const [previews, setPreviews] = PagesIndex.useState([]);

  const handleFileChange = (event, index, name) => {
    const file = event.target.files[0];
    if (file) {
      const newPreviews = [...previews];
      newPreviews[index] = URL.createObjectURL(file);
      setPreviews(newPreviews);

      const reader = new FileReader();
      reader.onload = () => {
        formik.setFieldValue(`${name}_base64`, reader.result);
      };
      reader.readAsDataURL(file);
      formik.setFieldValue(name, file);
    }
  };



  return (
    <>
      <form onSubmit={formik.handleSubmit}>
        <div
          className="row"
          style={{
            height: `${title === "addgroup" ? "65vh" : ""}`,
            overflowY: `${title === "addgroup" ? "scroll" : ""}`,
          }}
        >
          <div className={`row`}>
            {fieldtype.map((field, index) => (
              <>
                {field.type === "select" ? (
                  <>
                    <div className={`col-lg-${field.col_size}`}>
                      <div className="mb-1 row">
                        <label
                          className={`col-form-label col-lg-${field.label_size}`}
                          htmlFor={field.name}
                        >
                          {field.label}
                        
                        </label>
                        <div
                          className={`col-lg-${title === "addgroup" ? 12 : 12}`}
                        >
                          <select
                            className="default-select wide form-control"
                            id={field.name}
                            {...formik.getFieldProps(field.name)}
                            disabled={field.disable}
                          >
                            <option
                              value=""
                              selected
                          
                              disabled
                            >
                              Please Select {field.label}
                            </option>
                            {field.options.map((option) => (
                              <option key={option.value} value={option.value}>
                                {option.label}
                              </option>
                            ))}
                          </select>
                          {formik.errors[field.name] && (
                            <div className="error-text">
                              {formik.errors[field.name]}
                            </div>
                          )}
                        </div>
                      </div>
                    </div>
                  </>
                ) : field.type === "checkbox" ? (
                  <>
                    {field.options &&
                      field.options.map((option) => (
                        <div
                          className={`col-lg-${field.col_size}`}
                          key={option.id}
                        >
                       
                          <div className="form-check custom-checkbox mb-2 ">
                            <input
                              type={field.type}
                              className="form-check-input"
                              id={option.name}
                              {...formik.getFieldProps(option.name)}
                              defaultChecked={option.checked}
                            />
                            <label
                              className="form-check-label fw-bolder "
                              htmlFor={option.name}
                            >
                              {option.name}
                            </label>
                          </div>
                       
                          {option.Nasted &&
                            option.Nasted.map((subOption) => (
                              <div className="row d-flex" key={subOption.id}>
                                <div className={`col-lg-12`}>
                                  <div className="form-check custom-checkbox mb-2 ml-3">
                                    <input
                                      type={field.type}
                                      className="form-check-input"
                                      id={subOption.name}
                                      {...formik.getFieldProps(subOption.name)}
                                      defaultChecked={subOption.checked}
                                    />
                                    <label
                                      className="form-check-label"
                                      htmlFor={subOption.name}
                                    >
                                      {subOption.name}
                                    </label>
                                  </div>
                                </div>
                              </div>
                            ))}
                        </div>
                      ))}

                    {formik.errors[field.name] && (
                      <div className="error-text">
                        {formik.errors[field.name]}
                      </div>
                    )}
                  </>
                ) : field.type === "radio" ? (
                  <>
                    <div className={`col-lg-${field.title_size}`}>
                      {" "}
                      <h5>permission</h5>
                      <div className="row">
                        {field.options &&
                          field.options.map((option, index) => (
                            <>
                              <div
                                className={`col-lg-${field.col_size}`}
                                key={option.id}
                              >
                                <div className="row d-flex">
                                  <div className={`col-lg-${field.col_size}`}>
                                    <div class="form-check custom-checkbox mb-2">
                                      <input
                                        type={field.type}
                                        className="form-check-input"
                                        id={option.label}
                                        {...formik.getFieldProps(option.name)}
                                        defaultChecked={option.checked}
                                      />
                                      <label
                                        className="form-check-label"
                                        for={option.label}
                                      >
                                        {option.label}
                                      </label>
                                    </div>
                                    {formik.errors[field.name] && (
                                      <div className="error-text">
                                        {formik.errors[field.name]}
                                      </div>
                                    )}
                                  </div>
                                </div>
                              </div>
                            </>
                          ))}
                      </div>
                    </div>
                  </>
                ) : field.type === "password" ? (
                  <>
                    {after_password_field}
                    <div className={`col-lg-${field.col_size}`}>
                      <div className="mb-3 row">
                        <label
                          className={`col-form-label col-lg-${field.label_size} col-form-label `}
                          htmlFor={field.name}
                        >
                          {field.label}
                      
                        </label>
                        <div
                      
                          style={{ position: "relative" }}
                        >
                          <input
                            id={field.name}
                            disabled={field.disable}
                            type={
                              passwordVisible[field.name] ? "text" : field.type
                            }
                            placeholder={field.label}
                            {...formik.getFieldProps(field.name)}
                            className={` form-control`}
                          />
                          <i
                            class={`fa-solid ${
                              !passwordVisible[field.name]
                                ? "fa-eye-slash"
                                : "fa-eye"
                            }`}
                            style={{
                              position: "absolute",
                              top: "1.5px",
                              right: "20px",
                              padding: "12.4px 6.6px",
                              borderRadius: "3px",
                            }}
                            onClick={() =>
                              setPasswordVisible((prevState) => ({
                                ...prevState,
                                [field.name]: !prevState[field.name],
                              }))
                            }
                          ></i>

                          {formik.errors[field.name] && (
                            <div
                              className="error-text"
                              style={{ color: "red" }}
                            >
                              {formik.errors[field.name]}
                            </div>
                          )}

                        </div>
                      </div>
                    </div>
                  </>
                ) : field.type === "date" ? (
                  <>
                    <p>datepicker</p>
                    {/* <CustomDatePicker
                      field={field}
                      formik={formik}
                      setDateStates={setDateStates}
                      dateStates={dateStates}
                    /> */}
                  </>
                ) : field.type === "time" ? (
                  <>
                

                    <div className={`col-lg-${field.col_size} mb-3`}>
                      <label
                        className={`col-form-label col-lg-${field.label_size}`}
                        htmlFor={field.name}
                      >
                        {field.label}
                        {/* <span className="text-danger">*</span> */}
                      </label>
                      <input
                        type={field.type}
                        name={field.name}
                        className="form-control"
                     
                        id={field.name}
                        {...formik.getFieldProps(field.name)}
                        min={field.min && field.min.actual_date_formet}
                        max={field.max && field.max.actual_date_formet}
                      />
                    </div>
                  </>
                ) : field.type === "msgbox" ? (
                  <>
                    <div className={`col-lg-${field.col_size}`}>
                      <div className="row d-flex">
                        <div
                       
                        >
                          <div class="mb-3">
                            <label
                              className={`col-form-label col-lg-${field.label_size}`}
                              for={field.name}
                            >
                              {field.label}
                            </label>
                            <textarea
                              class="form-control"
                              rows={field.row_size}
                              id={field.name}
                              name={field.name}
                              {...formik.getFieldProps(field.name)}
                              placeholder={field.label}
                            ></textarea>
                            {formik.errors[field.name] && (
                              <div className="error-text">
                                {formik.errors[field.name]}
                              </div>
                            )}
                          </div>
                        </div>
                      </div>
                    </div>
                  </>
                ) : field.type === "file" ? (
                  <>
                    <div className={`col-lg-${field.col_size}`}>
                      <div className="row d-flex">
                        <div
                          className={`col-lg-${title === "addgroup" ? 6 : 12}`}
                        >
                          <div className="mb-3">
                            <label
                              className={`col-form-label col-form-label`}
                              htmlFor={field.name}
                            >
                              {field.label}
                              
                            </label>

                            <input
                              type="file"
                              id={field.name}
                              onChange={(e) =>
                                handleFileChange(e, index, field.name)
                              } 
                              className={`form-control`}
                           
                            />

                            {show_preview && (
                              <span>
                                {formik.getFieldProps(field?.name).value &&
                                formik.getFieldProps(field?.name).value.name ? (
                                  <span>
                                    {
                                      formik.getFieldProps(field?.name).value
                                        .name
                                    }
                                  </span>
                                ) : (
                                  formik.getFieldProps(field?.name).value
                                )}
                              </span>
                            )}
                          </div>
                        
                       
                        </div>

                        {formik.errors[field.name] && (
                          <div className="error-text">
                            {formik.errors[field.name]}
                          </div>
                        )}

                        {show_preview !== true ||
                        formik.getFieldProps(`${field?.name}_base64`)?.value ||
                        formik.getFieldProps(field?.name)?.value ? (
                          <img
                            src={
                              show_preview
                                ? ""
                                : formik.getFieldProps(`${field.name}_base64`)
                                    .value ||
                                  formik.getFieldProps(field.name).value
                            }
                            name={field.name}
                            id={field.name}
                            alt={show_preview ? "" : `Preview ${index}`}
                            className={
                              show_preview ? "" : "superadmin-preview-img"
                            }
                          />
                        ) : (
                          ""
                        )}
                      </div>
                    </div>
                  </>
                ) : field.type === "fieldarray" ? (
                  <>
                    <FieldArray name={field.name}>
                      {({ push, remove }) => (
                        <div>
                          {formik.values[field.name].map((arrayField, i) => (
                            <div key={i} className="row mb-3">
                              <div className="col-lg-5">
                                <input
                                  type="text"
                                  name={`${field.name}.${i}.title`}
                                  placeholder="Title"
                                  className="form-control"
                                  value={arrayField.title}
                                  onChange={formik.handleChange}
                                />
                                {formik.errors[field.name] &&
                                  formik.errors[field.name][i] &&
                                  formik.errors[field.name][i].title && (
                                    <div className="error-text">
                                      {formik.errors[field.name][i].title}
                                    </div>
                                  )}
                              </div>
                              <div className="col-lg-5">
                                <input
                                  type="text"
                                  name={`${field.name}.${i}.videoUrl`}
                                  placeholder="Video URL"
                                  className="form-control"
                                  value={arrayField.videoUrl}
                                  onChange={formik.handleChange}
                                />
                                {formik.errors[field.name] &&
                                  formik.errors[field.name][i] &&
                                  formik.errors[field.name][i].videoUrl && (
                                    <div className="error-text">
                                      {formik.errors[field.name][i].videoUrl}
                                    </div>
                                  )}
                              </div>
                              <div className="col-lg-2">
                                <button
                                  type="button"
                                  className="btn btn-danger"
                                  onClick={() => remove(i)}
                                >
                                  Delete
                                </button>
                              </div>
                            </div>
                          ))}
                          <button
                            type="button"
                            className="btn btn-primary"
                            onClick={() => push({ title: "", videoUrl: "" })}
                          >
                            Add Row
                          </button>
                        </div>
                      )}
                    </FieldArray>
                  </>
                ) : (
                  <>
                    <div className={`col-lg-${field.col_size}`}>
                      <div className="mb-3 row flex-column">
                        <label
                          className={`col-form-label col-lg-${field.label_size}`}
                          htmlFor={field.name}
                        >
                          {field.label}
                       
                        </label>
                        <div className={`d-flex`}>
                          <input
                            type="text"
                            autocomplete="off"
                            className="form-control"
                            style={{
                              background: field.disable ? "#eeeeee" : "",
                            }}
                            id={field.name}
                            placeholder={`Enter ${field.label}`}
                            {...formik.getFieldProps(field.name)}
                          
                            readOnly={field.disable}
                          />
                          {field.showButton ? (
                            <button
                              style={{ background: "#4e3897", width: "100px" }}
                              className="btn border-0 btn-primary ms-3 col-4"
                              onClick={(e) => {
                                e.preventDefault();
                                VerifyMobileN();
                              }}
                              disabled={Disable_Button}
                            >
                              Send OTP
                            </button>
                          ) : (
                            ""
                          )}
                          <div className="invalid-feedback">
                            Please enter {field.label}
                          </div>
                        </div>
                        {formik.errors[field.name] && (
                          <div className="error-text">
                            {formik.errors[field.name]}
                          </div>
                        )}
                      </div>
                    </div>
                  </>
                )}
                {field.showButton && after_text_field}
              </>
            ))}

            {form_type === "login" && (
              <div className="d-flex align-items-center justify-content-end mb-3">
                {/* <div className="form-check form-check-md d-flex align-items-center">
                  <input
                    className="form-check-input"
                    type="checkbox"
                    defaultValue=""
                    id="checkebox-md"
                    defaultChecked=""
                  />
                  <label className="form-check-label" htmlFor="checkebox-md">
                    Remember Me
                  </label>
                </div> */}
                <div className="text-end">
                  <PagesIndex.Link
                   to="/forgot-password"
                    className="text-primary fw-medium link-hover"
                  >
                    Forgot Password?
                  </PagesIndex.Link>
                </div>
              </div>
            )}

            {/* {form_type === "register" && (
              <div className="d-flex align-items-center justify-content-between mb-3">
                <div className="form-check form-check-md d-flex align-items-center">
                  <input
                    className="form-check-input"
                    type="checkbox"
                    defaultValue=""
                    id="checkebox-md"
                    defaultChecked=""
                  />
                  <label className="form-check-label" htmlFor="checkebox-md">
                    I agree to the{" "}
                    <a
                      href="javascript:void(0);"
                      className="text-primary link-hover"
                    >
                      Terms &amp; Privacy
                    </a>
                  </label>
                </div>
              </div>
            )} */}
            <div className="form-group mb-0 button-main">
              {show_submit ? (
                <>
                  <button
                 
                    className={`btn  submitBtn btn-primary mt-2 ${button_Size} ${
                      location.pathname === "resetpassword" ? "col-md-11" : ""
                    } ${btn_design && "btn_design"}`}
                    type="submit"
                    disabled={
                      disabledSubmit
                        ? disabledSubmit
                        : isLoading
                        ? isLoading
                        : ""
                    }
                  >
                    {/* <Loader/> */}
                    {btn_name}
                  </button>
                </>
              ) : (
                ""
              )}
            </div>
          </div>
        </div>
      </form>
      <div className="row">{after_submit_button}</div>
    </>
  );
};

export default ReusableForm;
