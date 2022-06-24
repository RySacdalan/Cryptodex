import React from 'react'
import MarketCoins from '../components/MarketCoins'

const MainBody = ({image, name, symbol, price, volume, priceChange, marketcap}) => {
 return(
    <div className='max-content'>
        <MarketCoins image={image} name={name} symbol={symbol} price={price} volume={volume} priceChange={priceChange} marketcap={marketcap}/>
    </div>
 )
}

export default MainBody