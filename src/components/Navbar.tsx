import { FunctionComponent } from "react";
import { NavLink } from "react-router-dom";

interface NavbarProps {

}

const Navbar: FunctionComponent<NavbarProps> = () => {
    return (<>
        <span className="logo">
            <img src="/images/YaelLogo.png" alt="Logo" />
            <span className="under-line">&nbsp;</span>
        </span>

        <nav>
            <ul>
                <li>
                    <NavLink to={"/"}>דף הבית</NavLink>
                </li>
                <li>
                    <NavLink to={"/appointments"}>לקביעת תורים</NavLink>
                </li>
            </ul>
        </nav>
    </>);
}

export default Navbar;