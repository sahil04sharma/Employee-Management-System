import React, {useState} from 'react'

function Login({handleLogin}) {

  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')

  const submitHandler=(e)=>{
      e.preventDefault();
      handleLogin(email,password)

      setEmail("");
      setPassword("")

    }
  return (
    <div className='bg-black w-screen h-screen flex items-center justify-center'>
      <div className='border-2 rounded-xl border-emerald-500 p-20'>

        <form onSubmit={(e)=>{
            submitHandler(e)
        }} 
        className='border-2 border-transparent flex flex-col items-center justify-center py-20'>
          <input value={email} onChange={(e)=>{setEmail(e.target.value)}}
          required 
          className='outline-none text-xl text-white bg-transparent border-2 rounded-full p-4 border-emerald-500 placeholder:text-gray-400' type='email' placeholder='Enter your Email'></input>
          <input value={password} onChange={(e)=>{setPassword(e.target.value)}} 
          required 
          className='outline-none text-xl text-white bg-transparent border-2 rounded-full p-4 mt-4 border-emerald-500 placeholder:text-gray-400' type='password' placeholder='Enter Password'></input>
          <button className='text-white font-bold text-xl border-none bg-emerald-500 placeholder:text-white mt-4 rounded-full px-25 py-4 '>Login</button>
        </form>


      </div>
    </div>
  )
}

export default Login