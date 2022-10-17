import "./sidebar.css"
import {
  LineStyle,
  Timeline,
  TrendingUp,
  PermIdentity,
  Storefront,
  AttachMoney, 
  BarChart,
  MailOutline,
  DynamicFeed,
  ChatBubbleOutline,
  WorkOutline,
  Report,
} from "@material-ui/icons";
import { Link } from "react-router-dom";
function SideBar() {
  return (
    <div className="sidebar">
      <div className="sidebarWrapper">
        <div className="sidebarMenu">
          <h3 className="sidebarTitle">Dashboard</h3>
          <ul className="sidebarList">
            <Link to="/" className="link">
            <li className="sidebarListItem active">
              <LineStyle className="sidebarIcon" />
              Home
            </li>
            </Link>
            <Link to="/" className="link">
            <li className="sidebarListItem">
              <Timeline className="sidebarIcon" />
              About
            </li>
            </Link>
            <Link to="/" className="link">
            <li className="sidebarListItem">
              <TrendingUp className="sidebarIcon" />
              Contact
            </li>
            </Link>
          </ul>
        </div>
        <div className="sidebarMenu">
          <h3 className="sidebarTitle">Quick Menu</h3>
          <ul className="sidebarList">
            <Link to="/" className="link">
            <li className="sidebarListItem">
              <AttachMoney className="sidebarIcon" />
              Advertisements
            </li>
            </Link>
            <Link to="/productTable" className="link">
              <li className="sidebarListItem">
                <Storefront className="sidebarIcon" />
                Products Table
              </li>
            </Link>
            <Link to="/users" className="link">
              <li className="sidebarListItem">
                <PermIdentity className="sidebarIcon" />
                Manage Users
              </li>
            </Link>
          </ul>
        </div>
        <div className="sidebarMenu">
          <h3 className="sidebarTitle">Reports</h3>
          <ul className="sidebarList">
          <Link to="/" className="link">
            <li className="sidebarListItem">
              <MailOutline className="sidebarIcon" />
              Users Report
            </li>
            </Link>
            <Link to="/" className="link">
            <li className="sidebarListItem">
              <DynamicFeed className="sidebarIcon" />
              Product Report
            </li>
            </Link>
            <Link to="/" className="link">
            <li className="sidebarListItem">
              <ChatBubbleOutline className="sidebarIcon" />
              Advertisement Report
            </li>
            </Link>
          </ul>
        </div>
        <div className="sidebarMenu">
          <h3 className="sidebarTitle">Staff</h3>
          <ul className="sidebarList">
          <Link to="/" className="link">
            <li className="sidebarListItem">
              <WorkOutline className="sidebarIcon" />
              Manage
            </li>
            </Link>
            <Link to="/" className="link">
            <li className="sidebarListItem">
              <Timeline className="sidebarIcon" />
              Analytics
            </li>
            </Link>
            <Link to="/" className="link">
            <li className="sidebarListItem">
              <Report className="sidebarIcon" />
              Reports
            </li>
            </Link>
          </ul>
        </div>
      </div>
    </div>
  );
}
export default SideBar;