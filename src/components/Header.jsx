import { Link } from "react-router-dom";

const Header = () => {
    return (
        <header className="bg-primary">
            <nav className=" container navbar navbar-light">
              <div className="container-fluid">
                {/* <Link to='/' className="navbar-brand">LOGO</Link> */}
                <div className="navbar-nav">
                    {/* Here you put all your links to other pages */ }
                  </div>
              </div>
            </nav>
        </header>
    );
}
 
export default Header;