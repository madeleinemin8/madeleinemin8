import React from "react";
import { Nav, NavLink, NavMenu, NameCircles, FrogImage } from "./NavbarElements";

const Navbar = () => {
return (
	<>
	<Nav>
		<NavMenu>
		<FrogImage></FrogImage>
		<NameCircles></NameCircles>
		<NavLink to="/">
			Home
		</NavLink>
		<NavLink to="/work">
			Work
		</NavLink>
		<NavLink to="/contact">
			HML
		</NavLink>
		</NavMenu>
	</Nav>
	</>
);
};

export default Navbar;
