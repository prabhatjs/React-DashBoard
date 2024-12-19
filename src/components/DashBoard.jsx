
import BuyChart from "./BuyChart"
import DashBoardMenu from "./DashBoardMenu"
import TransactionChart from "./TransactionChart"


function DashBoard() {
  return (
    <div className="flex gap-4 flex-col">
      <DashBoardMenu/>
      <div className="flex flex-row gap-4 w-full">
      <TransactionChart/>
      <BuyChart/>
      </div>
    </div>
  )
}

export default DashBoard