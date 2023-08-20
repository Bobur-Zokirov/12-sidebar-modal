import { FaTimes } from "react-icons/fa";
import { useGlobalContext } from "../context";
import { links, social } from "../constants/data";

const Sidebar = () => {
  const { isSidebarOpen, closeSidebar } = useGlobalContext();
  return (
    <div className={`${isSidebarOpen && "show-sidebar"} sidebar`}>
      <div className="sidebar-header">
        <img
          src="https://raw.githubusercontent.com/john-smilga/react-projects/master/12-sidebar-modal/final/src/logo.svg"
          alt="logo"
        />
        <button className="close-btn" onClick={closeSidebar}>
          <FaTimes />
        </button>
      </div>

      <div className="links">
        {links.map((link) => {
          const { id, url, icon, text } = link;

          return (
            <a key={id} href={url} className="link">
              {icon}
              {text}
            </a>
          );
        })}
      </div>

      <div className="social-icons">
        {social.map((socialIcon) => {
          const { id, url, icon } = socialIcon;

          return (
            <a key={id} href={url}>
              {icon}
            </a>
          );
        })}
      </div>
    </div>
  );
};

export default Sidebar;
