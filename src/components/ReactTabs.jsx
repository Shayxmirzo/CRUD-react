import * as React from 'react';
import Box from '@mui/material/Box';
import Tab from '@mui/material/Tab';
import TabContext from '@mui/lab/TabContext';
import TabList from '@mui/lab/TabList';
import TabPanel from '@mui/lab/TabPanel';
import useGetData from '../hooks/useGetData';

export default function LabTabs() {
  const [value, setValue] = React.useState('1');

  const {data: teachers} = useGetData("teachers");
  const {data: students} = useGetData("students")

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
        <TabPanel value="1"><div className="flex flex-col gap-3 px-5">
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
