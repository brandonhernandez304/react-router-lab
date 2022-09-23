import React from 'react'

function Stocks (props) {
    const stock = props.allStocks.filter( d => d.symbol === props.match.params.symbol)[0]
  
    return (
    <div>
      <h3>Name: {stock.name}</h3>
      <h3 className="price">Price: {stock.lastPrice}</h3>
    </div>
  )
}

export default Stocks;