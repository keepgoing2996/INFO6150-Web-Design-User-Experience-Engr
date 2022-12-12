import menu from './menu';
import './GlobalNav.css';
import { useState } from 'react';

function GlobalNav({className, onNav}) {
    const list = menu.map(item => {
        return (
            <li className="global-nav__item" key={item.name}>
                <a onClick={onNav} className="global-nav__link" href={item.path} data-target={item.name}>
                    {item.name}
                </a>
            </li>
        );
    });
    const [showMenu, setShowMenu] = useState(true);
    return (
        <nav className={`global-nav ${className}`}>
          <button onClick={() => {setShowMenu(!showMenu)}}>{showMenu ? "Open Menu": "Close Menu"}</button>
        {showMenu &&
          (<ul className="global-nav__list">
            {list}
          </ul> )
        }
        </nav>
      );
}

export default GlobalNav;