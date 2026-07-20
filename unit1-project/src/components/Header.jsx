import { Link } from "react-router-dom";

function Header() {
    return(
        <header className="header">
            <nav>
                <ul>
                    <li><Link to="/">Home</Link></li>
                    <li><Link to="/About">About</Link></li>
                    <li><Link to="/Contact">Contact</a></li>
                </ul>
            </nav>
        </header>
        
    );
}
export default Header