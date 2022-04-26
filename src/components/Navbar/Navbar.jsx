import React, { useState } from 'react';
import "./Navbar.css"
import logo from "../../assets/logo-fy2.svg"
import burgerIcon from "../../assets/burger-icon.svg"
import CartWidget from "../CartWidget/CartWidget"

export default function Navbar() {
	const [displayMenu, setDisplayMenu] = useState("none");
	return (
		<header className="header">
			<div className="max-width header-content">
				<a href="#" className="logo">
					<img src={logo} alt="ForYou logo" width="180px" />
				</a>
				<div className="nav-icons">
					<CartWidget/>
				<nav className="categories viewed-lg" style={{display: displayMenu}}>
					<a href="#">Categoría 1</a>
					<a href="#">Categoría 2</a>
					<a href="#">Categoría 3</a>
				</nav>	
				<button className="navbar-burger hidden-lg" onClick={() => setDisplayMenu(displayMenu === "none" ? "flex" : "none")}>
					<img src={burgerIcon} alt="" />
				</button>
				</div>
				
			</div>
		</header>
	)
}
