import { useNavigate } from "react-router-dom";

function LoginPage({setAuth}) {
const navigate = useNavigate();
const HandleSubmit = (e) =>{
e.preventDefault()
const email = e.target[0].value;
const password = e.target[1].value;
const account = {
    email:  e.target[0].value,
    password: e.target[1].value,
}
if(email === "email@example" && password === "12345"){
    localStorage.setItem("auth", account)
    setAuth(true)
    navigate("/")
}else{
  alert("If you have a probkems with login, for email: email@example, for password: 12345")
}
}

  return (
    <div className="w-full h-screen flex items-center justify-center bg-[gray]/50">     
<form onSubmit={HandleSubmit} className="max-w-70 p-5 w-full rounded-2xl mx-auto bg-[white]">
  <div className="mb-5">
    <label htmlFor="email" className="block mb-2.5 text-sm font-medium text-heading">Your email</label>
    <input type="email" id="email" className="bg-neutral-secondary-medium border border-default-medium text-heading text-sm rounded-2xl focus:ring-brand focus:border-brand block w-full px-3 py-2.5 shadow-xs placeholder:text-body" placeholder="name@flowbite.com" required />
  </div>
  <div className="mb-5">
    <label htmlFor="password" className="block mb-2.5 text-sm font-medium text-heading">Your password</label>
    <input type="password" id="password" className="bg-neutral-secondary-medium border border-default-medium text-heading text-sm rounded-2xl focus:ring-brand focus:border-brand block w-full px-3 py-2.5 shadow-xs placeholder:text-body" placeholder="••••••••" required />
  </div>
  <button type="submit" className="text-white bg-[black] box-border w-full border border-transparent hover:bg-brand-strong focus:ring-4 focus:ring-brand-medium shadow-xs font-medium leading-5 rounded-2xl text-sm px-4 py-2.5 focus:outline-none">Submit</button>
</form>

    </div>
  )
}

export default LoginPage