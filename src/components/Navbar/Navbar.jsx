import React from 'react';
import MainStyle from "../../App.module.css";
import NavStyle from "./Navbar.module.css";
import { NavLink } from 'react-router-dom/cjs/react-router-dom.min';
function Navbar() {
	return (
		<nav className={`${MainStyle.navbar} ${NavStyle.navbar}`} >
			<NavLink to="/profile" className={NavStyle.link}>Profile</NavLink>
			<NavLink to="/dialogs" className={NavStyle.link}>Messages</NavLink>
			<NavLink to="/news" className={NavStyle.link}>News</NavLink>
			<NavLink to="/music" className={NavStyle.link}>Music</NavLink>
			<NavLink to="/settings" className={NavStyle.link}>Settings</NavLink>
		</ nav>
	);
}
export default Navbar;