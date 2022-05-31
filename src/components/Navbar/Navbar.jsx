import React, { useEffect, useState } from "react"
import { Link, NavLink } from "react-router-dom"
import "./Navbar.css"
import logo from "../../assets/logo-fy2.svg"
import burgerIcon from "../../assets/burger-icon.svg"
import CartWidget from "../CartWidget/CartWidget"

export default function Navbar() {
	const [displayMenu, setDisplayMenu] = useState("none")

	// se utiliza para mostrar las categorias si el tamaño de la pantalla es mayor a 768px
	window.addEventListener("resize", () => window.innerWidth > 768 && setDisplayMenu(""))
	useEffect(() => {
		window.innerWidth > 768 && setDisplayMenu("")
	}, [])

	return (
		<header className="header">
			<div className="max-width header-content">
				<Link to="/" className="logo" onClick={() => window.scrollTo(0,0)}>
					<img src={logo} alt="ForYou logo" />
				</Link>
				<div className="nav-icons">
					<CartWidget />
					<nav className="categories viewed-lg" style={{ display: displayMenu }}>
						<NavLink to="/categories/smartphone">Smartphone</NavLink>
						<NavLink to="/categories/computacion">Computacion</NavLink>
						<NavLink to="/categories/electrodomesticos">Electro</NavLink>
						<NavLink to="/categories/televisores">Televisores</NavLink>
					</nav>
					<button
						className="navbar-burger hidden-lg"
						onClick={() => setDisplayMenu(displayMenu === "none" ? "flex" : "none")}>
						<img src={burgerIcon} alt="" />
					</button>
				</div>
			</div>
		</header>
	)
}
