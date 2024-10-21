import React from 'react'


const Dashbord = () => {
  return (
    <>
      <>
        <div className="row">
          <div className="col-md-12">
            <div className="page-header">
              <div className="row align-items-center">
                <div className="col-md-4">
                  <h3 className="page-title">Leads Dashboard</h3>
                </div>
                {/* <div className="col-md-8 float-end ms-auto">
                  <div className="d-flex title-head">
                    <div className="daterange-picker d-flex align-items-center justify-content-center">
                      <div className="form-sort me-2">
                        <i className="ti ti-calendar" />
                        <input
                          type="text"
                          className="form-control date-range bookingrange"
                        />
                      </div>
                      <div className="head-icons mb-0">
                        <a
                          href="leads-dashboard.html"
                          data-bs-toggle="tooltip"
                          data-bs-placement="top"
                          data-bs-original-title="Refresh"
                        >
                          <i className="ti ti-refresh-dot" />
                        </a>
                        <a
                          href="#"
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
                </div> */}
              </div>
            </div>
          </div>
        </div>
        <div className="row">
          <div className="col-md-12">
            <div className="card">
              <div className="card-header border-0 pb-0">
                <div className="d-flex align-items-center justify-content-between flex-wrap row-gap-3">
                  <h4>
                    <i className="ti ti-grip-vertical me-1" />
                    Recently Created Leads
                  </h4>
                  <div className="dropdown">
                    <a
                      className="dropdown-toggle"
                      data-bs-toggle="dropdown"
                      href="#"
                    >
                      <i className="ti ti-calendar-check me-2" />
                      Last 30 days
                    </a>
                    <div className="dropdown-menu dropdown-menu-end">
                      <a href="#" className="dropdown-item">
                        Last 15 days
                      </a>
                      <a href="#" className="dropdown-item">
                        Last 30 days
                      </a>
                    </div>
                  </div>
                </div>
              </div>
              <div className="card-body">
                <div className="table-responsive custom-table">
                  <table className="table dataTable" id="lead-project">
                    <thead className="thead-light">
                      <tr>
                        <th>Lead Name</th>
                        <th>Company Name</th>
                        <th>Phone</th>
                        <th>Lead Status</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr className="odd">
                        <td>Collins</td>
                        <td><h2 className="d-flex align-items-center"><a href="company-details.html" className="avatar avatar-sm border me-2"><img className="w-auto h-auto" src="assets/img/icons/company-icon-01.svg" alt="User Image"/></a><a href="company-details.html" className="d-flex flex-column">NovaWave LLC<span className="text-default">Newyork, USA </span></a></h2></td><td>+1 875455453</td><td><span className="badge badge-pill  bg-pending"> Not Contacted</span></td></tr><tr className="even"><td>Konopelski</td><td><h2 className="d-flex align-items-center"><a href="company-details.html" className="avatar avatar-sm border me-2"><img className="w-auto h-auto" src="assets/img/icons/company-icon-02.svg" alt="User Image"/></a><a href="company-details.html" className="d-flex flex-column">BlueSky Industries<span className="text-default">Winchester, KY </span></a></h2></td><td>+1 989757485</td><td><span className="badge badge-pill  bg-warning"> Contacted</span></td></tr><tr className="odd"><td>Adams</td><td><h2 className="d-flex align-items-center"><a href="company-details.html" className="avatar avatar-sm border me-2"><img className="w-auto h-auto" src="assets/img/icons/company-icon-03.svg" alt="User Image"/></a><a href="company-details.html" className="d-flex flex-column">SilverHawk<span className="text-default">Jametown, NY </span></a></h2></td><td>+1 546555455</td><td><span className="badge badge-pill  bg-warning"> Contacted</span></td></tr><tr className="even"><td>Schumm</td><td><h2 className="d-flex align-items-center"><a href="company-details.html" className="avatar avatar-sm border me-2"><img className="w-auto h-auto" src="assets/img/icons/company-icon-04.svg" alt="User Image"/></a><a href="company-details.html" className="d-flex flex-column">SummitPeak<span className="text-default">Compton, RI </span></a></h2></td><td>+1 454478787</td><td><span className="badge badge-pill  bg-pending"> Not Contacted</span>
                        </td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>
            </div>
          </div>
   
        </div>

      </>


    </>
  )
}

export default Dashbord