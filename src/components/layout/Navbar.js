import styled from "styled-components";
import { useState } from "react";
import {IconButton} from "../../ui/core";

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

const links = [
    {
        to: "/dashboard",
        icon: "fas fa-box",
        label: "Dashboard",
    },
    {
        to: "/orders",
        icon: "fas fa-clipboard",
        label: "Customer Orders",
    },
    {
        to: "/subs",
        icon: "fas fa-redo-alt",
        label: "Subscriptions",
    },
    {
        to: "/overview",
        icon: "fas fa-robot",
        label: "Overview",
    },
    {
        to: "/schedule",
        icon: "fas fa-calendar",
        label: "Schedule",
    },
];


function Navbar(props) {
  const [ compact, setCompact] = useState(0);
  return (
      <>
    <StyleNav {...props}>
        <div className="bg-light border-right" id="sidebar-wrapper">
            <div className="sidebar-heading">React practice</div>
            <div className="list-group list-group-flush">
                {links.map((i) => (
                    <IconButton
                        bg="primary"
                        icon={i.icon}
                    />,
                    <a className="list-group-item list-group-item-action bg-light"
                       href={i.to}
                       key={i.to}
                       label={i.label}
                     >
                        {i.label}
                    </a>
                ))}
            </div>
        </div>
    </StyleNav>

      </>
  );
}

export default Navbar;
