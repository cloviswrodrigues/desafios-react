import React from 'react';
import { GlobalContext } from './GlobalContext';

const Loading = () => {
    const global = React.useContext(GlobalContext);
    console.log('loading js aaaaaaaaaa')
    if (!global.loading) return null

    return (
        <div className='loading'></div>
    )
}

export default Loading