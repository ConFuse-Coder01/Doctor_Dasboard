import { useState } from 'react'
import './App.css'
import Dashboard from './components/Dashboard'
import TransactionChart from './components/TransactionChart'
import DetailPieChart from './components/DetailPieChart'
import Products from './components/orders/Products'

function App() {
  const [count, setCount] = useState(0)

  return (
    // <div className="flex flex-col gap-4 h-screen">
	// 		<Dashboard/>
	// 		<div className="flex flex-row gap-4 w-full">
	// 			<TransactionChart />
	// 			{/* <PieChart/> */}
    //     <DetailPieChart/>
	// 		</div>
	// 		{/* <div className="flex flex-row gap-4 w-full">
	// 			<RecentOrders />
	// 			<PopularProducts />
	// 		</div> */}
	// 	</div>
	<>
	<Products/>
	</>
  )
}

export default App
