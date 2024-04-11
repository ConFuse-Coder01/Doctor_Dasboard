import React from 'react'
import { IoBagHandle, IoPieChart, IoPeople, IoCart, IoPersonSharp } from 'react-icons/io5'

const Dashboard = () => {
  return (
    <div className="flex gap-4 bg">
    <BoxWrapper>
        <div className="rounded-full h-12 w-12 flex items-center justify-center bg-sky-500">
            <IoBagHandle className="text-2xl text-white" />
        </div>
        <div className="pl-4">
            <span className="text-sm text-gray-500 font-light">Total Revenue</span>
            <div className="flex items-center">
                <strong className="text-xl text-gray-700 font-semibold">Rs.54232</strong>
                <span className="text-sm text-green-500 pl-2">+Rs.343</span>
            </div>
        </div>
    </BoxWrapper>
    <BoxWrapper>
        <div className="rounded-full h-12 w-12 flex items-center justify-center bg-orange-600">
            <IoPieChart className="text-2xl text-white" />
        </div>
        <div className="pl-4">
            <span className="text-sm text-gray-500 font-light">Total Expenses</span>
            <div className="flex items-center">
                <strong className="text-xl text-gray-700 font-semibold">Rs.3423</strong>
                <span className="text-sm text-green-500 pl-2">-343</span>
            </div>
        </div>
    </BoxWrapper>
    <BoxWrapper>
        <div className="rounded-full h-12 w-12 flex items-center justify-center bg-yellow-400">
            <IoPeople className="text-2xl text-white" />
        </div>
        <div className="pl-4">
            <span className="text-sm text-gray-500 font-light">Total Patients</span>
            <div className="flex items-center">
                <strong className="text-xl text-gray-700 font-semibold">12313</strong>
                <span className="text-sm text-red-500 pl-2">-30</span>
            </div>
        </div>
    </BoxWrapper>
    <BoxWrapper>
        <div className="rounded-full h-12 w-12 flex items-center justify-center bg-green-600">
            <IoPersonSharp className="text-2xl text-white" />
           
        </div>
        <div className="pl-4">
            <span className="text-sm text-gray-500 font-light">Total Doctors</span>
            <div className="flex items-center">
                <strong className="text-xl text-gray-700 font-semibold">32</strong>
                <span className="text-sm text-red-500 pl-2">-3</span>
            </div>
        </div>
    </BoxWrapper>
</div>
  )
}
function BoxWrapper({ children }) {
	return <div className="bg-white rounded-sm p-4 flex-1 border border-gray-200 flex items-center shadow-md
    hover:scale-105 transform transition-transform duration-300">{children}</div>
}

export default Dashboard
