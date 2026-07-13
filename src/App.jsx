import React, { useState } from "react"
import { Suspense } from "react"
import Layout from "./components/Layout"
import { BrowserRouter, Routes, Route, Navigate,  } from "react-router-dom"
const DateBase = React.lazy(() => import("./pages/DateBase"))
const Dashboard = React.lazy(() => import("./pages/Dashboard"))
const TeacherPage = React.lazy(() => import("./pages/TeacherPage"))
const LoginPage = React.lazy(() => import("./pages/LoginPage"))


function App() {

const [auth, setAuth] = useState(false)

  return (
    <BrowserRouter>
    <Suspense fallback={<div className="w-full flex items-center justify-center bg-white z-20 h-screen"><img className="max-w-[150px] w-full h-full" src="/Spinner@1x-1.0s-200px-200px.svg" alt="png"></img></div>}>
      <Routes>
        <Route path="/login" element={<LoginPage setAuth={setAuth}/> } />
        <Route element={auth || localStorage.auth ? <Layout/> : <Navigate to={"/login"}/>}>
         <Route path="/" element={<Dashboard />} />
         <Route path="/teachers" element={<TeacherPage />} />
         <Route path="/date" element={<DateBase />} />
        </Route>
        <Route path="*" element={<div>NOT FOUND</div>} />
      </Routes>
    </Suspense>

    </BrowserRouter>
  )
}

export default App