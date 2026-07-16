import { Link } from "react-router-dom";

function Header() {
    return(
        <header className="header">
            <nav>
                <ul>
                    <li><Link to="/">Home</Link></li>
                    <li><a href="#about">About</a></li>
                    <li><a href="#library">Library</a></li>
                    <li><a href="#contact">Contact</a></li>
                </ul>
            </nav>
        </header>
        
    );
}
export default Header