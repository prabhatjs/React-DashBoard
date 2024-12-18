
import DashBoardMenu from "./DashBoardMenu"
import TransactionChart from "./TransactionChart"


function DashBoard() {
  return (
    <div className="flex gap-4 flex-col">
      <DashBoardMenu/>
      <TransactionChart/>
    </div>
  )
}

export default DashBoard