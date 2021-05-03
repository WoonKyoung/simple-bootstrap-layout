import {Avatar, IconButton} from "../../ui/core";
import {faUser} from "@fortawesome/free-solid-svg-icons";
import Tooltip from "../../ui/Tooltip";

function Header({ toggle }) {
    //const [isOpen, setIsOpen] = useState("off");

  return (
    <>
      <div className="mid">
          <nav className="navbar navbar-expand-lg navbar-light bg-light border-bottom">
              <button className="btn btn-primary" id="menu-toggle" onClick={toggle} >Menu</button>
              <button className="navbar-toggler" type="button" data-toggle="collapse"
                      data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false"
                      aria-label="Toggle navigation"><span className="navbar-toggler-icon"></span></button>

              <div className="collapse navbar-collapse" id="navbarSupportedContent">
                  <ul className="navbar-nav mr-auto">
                      <li className="nav-item active">
                          <a className="nav-link" href="/">Home <span className="sr-only">(current)</span></a>
                      </li>
                      <li className="nav-item dropdown">
                          <a className="nav-link dropdown-toggle" id="navbarDropdown" role="button"
                             data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                              Services
                          </a>
                          <div className="dropdown-menu" aria-labelledby="navbarDropdown">
                              <a className="dropdown-item" href="/dashboard">Dashboard</a>
                              <a className="dropdown-item" href="/orders">Customer Orders</a>
                              <div className="dropdown-divider"></div>
                              <a className="dropdown-item" href="/overview">Overview</a>
                          </div>
                      </li>
                      <li className="nav-item active">
                          <a className="nav-link" href="contact">contact</a>
                      </li>
                  </ul>

                  <form className="form-inline my-2 my-lg-0 ">
                      <input className="form-control mr-sm-1" type="search" placeholder="Search" aria-label="Search" />
                      <button className="btn btn-outline-success my-2 my-sm-2" type="submit">Search
                      </button>
                  </form>

                  <Tooltip bg="primary" text={"로그인정보"}>
                      <IconButton size={6}  icon={faUser}>
                      </IconButton>
                  </Tooltip>
              </div>
          </nav>
      </div>
    </>
  );
}

export default Header;
