import React from 'react';
import { Link } from 'react-router-dom';
import style from './Produto.module.css';

const Produto = () =>  {
    const [ listProdutos, setListProdutos ] = React.useState(null);
    
    async function getProdutos(){
        let url = 'https://ranekapi.origamid.dev/json/api/produto'
        let response = await fetch(url);
        let json = await response.json()

        return json
    }
    
    React.useEffect(() => {
        getProdutos()
            .then((json) => setListProdutos(json));
    }, []);

    if (!listProdutos) return null
    console.log(listProdutos)
    return (
        <div className={style.produtos}>
            {listProdutos.map((produto) => ( 
                <Link to={`produto/${produto.id}`} className={style.produtoItem}>
                    <img src={produto.fotos[0].src}></img>
                    <h2>{produto.nome}</h2>
                </Link>
            ))}
        </div>
    )
}

export default Produto