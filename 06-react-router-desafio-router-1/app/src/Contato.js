import React from 'react';
import style from './Contato.module.css';

const Contato = () =>  {
    return (
        <div className={`animeLeft ${style.contato}`}>
            <img src="https://ranekapi.origamid.dev/wp-content/uploads/2019/03/tablet-1.jpg" alt="" />
            <div>
                <h2>Entre em contato.</h2>
                <p>andre@origamid.com</p>
                <p>999999-999</p>
                <p>Rua Ali Perto, 999</p>
            </div>
        </div>
    )
}

export default Contato