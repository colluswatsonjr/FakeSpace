import { AppBar, Button, IconButton, Toolbar, Typography } from "@mui/material";
import { Box } from "@mui/system";
import { Link } from "react-router-dom";

function Navbar({ setPage, setUser }) {

    return (
        <Box sx={{ flexGrow: 1 }}>
            <AppBar position="static">
                <Toolbar>
                    <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
                        FAKE_SPACE
                    </Typography>
                    <Link to="/" component="button" variant="body2" onClick={()=>setPage(null)}>Home</Link>
                    <Link to="/create" component="button" variant="body2" onClick={()=>setPage(null)}>Create</Link>
                    <Link to="/user" component="button" variant="body2" onClick={()=>setPage(null)}>Home</Link>
                    <Button color="inherit" onClick={()=>setUser(null)}>Login</Button>
                </Toolbar>
            </AppBar>
        </Box>
        // <div className="Navbar">
        //     <li className="Navlink">
        // <Link to="/" onClick={()=>setPage(null)}><h4>WorldSpace</h4></Link>
        //     </li> | |
        //     | <li className="Navlink">
        //         <Link to="/create" onClick={()=>setPage(null)}><h4>CreateSpace</h4></Link>
        //     </li> | | 
        //     | <li className="Navlink">
        //         <Link to="/user" onClick={()=>setPage(null)}><h4>MySpace</h4></Link>
        //     </li>
        // </div>
    );
}
export default Navbar;