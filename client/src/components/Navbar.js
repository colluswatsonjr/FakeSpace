import { Link } from "react-router-dom";


function Navbar({setPage}) {

    return (
        <div className="Navbar">
            <li className="Navlink">
                <Link to="/" onClick={()=>setPage(null)}><h4>WorldSpace</h4></Link>
            </li> | |
            | <li className="Navlink">
                <Link to="/create" onClick={()=>setPage(null)}><h4>CreateSpace</h4></Link>
            </li> | | 
            | <li className="Navlink">
                <Link to="/user" onClick={()=>setPage(null)}><h4>MySpace</h4></Link>
            </li>
        </div>
    );
}
export default Navbar;