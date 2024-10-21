import React, { useState } from "react";
import { MenuItems } from "./SidebarData";

const Sidebar = () => {
  const [activeMenu, setActiveMenu] = useState(null);
 
  const toggleMenu = (id) => {
    setActiveMenu(activeMenu === id ? null : id);
  };

  return (
    <div className="sidebar" id="sidebar">
      <div className="sidebar-inner slimscroll">
        <div id="sidebar-menu" className="sidebar-menu">
          <ul>
            <li className="clinicdropdown">
              <a href="profile.html">
                <img
                  src="assets/img/profiles/avatar-14.jpg"
                  className="img-fluid"
                  alt="Profile"
                />
                <div className="user-names">
                  <h5>Adrian Davies</h5>
                  <h6>Tech Lead</h6>
                </div>
              </a>
            </li>
          </ul>
          <ul>
            {MenuItems.map((menuItem) => (
              <li key={menuItem.id}>
                <h6 className="submenu-hdr">{menuItem.header}</h6>
                <ul>
                  {menuItem.submenu.map((submenuItem) => (
                    <li key={submenuItem.id} className="submenu">
                      <a
                        href="#"
                        className={
                          activeMenu === submenuItem.id ? "active subdrop" : ""
                        }
                        onClick={() => toggleMenu(submenuItem.id)}
                      >
                        <i className={submenuItem.iconClass} />
                        <span>{submenuItem.title}</span>
                        <span className="menu-arrow" />
                      </a>
                      <ul
                        className={
                          activeMenu === submenuItem.id ? "d-block " : ""
                        }
                      >
                        {submenuItem.menu.map((subMenuLink) => (
                          <li key={subMenuLink.id}>
                            <a href={subMenuLink.link}>{subMenuLink.title}</a>
                          </li>
                        ))}
                      </ul>
                    </li>
                  ))}
                </ul>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
