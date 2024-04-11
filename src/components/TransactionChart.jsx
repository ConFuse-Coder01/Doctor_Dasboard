import React from 'react'
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts'

const data = [
	{
		name: 'Jan',
		Medicines: 4000,
		Consultation: 2400
	},
	{
		name: 'Feb',
		Medicines: 3000,
		Consultation: 1398
	},
	{
		name: 'Mar',
		Medicines: 2000,
		Consultation: 9800
	},
	{
		name: 'Apr',
		Medicines: 2780,
		Consultation: 3908
	},
	{
		name: 'May',
		Medicines: 1890,
		Consultation: 4800
	},
	{
		name: 'Jun',
		Medicines: 2390,
		Consultation: 3800
	},
	{
		name: 'July',
		Medicines: 3490,
		Consultation: 4300
	},
	{
		name: 'Aug',
		Medicines: 2000,
		Consultation: 9800
	},
	{
		name: 'Sep',
		Medicines: 2780,
		Consultation: 3908
	},
	{
		name: 'Oct',
		Medicines: 1890,
		Consultation: 4800
	},
	{
		name: 'Nov',
		Medicines: 2390,
		Consultation: 3800
	},
	{
		name: 'Dec',
		Medicines: 3490,
		Consultation: 4300
	}
]


const TransactionChart = () => {
  return (
    <div className="h-[22rem] bg-white p-4 rounded-sm border border-gray-200 flex flex-col flex-1 shadow-md">
			<strong className="text-gray-700 font-medium">Transactions</strong>
			<div className="mt-3 w-full flex-1 text-xs">
				<ResponsiveContainer width="100%" height="100%">
					<BarChart
						width={500}
						height={300}
						data={data}
						margin={{
							top: 20,
							right: 10,
							left: -10,
							bottom: 0
						}}
					>
						<CartesianGrid strokeDasharray="3 3 0 0" vertical={false} />
						<XAxis dataKey="name" />
						<YAxis />
						<Tooltip />
						<Legend />
						<Bar dataKey="Consultation" fill="#0ea5e9" />
						<Bar dataKey="Medicines" fill="#ea580c" />
					</BarChart>
				</ResponsiveContainer>
			</div>
		</div>
  )
}

export default TransactionChart