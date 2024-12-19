import { Legend } from "@headlessui/react"
import { BarChart, CartesianGrid, ResponsiveContainer, Tooltip, XAxis, YAxis,Bar } from "recharts"


const Data=[
    {name:'Jan',
        Expense:4000,
        Income:2400
    },
    {name:'Fab',
        Expense:3000,
        Income:1900
    },
    {name:'Mar',
        Expense:2780,
        Income:4000
    },
    {name:'Apr',
        Expense:1854,
        Income:2000
    },
    {name:'May',
        Expense:2335,
        Income:4000
    },
    {name:'Jun',
        Expense:3658,
        Income:4300
    },
    {name:'Jul',
        Expense:2000,
        Income:9000
    },
    {name:'Aug',
        Expense:4512,
        Income:9000
    },
    {name:'Sep',
        Expense:2000,
        Income:1854
    },
    {name:'Oct',
        Expense:4000,
        Income:2400
    },
    {name:'Nov',
        Expense:4000,
        Income:2400
    },
    {name:'Dec',
        Expense:3520,
        Income:5401
    },
]

function TransactionChart() {
  return (
    <div className="h-[22rem] bg-white p-4 rounded-sm border border-gray-500 flex flex-col flex-1">
        <strong>Transaction</strong>
        
        <div className="w-full mt-3 flex-1 text-xs" >
        <ResponsiveContainer width="100%" height="100%">
            <BarChart width={500} height={300} data={Data} margin={{top:20,right:10,left:-10,bottom:0}}>
            <CartesianGrid strokeDasharray="3 3 0 0"></CartesianGrid>
            <XAxis dataKey="name"/>
            <YAxis/>
            <Tooltip/>
            <Legend></Legend>
            <Bar dataKey="Income" fill="#124E49"/>
            <Bar dataKey="Expense" fill="#CDFAEF"/>
            </BarChart>
        </ResponsiveContainer>
    </div>
    </div>
  )
}

export default TransactionChart