import React from 'react'
import MarketCoins from '../components/MarketCoins'

const MainBody = ({image, name, symbol, price, volume}) => {
 return(
    <React.Fragment>
        <MarketCoins image={image} name={name} symbol={symbol} price={price} volume={volume}/>
    </React.Fragment>
 )
}

export default MainBody