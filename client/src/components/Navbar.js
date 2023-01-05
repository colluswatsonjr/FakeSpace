import { AppBar, Button, Toolbar, Typography } from "@mui/material";
import { Box } from "@mui/system";
import { Link } from "react-router-dom";

function Navbar({ setPage, setUser }) {

    function handleLogout() {
        fetch("/logout", { method: "DELETE" }).then((r) => {
          if (r.ok) {
            setUser(null)
          }
        });
      }

    return (
        <Box sx={{ flexGrow: 1 }}>
            <AppBar position="static" sx={{ color: 'black' }}>
                <Toolbar>

                    <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
                        FAKE_SPACE
                    </Typography>

                    <Link to="/">
                        <Button onClick={() => setPage(null)} sx={{ my: 2, color: 'black', display: 'block' }}>
                            world
                        </Button>
                    </Link>

                    <Link to="/create">
                        <Button onClick={() => setPage(null)} sx={{ my: 2, color: 'black', display: 'block' }}>
                            create
                        </Button>
                    </Link>

                    <Link to="/user">
                        <Button onClick={() => setPage(null)} sx={{ my: 2, color: 'black', display: 'block' }}>
                            home
                        </Button>
                    </Link>

                    <Button color="inherit" onClick={() => handleLogout()}>LogOut</Button>

                </Toolbar>
            </AppBar>
        </Box>
    );
}
export default Navbar;