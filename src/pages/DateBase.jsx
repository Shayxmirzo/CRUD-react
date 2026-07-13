import { memo } from "react"
import LabTabs from "../components/ReactTabs"

const DateBase = memo(
  function(){
  return (
   <div className="p-5">
     <div className=" bg-[white]">
      <LabTabs/>
    </div>
   </div>
  )
}
) 

export default DateBase