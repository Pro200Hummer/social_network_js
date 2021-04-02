import React from 'react';
import MainStyle from "../../App.module.css";
import HeaderStyle from "./Header.module.css";
function Header() {
	return (
		<header className={` ${MainStyle.header} ${HeaderStyle.header}`}>
			<img src="https://www.vikiweb.ru/images/sozdanie-logotipa.png" className={HeaderStyle.logo} />
		</header >
	);
}
export default Header;