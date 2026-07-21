import { memo, useState } from "react"
import LabTabs from "../components/ReactTabs"
import useGetData from "../hooks/useGetData";
import { postData, putData } from "../hooks/useUniversalrequestData";
import { deleteData } from "../hooks/useUniversalrequestData";
const DateBase = memo(
  function(){
    const [showForm, SetShowForm] = useState(false);
    const [studentShowForm, setStudentShowForm] = useState(false)
    const [editingTeacher, SetEditingTeacher] = useState(null)
    const {data: teachers, loading, setData: setTeachers} = useGetData("teachers");
    const {data: students, setData: setStudents} = useGetData("students");

  if(loading){
    return(
      <div>Loading employees...</div>
    )
  }
 const SetSubmit = async (e) => {
  e.preventDefault();
  
  const info = {
    teacherName: e.target[0].value,
    avatar: e.target[1].value,
    email: e.target[2].value,
    experience: e.target[3].value,
    phoneNumber: e.target[4].value,
    subject: e.target[5].value,
    salary: e.target[6].value,
  };
  try{
if(editingTeacher){
    const updatedTeacher = await putData(
  "teachers",
  editingTeacher.id,
  info
);

setTeachers((prev) =>
  prev.map((teacher) =>
    teacher.id === updatedTeacher.id
      ? updatedTeacher
      : teacher
  )
);

SetShowForm(false);
SetEditingTeacher(null);
e.target.reset();

  }else{
    const newTeacher = await postData("teachers", info);

    setTeachers((prev) => [...prev, newTeacher]);
    console.log(teachers);
    SetEditingTeacher(null);
    SetShowForm(false);
    e.target.reset();
  
  }
  }
 catch (err) {
    console.error(err);
  }

};
const SetStudentSubmit = async(e) =>{
  e.preventDefault();
  const stuInfo = {
    studentName: e.target[0].value,
    avatar: e.target[1].value,
    age: e.target[2].value,
    email: e.target[3].value,
    address: e.target[4].value,
    parentName: e.target[5].value,
    teacherId: e.target[6].value,
  }
  const teacherI = stuInfo.teacherId;
  try{
        const newStudent = await postData(`/teachers/${teacherI}/students`, stuInfo);
        console.log(newStudent);
    setStudents((prev) => [...prev, newStudent]);
    console.log(students);
    setStudentShowForm(false)
    e.target.reset();
  }catch(err){
    console.error(err)
  }
}
const handleDelete = async(id) =>{
      try {
    await deleteData("teachers", id);

    setTeachers((prev) => prev.filter((teacher) => teacher.id !== id));
  } catch (err) {
    console.error(err);
  }
}
const handleEdit = (teacher) => {
  SetEditingTeacher(teacher);
  SetShowForm(true);
};
  console.log(showForm);
  return (
    <div className="">
      <div onClick={() => SetShowForm(false)} className={showForm? "fixed inset-0 z-50 flex items-center justify-center bg-black/70" : "hidden"}>
      <form onClick={(e) => {e.stopPropagation()}} onSubmit={(e) => SetSubmit(e)} className="bg-[white] p-5 max-w-[380px] flex flex-col gap-3 rounded-2xl" action="">
        <h1 className="text-[20px] font-bold text-center">Add Employee</h1>
        <div className="flex flex-col gap-4">
          <input defaultValue={editingTeacher?.teacherName || ""} required className="w-full h-12 px-2 text-[gray] bg-white rounded-xl border border-[gray] " placeholder="Name" type="text" />
          <input defaultValue={editingTeacher?.avatar || ""} required className="w-full h-12 px-2 text-[gray] bg-white rounded-xl border border-[gray] " placeholder="URL image" type="text" />
          <input defaultValue={editingTeacher?.email || ""} required className="w-full h-12 px-2 text-[gray] bg-white rounded-xl border border-[gray] " placeholder="E-mail" type="email" />
          <div className="flex items-center gap-5">
            <input defaultValue={editingTeacher?.experience || ""} required className="w-full h-12 px-2 text-[gray] bg-white rounded-xl border border-[gray] " placeholder="Experience" type="number" />
            <input defaultValue={editingTeacher?.phoneNumber || ""} required className="w-full h-12 px-2 text-[gray] bg-white rounded-xl border border-[gray] " placeholder="Phone Number" type="phone" />
          </div>
          <div className="flex items-center gap-5">
            <input defaultValue={editingTeacher?.subject || ""} required className="w-full h-12 px-2 text-[gray] bg-white rounded-xl border border-[gray] " placeholder="Subject" type="text" />
            <input defaultValue={editingTeacher?.salary || ""} required className="w-full h-12 px-2 text-[gray] bg-white rounded-xl border border-[gray] " placeholder="Salary" type="number" />
          </div>
        </div>
        <button type="submit" className="w-full h-12 bg-[blue] text-white rounded-xl font-bold hover:bg-[darkblue]">Submit</button>
      </form>
      </div>
      <div onClick={() => setStudentShowForm(false)} className={studentShowForm? "fixed inset-0 z-50 flex items-center justify-center bg-black/70" : "hidden"}>
        <form onClick={(e) => e.stopPropagation()} onSubmit={(e) => SetStudentSubmit(e)} className="bg-[white] p-5 max-w-[380px] flex flex-col gap-3 rounded-2xl" action="">
          <h1 className="text-[20px] font-bold text-center">Add Employee</h1>
          <div className="">
            <div className="flex flex-col gap-4">
              <input required className="w-full h-12 px-2 text-[gray] bg-white rounded-xl border border-[gray]" placeholder="Name" type="text" />
              <input required className="w-full h-12 px-2 text-[gray] bg-white rounded-xl border border-[gray]" placeholder="URL img" type="text" />
              <div className="flex items-center gap-5">
                <input required className="w-full h-12 px-2 text-[gray] bg-white rounded-xl border border-[gray]" placeholder="Age" type="number" />
                <input required className="w-full h-12 px-2 text-[gray] bg-white rounded-xl border border-[gray]" placeholder="E-mail" type="email" />
              </div>
              <div className="flex items-center gap-5">
                <input required className="w-full h-12 px-2 text-[gray] bg-white rounded-xl border border-[gray]" placeholder="Address" type="text" />
                <input required className="w-full h-12 px-2 text-[gray] bg-white rounded-xl border border-[gray]" placeholder="Parent`s Name" type="text" />
              </div>
              <select required className="w-full h-12 px-2 text-[gray] bg-white rounded-xl border border-[gray]" name="" id="">
                {teachers?.map((el) => (
                  <option value={el.id}>{el.teacherName}</option>
                ))}
              </select>
            </div>
          </div>
          <button type="submit" className="w-full h-12 bg-[blue] text-white rounded-xl font-bold hover:bg-[darkblue]">Submit</button>
        </form>
      </div>
       <div className="p-5">
    
    <div className="py-5  flex gap-5">
        <div className="bg-[white] w-full rounded-[15px] p-5">
          <p className="font-medium text-[18px]">Overall number of employees: <br /> <span className="text-[30px] text-[green] font-bold">{teachers.length}</span></p>
        </div>
        <div className="bg-[white] w-full rounded-[15px] p-5">
            <p className="font-medium text-[18px]">Overall number of subjects: <br /> <span className="text-[30px] text-[red] font-bold">{new Set(teachers?.map((el) =>(el.subject))).size}</span></p>
        </div>
        <div className="bg-[white] w-full rounded-[15px] p-5">
            <p className="font-medium text-[18px]">Overall number of subjects: <br /> <span className="text-[30px] text-[blue] font-bold">{students?.length}</span></p>
        </div>
      </div>
     <div className=" bg-[white]">
      
      <LabTabs
      teachers={teachers}
      students={students} 
      setShowForm={SetShowForm}
      handleDelete={handleDelete}
      handleEdit={handleEdit}
      setStudentShowForm={setStudentShowForm}/>
    </div>
   </div>
    </div>
  
  )
}
) 

export default DateBase