import useGetData from "../hooks/useGetData"

function Employee() {
  const {data: teachers, loading} = useGetData("teachers");
  if(loading){
    return(
      <div>Loading employees...</div>
    )
  }
  return (
    <div className="">
      <div className="p-5 flex gap-5">
        <div className="bg-[white] w-full rounded-[15px] p-5">
          <p className="font-medium text-[18px]">Overall number of employees: <br /> <span className="text-[30px] text-[green] font-bold">{teachers.length}</span></p>
        </div>
        <div className="bg-[white] w-full rounded-[15px] p-5">
            <p className="font-medium text-[18px]">Overall number of subjects: <br /> <span className="text-[30px] text-[blue] font-bold">{new Set(teachers?.map((el) =>(el.subject))).size}</span></p>
        </div>
      </div>
      <div className="flex flex-col gap-3 px-5">
      {teachers.map((el) =>(
        <div >
          <div className="h-20 w-full border flex px-3 items-center  border-[gray] rounded-[15px] bg-[white]" key={el.id}>
            <div className="flex items-center gap-3">
              <div className="h-15 w-15">
              <img className="w-full h-full rounded-full" src={el.avatar} alt="" />
            </div>
            <div className="">
              <h1 className="text-[23px]">{el.teacherName}</h1>
              <p className="text-[gray]">{el.subject}</p>
            </div>
            </div>
          </div>
        </div>
        
      ))}
    </div>
    </div>
  )
}

export default Employee