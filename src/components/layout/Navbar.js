import styled from "styled-components";
import { useState } from "react";

const StyleNav = styled.nav`
  @media (min-width: 768px) {
    position: relative;
    width: var(--navbar-width);
    margin-left: ${(p) =>
                    p.visible ? 0 : '-15rem' };
    transition: margin 0.25s ease-out;

  }
    #page-content-wrapper {
      min-width: 0;
      width: 100%;
    }

    #wrapper.toggled #sidebar-wrapper {
      margin-left: -15rem;
    }
  }
`

function Navbar(props) {
  const [compact, setCompact] = useState(0);
  return (
      <>
    <StyleNav {...props}>
        <div className="bg-light border-right" id="sidebar-wrapper">
            <div className="sidebar-heading">Start Bootstrap</div>
            <div className="list-group list-group-flush">
                <a className="list-group-item list-group-item-action bg-light" href="#!">Dashboard</a>
                <a className="list-group-item list-group-item-action bg-light" href="#!">Shortcuts</a>
                <a className="list-group-item list-group-item-action bg-light" href="#!">Overview</a>
                <a className="list-group-item list-group-item-action bg-light" href="#!">Events</a>
                <a className="list-group-item list-group-item-action bg-light" href="#!">Profile</a>
                <a className="list-group-item list-group-item-action bg-light" href="#!">Status</a>
            </div>
        </div>
    </StyleNav>
      </>
  );
}

export default Navbar;
