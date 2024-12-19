import { Legend } from "@headlessui/react"
import { Cell, Pie, PieChart, ResponsiveContainer } from "recharts"

const colors=['#00C49f','#FFBB28','#FF8042'];

const data=[
    {name:"Male" , value:540},
    {name:"Female" , value:630},
    {name:"Other" , value:210},
]

function BuyChart() {
  return (
    <div className="w-[20rem] h-[22rem] bg-white p-4 rounded-sm border border-gray-200 flex flex-col ">
        <strong className="tetx-gray-700 font-medium">Buyers</strong>
        <div className="w-full mt-3  flex-1 text-xs">
            <ResponsiveContainer>
                <PieChart width={400} height={300}>
                    <Pie data={data} cx="50%" cy="50%" labelLine={false} outerRadius={105} fill="#8884d8" dataKey="value">
                        {data.map((_,index)=>(
                            <Cell key={`cell-${index}`} fill={colors[index%colors.length]}/>
                        ))}
                    </Pie>
                    <Legend/>
                </PieChart>
            </ResponsiveContainer>
        </div>

    </div>
  )
}

export default BuyChart