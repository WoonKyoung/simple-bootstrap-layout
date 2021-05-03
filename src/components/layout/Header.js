import Tooltip from "../../ui/Tooltip";

function Header({ toggle }) {

  return (
    <>
      <div className="mid">
          <nav className="navbar navbar-expand-sm navbar-light bg-light border-bottom" >
              <button className="btn btn-primary" id="menu-toggle" onClick={toggle} >Menu</button>
              <button className="navbar-toggler navbar-toggler-right" type="button" data-toggle="collapse" data-target="#navb">
                  <span className="navbar-toggler-icon"></span>
              </button>
              <div className="collapse navbar-collapse" id="navb">
                  <ul className="navbar-nav mr-sm-auto" />
                  <form className="form-inline ">
                      <input className="form-control mr-sm-2" type="search" placeholder="Search" aria-label="Search" />
                      <button className="btn btn-success my-2 my-sm-0" type="submit"  style={{float : 'right', marginRight : '5px'}}  >Search
                      </button>
                  </form>
                  <Tooltip bg="primary" text={"로그인정보"}>
                      <i class = "fas fa-user fa-2x" style = {{margin : '5px'}} />
                  </Tooltip>
              </div>
          </nav>
      </div>
    </>
  );
}

export default Header;
