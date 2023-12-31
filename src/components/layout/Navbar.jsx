import { Link } from "react-router-dom";
import AuthContext from "../../context/AuthContext";
import { useContext } from "react";
import LogOutBtn from "../auth/LogOutBtn";
import logo from "../../assets/logo.png";

const Navbar = () => {
    const { loggedIn } = useContext(AuthContext);
    return (
        <nav className="navbar navbar-dark bg-dark">
            <div className="container-fluid">
                <img src={logo} width="36" height="36" />
                MohApp
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
            <div className="collapse navbar-collapse" id="navbarNav">
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
        </div>
      </div>
    </nav>
)
};
export default Navbar;
