import React from 'react';

import dashboardSvg from '../assets/dashboard.svg';
import skillSvg from '../assets/badge.svg';
import intershipSvg from '../assets/paper.svg';

import "../styles/Sidebar.css";

const Sidebar = () => {
  return (
    <aside className="sidebar">
      <nav className="sidebarNav">
        <ul>
          <li className="sidebarNavItem">
            <img src={dashboardSvg} alt='Dashboard' className="svg" />
            <a className="sidebarNavLink" href='!#'>
              Dashboard
            </a>
          </li>
          <li className="sidebarNavItem activeNav">
            <img src={skillSvg} alt='Skill Test' className="skillSvg" />
            <a className="sidebarNavLinkActive" href='!#'>
              Skill Test
            </a>
          </li>
          <li className="sidebarNavItem">
            <img src={intershipSvg} alt='Internships' className="svg" />
            <a className="sidebarNavLink" href='!#'>
              Internships
            </a>
          </li>
        </ul>
      </nav>
    </aside>
  );
};

export default Sidebar;
