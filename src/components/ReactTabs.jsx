import * as React from "react";
import Box from "@mui/material/Box";
import Tab from "@mui/material/Tab";
import TabContext from "@mui/lab/TabContext";
import TabList from "@mui/lab/TabList";
import TabPanel from "@mui/lab/TabPanel";
export default function LabTabs({
  setShowForm,
  teachers,
  students,
  handleDelete,
}) {
  const [value, setValue] = React.useState("1");

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };


  return (
    <Box sx={{ width: '100%', typography: 'body1' }}>
      <TabContext value={value}>
        <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
          <TabList onChange={handleChange} aria-label="lab API tabs example">
            <Tab label="Employees" value="1" />
            <Tab label="Students" value="2" />
          </TabList>
        </Box>
        <TabPanel value="1"><div className="flex flex-col gap-6 px-5">
          <div className="flex">
            <span className=''><button onClick={() => setShowForm(true)} className='px-5 py-3 bg-[blue] text-[white] cursor-pointer font-bold text-[20px] rounded-[15px] duration-400 hover:bg-[black]'>Add employee +</button></span>
          </div>
          <div className="flex flex-col gap-3">
            {teachers.map((el) =>(
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
              <div className="flex gap-4">
                <button className="px-4 py-2 rounded-xl bg-[blue] text-white font-bold text-[20px]">Edit</button>
                <button onClick={() => handleDelete(el.id)} className="px-4 py-2 rounded-xl bg-[red] text-white font-bold text-[20px]">Delete</button>
              </div>
            </div>
            </div>
          </div>
        </div>
        
      ))}
          </div>
    </div></TabPanel>
        <TabPanel value="2"><div className="flex flex-col gap-3 ">
      {students.map((el) =>(
        <div >
          <div className="h-20 w-full border flex px-3 items-center  border-[gray] rounded-[15px] bg-[white]" key={el.id}>
            <div className="flex items-center gap-3">
              <div className="h-15 w-15">
              <img className="w-full h-full rounded-full" src={el.avatar} alt="" />
            </div>
            <div className="">
              <h1 className="text-[23px]">{el.studentName}</h1>
              <p className="text-[gray]">{el.email}</p>
            </div>
            </div>
          </div>
        </div>
        
      ))}
    </div></TabPanel>
      </TabContext>
    </Box>
    
  );
}
