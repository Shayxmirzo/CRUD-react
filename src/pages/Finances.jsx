import useGetData from "../hooks/useGetData"
import { putData } from "../hooks/useUniversalrequestData";


function Finances() {

    const {
    data: employment,
    loading,
    setData: setEmployment,
} = useGetData("teachers");
  const payEmployee = async (id) => {
    const payEmploy = employment?.find((el) => el.id === id);

    if (!payEmploy) return;

    const updated = {
        ...payEmploy,
        isPaid: true,
    };

    try {
        await putData("teachers", id, updated);

        setEmployment((prev) =>
            prev.map((item) =>
                item.id === id ? updated : item
            )
        );
    } catch (err) {
        console.error(err);
    }
};

    if(loading){
        return(<div>Loading...</div>)
    }
  return (
    <div className="">
        <div className="p-5 flex gap-5">
        <div className="bg-[white] w-full rounded-[15px] p-5">
          <p className="font-medium text-[18px]">Overall number of paid employees: <br /> <span className="text-[30px] text-[green] font-bold">{employment.filter((el) => el.isPaid).length}</span></p>
        </div>
        <div className="bg-[white] w-full rounded-[15px] p-5">
            <p className="font-medium text-[18px]">Overall number of unpaid employees: <br /> <span className="text-[30px] text-[blue] font-bold">{employment.filter((el) => !el.isPaid).length}</span></p>
        </div>
      </div>
        <div className="flex flex-col gap-2 px-5">
            {employment?.map((el) =>(
                console.log(el.isPaid),
                
        <div >
          <div className="h-20 w-full border flex px-3 items-center  border-[gray] rounded-[15px] bg-[white]" key={el.id}>
            <div className="flex items-center gap-3 w-full">
              <div className="h-15 w-15">
              <img className="w-full h-full rounded-full" src={el.avatar} alt="" />
            </div>
            <div className="flex items-center justify-between w-full">
              <div className="">
                  <h1 className="text-[23px]">{el.teacherName}</h1>
                  <p className="text-[gray]">{el.subject}</p>
              </div>
              <div className="pr-3 flex gap-4 items-center">
                <div className="">
                <h1 className="font-bold text-[25px]">${el.salary}</h1>
              </div>
              <div className="">
                <button onClick={() => payEmployee(el.id)} className={`px-5 py-2 text-white ${!el.isPaid ? "bg-[#07cb07]" : "bg-[gray]"} text-[23px] font-bold rounded-2xl`}>{!el.isPaid ? "Pay salary" : "Salary paid"}</button>
              </div>
              </div>
              
            </div>
            </div>
          </div>
        </div>
        
      ))}
    </div>
    </div>
  )
}

export default Finances