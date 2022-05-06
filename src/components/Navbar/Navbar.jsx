import React, { useState } from 'react';
import { Link } from "react-router-dom";
import "./Navbar.css"
import logo from "../../assets/logo-fy2.svg"
import burgerIcon from "../../assets/burger-icon.svg"
import CartWidget from "../CartWidget/CartWidget"

export default function Navbar() {
	const [displayMenu, setDisplayMenu] = useState("none");

	// se utiliza para mostrar las categorias si el tamaño de la pantalla es mayor a 768px
	window.addEventListener("resize", () => (window.innerWidth > 768)	&&setDisplayMenu(""))
	
	return (
		<header className="header">
			<div className="max-width header-content">
				<Link to="/" className="logo">
					<img src={logo} alt="ForYou logo" />
				</Link>
				<div className="nav-icons">
					<CartWidget/>
				<nav className="categories viewed-lg" style={{display: displayMenu}}>
					<Link to="/categories/smartphone">smartphone</Link>
					<Link to="/categories/computacion">Computacion</Link>
					<Link to="/categories/electrodomesticos">electrodomesticos</Link>
				</nav>	
				<button className="navbar-burger hidden-lg" onClick={() => setDisplayMenu(displayMenu === "none" ? "flex" : "none")}>
					<img src={burgerIcon} alt="" />
				</button>
				</div>
				
			</div>
		</header>
	)
}
