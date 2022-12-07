import { Link } from "react-router-dom";


function Navbar() {

    return (
        <div className="Navbar">
            <li className="Navlink">
                <Link to="/"><h4>World</h4></Link>
            </li>
            {/* <li className="Navlink">
                <Link to="/page"><h4>Pages</h4></Link>
            </li> */}
            <li className="Navlink">
                <Link to="/user"><h4>User</h4></Link>
            </li>
        </div>
    );
}
export default Navbar;