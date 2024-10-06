import CartWidget from "./CartWidget/CartWidget"
import logo from "../../assets/logo.png"
import "./navbar.css"

const NavBar = () => {
return(

    <nav className="navbar">
    <div className="brand">
            <img src={logo} width={80} alt />
        </div>
    <label class="labe_hamburguesa" for="menu_hamburguesa">
        <svg
            xmlns="http://www.w3.org/2000/svg"
            width="35"
            height="35"
            fill="currentColor"
            class="list_icon"
            viewBox="0 0 16 16"
        >
            <path
                fill-rule="evenodd"
                d="M2.5 12a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5zm0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5zm0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5z"
            />
        </svg>
    </label>
    <input class="menu_hamburguesa" type="checkbox" name="" id="menu_hamburguesa"/>
    <ul class="ul_links">
        <li className="li_links">Pistolas</li>
        <li className="li_links">Rifles</li>
        <li className="li_links">AR</li>
        <li className="li_links">SMG</li>
        <li className="li_links">Escopetas</li>
        <li className="li_links">Indumentaria</li>
        <li className="li_links">Municion</li>
    </ul>
    <CartWidget/>
</nav>
)
}
export default NavBar