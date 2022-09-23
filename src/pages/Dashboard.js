import stocks from '../components/stock-data'
import { Link } from "react-router-dom"

function Dashboard (props) {
    return(
        <div>
            {stocks.map((stock,idx)=>{
                const {name, symbol} = stock;
                return (
                    <Link to={`/stocks/${symbol}`}>
                        <h2>{name}</h2>
                    </Link>
                )
            })}
        </div>
    )
}

export default Dashboard;