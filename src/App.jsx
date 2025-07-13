import React, { useEffect,useState } from 'react';
import Login from './components/Auth/Login'
import EmployeeDashboard from './components/Dashboard/EmployeeDashboard'
import AdminDashboard from './components/Dashboard/AdminDashboard'
import { getLocalStorage, setLocalStorage } from './utils/localStorage'
import { useContext } from 'react';
import { AuthContext } from './context/AuthProvider';

function App() {

  const [user, setUser] = useState(null)
  const [loggedInUserData, setLoggedInUserData] = useState(null)
  
  const [userData,setUserData]= useContext(AuthContext)
  
  // const authData = 
  // console.log(authData)



// useEffect(() => {
//   if(authData)
//   {
//     const loggedInUser = JSON.parse(localStorage.getItem('loggedInUser'));
//     if(loggedInUser){
//       setUser(loggedInUser.role)
//     }
//   } 
 
// }, [authData])
// useEffect(() => {
// const loggedInUser = JSON.parse(localStorage.getItem('loggedInUser'));
// console.log(loggedInUser)

  
// }, )

useEffect(() => {
 const loggedInUser = localStorage.getItem('loggedInUser')

 if(loggedInUser){
 const parsedData = JSON.parse(loggedInUser);
setUser(parsedData.role);
if (parsedData.role === 'employee') {
  setLoggedInUserData(parsedData.data);
}}
},[])



  const handleLogin =(email,password)=>{
    if(email == 'admin@me.com' && password == '123'){
      setUser('admin')
      localStorage.setItem('loggedInUser',JSON.stringify({role : 'admin' }))
    }
    else if(userData ){
      const employee = userData.find((e)=>email == e.email && e.password == password)
      if(employee){
         setUser('employee')
         setLoggedInUserData(employee)

      localStorage.setItem('loggedInUser',JSON.stringify({role : 'employee' , data:employee }))

      }
     
    }
    else{
      alert(("wrong Credentials"));
    }

    }


   

  
  
  return (
    <>
    {!user && <Login handleLogin={handleLogin} />}
    {user === 'admin' && <AdminDashboard changeUser={setUser}/>}
    {user === 'employee' && <EmployeeDashboard changeUser={setUser} data={loggedInUserData}/>}
    {/* <EmployeeDashboard/> */}
    {/* <AdminDashboard/> */}
    
    </>
  )
}

export default App