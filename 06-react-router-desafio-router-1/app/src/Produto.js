import React from 'react';

const Produto = () =>  {
    const [ listProdutos, setListProdutos ] = React.useState(null);
    
    async function getProdutos(){
        let url = 'https://ranekapi.origamid.dev/json/api/produto'
        let response = await fetch(url);
        let json = await response.json()

        return json
    }
    
    React.useEffect(() => {
        let produtos = getProdutos()
        setListProdutos(produtos);
    }, []);

    if (!listProdutos) return null

    return (
        <div>
            {listProdutos.map((produto) => {
                <div>
                    <img src={produto.fotos[0].src}></img>
                    <p>{produto.nome}</p>
                </div>
            })}
        </div>
    )
}

export default Produto