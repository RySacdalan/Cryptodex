import React from 'react'
import MarketCoins from '../components/MarketCoins'

const MainBody = ({image, name, symbol, price, volume, priceChange, marketcap}) => {
 return(
    <React.Fragment>
        <MarketCoins image={image} name={name} symbol={symbol} price={price} volume={volume} priceChange={priceChange} marketcap={marketcap}/>
    </React.Fragment>
 )
}

export default MainBody