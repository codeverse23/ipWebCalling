import React from "react";
import PagesIndex from "../../Pages/PagesIndex";

const Main_Content = () => {
  const [isSidebarOpen, setIsSidebarOpen] = PagesIndex.useState(false);

  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

  return (
    <div className="App">
      <div className={`main-wrapper ${isSidebarOpen ? "slide-nav" : ""}`}>
        <PagesIndex.Header toggleSidebar={toggleSidebar} />
        <PagesIndex.Sidebar />
        <div className="page-wrapper">
          <div className="content">
            <PagesIndex.Outlet />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Main_Content;
