import { Link } from "react-router-dom";


function Navbar() {

    return (
        <div className="Navbar">
            <li className="Navlink">
                <Link to="/"><h4>WorldSpace</h4></Link>
            </li> | |
            | <li className="Navlink">
                <Link to="/create"><h4>CreateSpace</h4></Link>
            </li> | | 
            | <li className="Navlink">
                <Link to="/user"><h4>MySpace</h4></Link>
            </li>
        </div>
    );
}
export default Navbar;