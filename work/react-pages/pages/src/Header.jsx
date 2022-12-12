import logo from './img/logo.png'
import GlobalNav from './GlobalNav';
import './Header.css'

function Header({onNav}) {
    return (
        <header className="header">
        <a className="header__logo" href="index.html">
            <img src={logo} alt="logo"/> 
        </a>
        <h1 className="header__title">Famous Internet Rabbits</h1>  
        <GlobalNav onNav={onNav} className="header__nav"/>
        </header>
    );
}

export default Header;