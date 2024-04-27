import React, { useEffect, useState } from 'react'
import { Link, Navigate } from 'react-router-dom'
import axios from 'axios'
import Interests from '../components/Interests'

export default function Register() {
    const [name, setName] = useState('')
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
<<<<<<< HEAD
    const [toggle, setToggle] = useState(true);
    const [interests, setInterests] = useState([]);
    const [redirect, setRedirect] = useState(false)

    async function registerUser(ev) {
        ev.preventDefault()
        await axios.post('/register', { name, email, password, interests })
        setRedirect(true)
    }

    const changeToggle = () => {
        if (!name || !email || !password) {
            alert("Please fill all fields before proceeding")
        }
        else {
            setToggle(false);
        }
    }

    if(redirect) {
        return(
            <Navigate to='/' />
        )
    }
    
    return (
        <form
            onSubmit={registerUser}
            className='flex flex-col gap-2 p-4 w-full rounded-md'>
            {
                toggle ? (
                    <div>
                        <input type="text" placeholder='Username'
                            value={name} onChange={ev => setName(ev.target.value)} />
                        <input type="email" placeholder='Email'
                            value={email} onChange={ev => setEmail(ev.target.value)} />
                        <input type="password" placeholder='Password'
                            value={password} onChange={ev => setPassword(ev.target.value)} />
                        {!toggle ? (<button type="submit">Register</button>) : null}
                        <button onClick={() => changeToggle()}>Next</button>
                    </div>
                ) : (
                    <Interests
                        setToggle={setToggle}
                        setInterests={setInterests}
                        interests={interests}
                    />
                )
            }
            {!toggle ? (<button type='Submit'> Register </button>) : null}
        </form>
    )
}
=======
    // const { register, handleSubmit, formState: { errors } } = useForm();
    const [toggle, setToggle] = useState(true) ; 
    const [interests,setInterests] = useState([]) ; 

    async function registerUser(ev) {
        ev.preventDefault()
        const obj = {name , email , password , interests} ;
        console.log("Object before sending to backend ",obj);
        await axios.post('/register', {
            name, email, password 
        })
    }

    const changeToggle = () => {
        if(!name || !email || !password){
            alert("Please fill all fields before proceeding")
        }
        else{
            setToggle(false) ; 
        }
    }
    return (
        <form 
        onSubmit={registerUser}  
        className='flex flex-col gap-2 p-4 w-full rounded-md'>
        {
            toggle ? (
                <div>
                    <input type="text" placeholder='Username'
                        value={name} onChange={ev => setName(ev.target.value)} />
                    <input type="email" placeholder='Email'
                        value={email} onChange={ev => setEmail(ev.target.value)} />
                    <input type="password" placeholder='Password'
                        value={password} onChange={ev => setPassword(ev.target.value)} />
                    {!toggle ?(<button type="submit">Register</button> ): null }
                    <button onClick={() => changeToggle()}>Next</button>
                </div>
            ) : (
                <Interests 
                setToggle={setToggle} 
                setInterests={setInterests}
                interests={interests}
                />
            ) 
        }
         {!toggle ? (<button type='Submit'> Register </button>) : null } 
        </form>
    )

    // if(!toggle){
    //     return (<div className='flex flex-col gap-1 max-w-[50%] justify-center items-center mx-auto h-full mt-40'>
    //     <form onSubmit={registerUser}
    //         className='flex flex-col gap-2 p-4 w-full rounded-md'>
    //             <Interests />
    //         {/* {toggle && (
    //             <div>
    //                 <input type="text" placeholder='Username'
    //                     value={name} onChange={ev => setName(ev.target.value)} />
    //                 <input type="email" placeholder='Email'
    //                     value={email} onChange={ev => setEmail(ev.target.value)} />
    //                 <input type="password" placeholder='Password'
    //                     value={password} onChange={ev => setPassword(ev.target.value)} />
    //                 <button type="submit">Register</button>
    //                 <button onClick={() => setToggle(true)}>Next</button>
    //             </div>
    //         )} */}

    //     </form >
    //     <div>Already a member? <Link to='/login' className='text-blue-500'>Login here!</Link></div>
    // </div >)
    // }
    //  else
    // return (
    //     <div className='flex flex-col gap-1 max-w-[50%] justify-center items-center mx-auto h-full mt-40'>
    //         <form onSubmit={registerUser}
    //             className='flex flex-col gap-2 p-4 w-full rounded-md'>
    //             {!toggle && (
    //                 <Interests />
    //             )}
    //             {toggle && (
    //                 <div>
    //                     <input type="text" placeholder='Username'
    //                         value={name} onChange={ev => setName(ev.target.value)} />
    //                     <input type="email" placeholder='Email'
    //                         value={email} onChange={ev => setEmail(ev.target.value)} />
    //                     <input type="password" placeholder='Password'
    //                         value={password} onChange={ev => setPassword(ev.target.value)} />
    //                     <button type="submit">Register</button>
    //                     <button onClick={() => setToggle(true)}>Next</button>
    //                 </div>
    //             )}

    //         </form >
    //         <div>Already a member? <Link to='/login' className='text-blue-500'>Login here!</Link></div>
    //     </div >
    // )
}
>>>>>>> 70317377ce0d207ccd70805a80269e1b2c0034cf
