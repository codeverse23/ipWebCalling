import React from "react";

const ProfileUpdate = () => {
  return (
    <div className="row">
      <div className="col-md-12">
        <div className="page-header">
          <div className="row align-items-center">
            <div className="col-sm-4">
              <h4 className="page-title">Settings</h4>
            </div>
            <div className="col-sm-8 text-sm-end">
              <div className="head-icons">
                <a
                  href="profile.html"
                  data-bs-toggle="tooltip"
                  data-bs-placement="top"
                  data-bs-original-title="Refresh"
                >
                  <i className="ti ti-refresh-dot" />
                </a>
                <a
                  href="javascript:void(0);"
                  data-bs-toggle="tooltip"
                  data-bs-placement="top"
                  data-bs-original-title="Collapse"
                  id="collapse-header"
                >
                  <i className="ti ti-chevrons-up" />
                </a>
              </div>
            </div>
          </div>
        </div>
        <div className="card">
          <div className="card-body pb-0 pt-2">
            <ul className="nav nav-tabs nav-tabs-bottom">
              <li className="nav-item me-3">
                <a href="profile.html" className="nav-link px-0 active">
                  <i className="ti ti-settings-cog me-2" />
                  General Settings
                </a>
              </li>
              <li className="nav-item me-3">
                <a href="company-settings.html" className="nav-link px-0">
                  <i className="ti ti-world-cog me-2" />
                  Website Settings
                </a>
              </li>
              <li className="nav-item me-3">
                <a href="invoice-settings.html" className="nav-link px-0">
                  <i className="ti ti-apps me-2" />
                  App Settings
                </a>
              </li>
              <li className="nav-item me-3">
                <a href="email-settings.html" className="nav-link px-0">
                  <i className="ti ti-device-laptop me-2" />
                  System Settings
                </a>
              </li>
              <li className="nav-item me-3">
                <a href="payment-gateways.html" className="nav-link px-0">
                  <i className="ti ti-moneybag me-2" />
                  Financial Settings
                </a>
              </li>
              <li className="nav-item">
                <a href="storage.html" className="nav-link px-0">
                  <i className="ti ti-flag-cog me-2" />
                  Other Settings
                </a>
              </li>
            </ul>
          </div>
        </div>
        <div className="row">
          <div className="col-xl-3 col-lg-12 theiaStickySidebar">
            <div className="card">
              <div className="card-body">
                <div className="settings-sidebar">
                  <h4 className="fw-semibold mb-3">General Settings</h4>
                  <div className="list-group list-group-flush settings-sidebar">
                    <a href="profile.html" className="fw-medium active">
                      Profile
                    </a>
                    <a href="security.html" className="fw-medium">
                      Security
                    </a>
                    <a href="notifications.html" className="fw-medium">
                      Notifications
                    </a>
                    <a href="connected-apps.html" className="fw-medium">
                      Connected Apps
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="col-xl-9 col-lg-12">
            <div className="card">
              <div className="card-body">
                <h4 className="fw-semibold mb-3">Profile Settings</h4>
                <form action="https://crms.dreamstechnologies.com/html/template/profile.html">
                  <div className="border-bottom mb-3 pb-3">
                    <h5 className="fw-semibold mb-1">Employee Information</h5>
                    <p>Provide the information below</p>
                  </div>
                  <div className="mb-3">
                    <div className="profile-upload">
                      <div className="profile-upload-img">
                        <span>
                          <i className="ti ti-photo" />
                        </span>
                        <img
                          id="ImgPreview"
                          src="assets/img/profiles/avatar-02.jpg"
                          alt="img"
                          className="preview1"
                        />
                        <button
                          type="button"
                          id="removeImage1"
                          className="profile-remove"
                        >
                          <i className="feather-x" />
                        </button>
                      </div>
                      <div className="profile-upload-content">
                        <label className="profile-upload-btn">
                          <i className="ti ti-file-broken" /> Upload File
                          <input type="file" id="imag" className="input-img" />
                        </label>
                        <p>JPG, GIF or PNG. Max size of 800K</p>
                      </div>
                    </div>
                  </div>
                  <div className="border-bottom mb-3">
                    <div className="row">
                      <div className="col-md-4">
                        <div className="mb-3">
                          <label className="form-label">
                            First Name <span className="text-danger">*</span>
                          </label>
                          <input type="text" className="form-control" />
                        </div>
                      </div>
                      <div className="col-md-4">
                        <div className="mb-3">
                          <label className="form-label">
                            Last Name <span className="text-danger">*</span>
                          </label>
                          <input type="text" className="form-control" />
                        </div>
                      </div>
                      <div className="col-md-4">
                        <div className="mb-3">
                          <label className="form-label">
                            User Name <span className="text-danger">*</span>
                          </label>
                          <input type="text" className="form-control" />
                        </div>
                      </div>
                      <div className="col-md-4">
                        <div className="mb-3">
                          <label className="form-label">
                            Phone Number <span className="text-danger">*</span>
                          </label>
                          <input type="text" className="form-control" />
                        </div>
                      </div>
                      <div className="col-md-4">
                        <div className="mb-3">
                          <label className="form-label">
                            Email <span className="text-danger">*</span>
                          </label>
                          <input type="text" className="form-control" />
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="border-bottom mb-3 pb-3">
                    <h5 className="fw-semibold mb-1">Address</h5>
                    <p>Please enter the address details</p>
                  </div>
                  <div className="row">
                    <div className="col-md-12">
                      <div className="mb-3">
                        <label className="form-label">
                          Address <span className="text-danger">*</span>
                        </label>
                        <input type="text" className="form-control" />
                      </div>
                    </div>
                    <div className="col-lg-3 col-md-6">
                      <div className="mb-3">
                        <label className="form-label">
                          Country <span className="text-danger">*</span>
                        </label>
                        <input type="text" className="form-control" />
                      </div>
                    </div>
                    <div className="col-lg-3 col-md-6">
                      <div className="mb-3">
                        <label className="form-label">
                          State / Province{" "}
                          <span className="text-danger">*</span>
                        </label>
                        <input type="text" className="form-control" />
                      </div>
                    </div>
                    <div className="col-lg-3 col-md-6">
                      <div className="mb-3">
                        <label className="form-label">
                          City <span className="text-danger">*</span>
                        </label>
                        <input type="text" className="form-control" />
                      </div>
                    </div>
                    <div className="col-lg-3 col-md-6">
                      <div className="mb-3">
                        <label className="form-label">
                          Postal Code <span className="text-danger">*</span>
                        </label>
                        <input type="text" className="form-control" />
                      </div>
                    </div>
                  </div>
                  <div>
                    <a href="#" className="btn btn-light me-2">
                      Cancel
                    </a>
                    <button type="submit" className="btn btn-primary">
                      Save Changes
                    </button>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProfileUpdate;
