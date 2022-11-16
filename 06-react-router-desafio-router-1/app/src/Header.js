import { NavLink } from 'react-router-dom';
import style from './Header.module.css'

const Header = () =>  {
    const activeStyle = {
        backgroundColor: 'green',
    };

    return (
        <nav className={style.nav}>
            <NavLink to="/" activeStyle={activeStyle}>
                Produtos
            </NavLink>
            <NavLink to="contato" activeStyle={activeStyle}>
                Contato
            </NavLink>
        </nav>
    )
}

export default Header