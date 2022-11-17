import React from 'react';
import { useParams } from 'react-router-dom';
import style from './ProdutoDescricao.module.css';

const ProdutoDescricao = () => {
    const [ produto, setProduto ] = React.useState(null);
    const params = useParams();

    React.useEffect(() => {
        let url = `https://ranekapi.origamid.dev/json/api/produto/${params.id}`;
        fetch(url)
            .then((response) => response.json())
            .then((json) => setProduto(json))
    }, [])
    if (!produto) return null

    return (
        <div className={style.produto}>
            <div className={style.images}>
                {produto.fotos.map((foto) => (
                    <img src={foto.src} alt="" />
                ))
                }
            </div>
            <div className={style.produtoInformation}>
                <h3 className={style.titulo}>{produto.nome}</h3>
                <div className={style.preco}>R$ {produto.preco}</div>
                <div className={style.description}>{produto.descricao}</div>
            </div>
        </div>
    )
}

export default ProdutoDescricao;