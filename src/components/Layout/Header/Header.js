import PagesIndex from '../../Pages/PagesIndex';

const Header = ({toggleSidebar}) => {
  const [isOpen, setIsOpen] = PagesIndex.useState(false);
  const[showNotification,setShowNotification]= PagesIndex.useState(false)
const navigate = PagesIndex.useNavigate()
  const toggleDropdown = () => {
    setIsOpen(!isOpen);
    setShowNotification(false)
  };

const toggleNotification = ()=>{
  setShowNotification(!showNotification)
  setIsOpen(false);
}
  const handleLogout = ()=>{
navigate("/login")
localStorage.removeItem("token")
  }
  return (
    <div className="header">
        <div className="header-left active">
          <a href="index.html" className="logo logo-normal">
            <img src="assets/img/logo.svg" alt="Logo" />
            <img
              src="assets/img/white-logo.svg"
              className="white-logo"
              alt="Logo"
            />
          </a>
          <a href="index.html" className="logo-small">
            <img src="assets/img/logo-small.svg" alt="Logo" />
          </a>
          <a id="toggle_btn" href="#">
            <i className="ti ti-arrow-bar-to-left" />
          </a>
        </div>
        <a onClick={toggleSidebar} id="mobile_btn" className="mobile_btn" href="#" >
          <span className="bar-icon">
            <span />
            <span />
            <span />
          </span>
        </a>
        <div className="header-user">
          <ul className="nav user-menu">
            <li className="nav-item nav-search-inputs me-auto">
              <div className="top-nav-search">
                <a href="#" className="responsive-search">
                  <i className="fa fa-search" />
                </a>
        
              </div>
            </li>
            <li className="nav-item nav-list">
              <ul className="nav">
          
               
              </ul>
            </li>
   
            <li className="nav-item dropdown nav-item-box">
              <a
                href="#"
                className="nav-link"
                // data-bs-toggle="dropdown"
                onClick={toggleNotification}
              >
                <i className="ti ti-bell" />
                <span className="badge rounded-pill">13</span>
              </a>
              <div className={`dropdown-menu dropdown-menu-end notification-dropdown ${showNotification ? "show show-profile-model" : ""}`}>
                <div className="topnav-dropdown-header">
                  <h4 className="notification-title">Notifications</h4>
                </div>
                <div className="noti-content">
                  <ul className="notification-list">
                    <li className="notification-message">
                      <a href="activities.html">
                        <div className="media d-flex">
                          <span className="avatar flex-shrink-0">
                            <img
                              src="assets/img/profiles/avatar-02.jpg"
                              alt="Profile"
                            />
                            <span className="badge badge-info rounded-pill" />
                          </span>
                          <div className="media-body flex-grow-1">
                            <p className="noti-details">
                              Ray Arnold left 6 comments on Isla Nublar SOC2
                              compliance report
                            </p>
                            <p className="noti-time">Last Wednesday at 9:42 am</p>
                          </div>
                        </div>
                      </a>
                    </li>
                    <li className="notification-message">
                      <a href="activities.html">
                        <div className="media d-flex">
                          <span className="avatar flex-shrink-0">
                            <img
                              src="assets/img/profiles/avatar-03.jpg"
                              alt="Profile"
                            />
                          </span>
                          <div className="media-body flex-grow-1">
                            <p className="noti-details">
                              Denise Nedry replied to Anna Srzand
                            </p>
                            <p className="noti-sub-details">
                              “Oh, I finished de-bugging the phones, but the
                              system's compiling for eighteen minutes, or twenty.
                              So, some minor systems may go on and off for a while.”
                            </p>
                            <p className="noti-time">Last Wednesday at 9:42 am</p>
                          </div>
                        </div>
                      </a>
                    </li>
                    <li className="notification-message">
                      <a href="activities.html">
                        <div className="media d-flex">
                          <span className="avatar flex-shrink-0">
                            <img alt="" src="assets/img/profiles/avatar-06.jpg" />
                          </span>
                          <div className="media-body flex-grow-1">
                            <p className="noti-details">
                              John Hammond attached a file to Isla Nublar SOC2
                              compliance report
                            </p>
                            <div className="noti-pdf">
                              <div className="noti-pdf-icon">
                                <span>
                                  <i className="ti ti-chart-pie" />
                                </span>
                              </div>
                              <div className="noti-pdf-text">
                                <p>EY_review.pdf</p>
                                <span>2mb</span>
                              </div>
                            </div>
                            <p className="noti-time">Last Wednesday at 9:42 am</p>
                          </div>
                        </div>
                      </a>
                    </li>
                  </ul>
                </div>
                <div className="topnav-dropdown-footer">
                  <a href="activities.html" className="view-link">
                    View all
                  </a>
                  <a href="#" className="clear-link">
                    Clear all
                  </a>
                </div>
              </div>
            </li>
            <li className="nav-item dropdown has-arrow main-drop">
              <a
                href="#"
                className="nav-link userset"
                // data-bs-toggle="dropdown"
                onClick={toggleDropdown} 
              >
                <span className="user-info">
                  <span className="user-letter">
                    <img src="assets/img/profiles/avatar-20.jpg" alt="Profile" />
                  </span>
                  <span className="badge badge-success rounded-pill" />
                </span>
              </a>
              <div className={`dropdown-menu menu-drop-user ${isOpen ? 'show show-profile-model' : ''}`}>
                <div className="profilename">
                  <PagesIndex.Link className="dropdown-item" to="/">
                    <i className="ti ti-layout-2" /> Dashboard
                  </PagesIndex.Link>
                  <PagesIndex.Link className="dropdown-item" to="/profile">
                    <i className="ti ti-user-pin" /> My Profile
                  </PagesIndex.Link>
                  <PagesIndex.Link className="dropdown-item" to="#" onClick={()=>handleLogout()}>
                    <i className="ti ti-lock" /> Logout
                  </PagesIndex.Link>
                </div>
              </div>
            </li>
          </ul>
        </div>
        <div className="dropdown mobile-user-menu">
          <a
            href="#"
            className="nav-link dropdown-toggle"
            // data-bs-toggle="dropdown"
            // aria-expanded="false"
            onClick={toggleDropdown} 
          >
            <i className="fa fa-ellipsis-v" />
          </a>
          <div className={`dropdown-menu menu-drop-user ${isOpen ? 'show show-profile-model-mobile' : ''}`}>
   
            <PagesIndex.Link className="dropdown-item" to="/">
                    <i className="ti ti-layout-2" /> Dashboard
                  </PagesIndex.Link>
                  <PagesIndex.Link className="dropdown-item" to="/profile">
                    <i className="ti ti-user-pin" /> My Profile
                  </PagesIndex.Link>
                  <PagesIndex.Link className="dropdown-item" to="#" onClick={()=>handleLogout()}>
                    <i className="ti ti-lock" /> Logout
                  </PagesIndex.Link>
          </div>
        </div>
      </div>
  )
}

export default Header