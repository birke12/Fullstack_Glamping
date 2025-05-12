import { useState } from "react";
import { NavLink, useLocation } from "react-router-dom";
import { GiHamburgerMenu } from "react-icons/gi";
import { IoClose } from "react-icons/io5";

const Navigation = () => {
	const [isOpen, setIsOpen] = useState(false);

	const toggleMenu = () => {
		setIsOpen(!isOpen);
	};
	const location = useLocation();
	console.log(location);

	return (
    <nav className="navbar">
      {location.pathname !== "/" && (
        <a href="/">
          <img src="/headerImages/logo.png" alt="logoet" />
        </a>
      )}

      <div className="burger-menu" onClick={toggleMenu}>
        {isOpen ? <IoClose size={30} /> : <GiHamburgerMenu size={30} />}
      </div>

      <ul
        onClick={toggleMenu}
        className={isOpen ? "nav-links open" : "nav-links"}
      >
        <li>
          <NavLink to="/ophold"> Opholde </NavLink>
        </li>
        <li>
          <NavLink to="/contact"> Kontakt </NavLink>
        </li>

				<li>
					<NavLink to="/aktiviter"> Aktiviter </NavLink>
				</li>
				<li>
					<NavLink to="/minliste"> Min liste </NavLink>
				</li>
				<li>
					<NavLink to="/backoffice"> Backoffice </NavLink>
				</li>
			</ul>
		</nav>
	);
};
export default Navigation;
