import React, { useContext } from 'react'
import { Bar, BarChart, CartesianGrid, Legend, Tooltip, XAxis, YAxis } from 'recharts'
import { ProductContext } from '../../components/Context/ProductContext';

const Statistics = () => {
  const { products } = useContext(ProductContext);
  const chartData =
  products?.map((product) => ({
    name: product.product_name || "Unnamed Product",
    uv: product.price || 0, 
  })) || [];
  return (
<div className=' p-5'>
<BarChart width={1200} height={300} data={chartData}>
    <XAxis dataKey="name" stroke="#8884d8" />
    <YAxis />
    <Tooltip wrapperStyle={{ width: 100, backgroundColor: '#ccc' }} />
    <Legend width={100} wrapperStyle={{ top: 40, right: 20, backgroundColor: '#f5f5f5', border: '1px solid #d5d5d5', borderRadius: 3, lineHeight: '40px' }} />
    <CartesianGrid stroke="#ccc" strokeDasharray="5 5" />
    <Bar dataKey="uv" fill="#8884d8" barSize={30} />
  </BarChart>
</div>
  )
}

export default Statistics