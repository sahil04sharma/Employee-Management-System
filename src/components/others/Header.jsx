import React, {useState } from 'react';

const Header = (props) => {

  // const [username, setUsername] = useState('')

  // if(!data){
  //   setUsername('Admin')
  // }
  // else {
  //   setUsername(data.firstName)
  // }

  const logOutUser = () =>{
    localStorage.setItem('loggedInUser','')
    // window.location.reload()
    props.changeUser('')
  }
  return (
    <div className='flex items-end justify-between'>
        <h1 className='text-white text-2xl font-medium'>Hello <br/><span className='font-semibold text-3xl'> username 👋</span></h1>
        <button onClick={logOutUser} className='text-white px-5 py-2 text-lg font-medium bg-red-600 rounded-sm'>Logout</button>
    </div>
  )
}

export default Header