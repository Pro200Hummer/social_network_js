import React from 'react';
import ms from "../../App.module.css";
import hs from "./Header.module.css";
function Header(props) {
	return (
		<header className={` ${ms.header}`}>
			<div className={hs.cont}>
				<div className={hs.box}>
					<img src="https://www.vikiweb.ru/images/sozdanie-logotipa.png" className={hs.logo}/>
				</div>
				<div className={hs.box}>
					<div>Login</div>
					<div>{props.userData.id}</div>
					<div>{props.userData.login}</div>
					<div>{props.userData.email}</div>
				</div>
			</div>
		</header >
	);
}
export default Header;