import React, { useState } from 'react';
import { Link } from "react-router-dom";
import "./Navbar.css"
import logo from "../../assets/logo-fy2.svg"
import burgerIcon from "../../assets/burger-icon.svg"
import CartWidget from "../CartWidget/CartWidget"

export default function Navbar() {
	const [displayMenu, setDisplayMenu] = useState("none");
	return (
		<header className="header">
			<div className="max-width header-content">
				<Link to="/" className="logo">
					<img src={logo} alt="ForYou logo" />
				</Link>
				<div className="nav-icons">
					<CartWidget/>
				<nav className="categories viewed-lg" style={{display: displayMenu}}>
					<Link to="/">Categoría 1</Link>
					<Link to="/">Categoría 2</Link>
					<Link to="/">Categoría 3</Link>
				</nav>	
				<button className="navbar-burger hidden-lg" onClick={() => setDisplayMenu(displayMenu === "none" ? "flex" : "none")}>
					<img src={burgerIcon} alt="" />
				</button>
				</div>
				
			</div>
		</header>
	)
}
