import { NavLink } from 'react-router-dom';
import style from './Header.module.css'
import './Header.css';

const Header = () =>  {
    return (
        <nav className={style.nav}>
            <NavLink to="/" end>
                Produtos
            </NavLink>
            <NavLink to="contato">
                Contato
            </NavLink>
        </nav>
    )
}

export default Header