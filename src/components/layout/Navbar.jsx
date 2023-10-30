import { Link } from "react-router-dom";
import AuthContext from "../../context/AuthContext";
import { useContext } from "react";
import LogOutBtn from "../auth/LogOutBtn";

const Navbar = () => {
    const { loggedIn } = useContext(AuthContext);
    return (
        <nav className="navbar navbar-dark bg-dark">
            <ul className="navbar-nav">
                <li className="nav-item">
                     <Link  className="nav-link" to="/">Home</Link>
                </li>
                <li className="nav-item">
                 {loggedIn === false && (
                    <>
                        <Link className="nav-link" to="/register">Register</Link>
                        <Link className="nav-link" to="/login">Login</Link>
                    </>
                )}
                {loggedIn === true && (
                    <>
                        <Link className="nav-link" to="/customer">Customers</Link>
                        <LogOutBtn />
                    </>
                )}
              </li>
          </ul>
        </nav>
    );
};

export default Navbar;
