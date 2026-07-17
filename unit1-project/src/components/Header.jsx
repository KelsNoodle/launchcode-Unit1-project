import { Link } from "react-router-dom";

function Header() {
    return(
        <header className="header">
            <nav>
                <ul>
                    <li><Link to="/">Home</Link></li>
                    <li><Link to="/About">About</Link></li>
                    <li><a href="#library">Library</a></li>
                    <li><a href="/Contact">Contact</a></li>
                </ul>
            </nav>
        </header>
        
    );
}
export default Header