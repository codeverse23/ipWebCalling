import React from 'react'

const Auth_design_wrapper = ({children}) => {
  return (
    <div className="main-wrapper">
    <div className="account-content">
      <div className="d-flex flex-wrap w-100 vh-100 overflow-hidden account-bg-01">
        <div className="d-flex align-items-center justify-content-center flex-wrap vh-100 overflow-auto p-4 w-50 bg-backdrop">
    {children}
        </div>
      </div>
    </div>
  </div>
  )
}

export default Auth_design_wrapper