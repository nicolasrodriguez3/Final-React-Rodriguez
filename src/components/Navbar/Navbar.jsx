import "./Navbar.css"
import logo from "../../assets/logo-fy2.svg"
import burgerIcon from "../../assets/burger-icon.svg"
import Cart from "../Cart/Cart"

export default function Navbar() {
	return (
		<header className="header">
			<div className="max-width header-content">
				<a href="#" className="logo">
					<img src={logo} alt="ForYou logo" width="180px" />
				</a>
				<div className="nav-icons">
					<Cart />
				<nav className="categories viewed-lg">
					<a href="#">Categoría 1</a>
					<a href="#">Categoría 2</a>
					<a href="#">Categoría 3</a>
				</nav>	
				<button className="navbar-burger hidden-lg" data-target="categories">
					<img src={burgerIcon} alt="" />
				</button>
				</div>
				
			</div>
		</header>
	)
}
