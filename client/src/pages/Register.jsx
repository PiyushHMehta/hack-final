import React, { useState } from 'react'
import { Link, Navigate } from 'react-router-dom'
import axios from 'axios'
import { useForm } from 'react-hook-form'
import Interests from '../components/Interests'

export default function Register() {
    const [name, setName] = useState('')
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    // const { register, handleSubmit, formState: { errors } } = useForm();
    const [toggle, setToggle] = useState(false)

    async function registerUser(ev) {
        ev.preventDefault()
        await axios.post('/register', {
            name, email, password
        })
    }

    console.log(toggle);

    if(!toggle){
        return (<div className='flex flex-col gap-1 max-w-[50%] justify-center items-center mx-auto h-full mt-40'>
        <form onSubmit={registerUser}
            className='flex flex-col gap-2 p-4 w-full rounded-md'>
                <Interests />
            {/* {toggle && (
                <div>
                    <input type="text" placeholder='Username'
                        value={name} onChange={ev => setName(ev.target.value)} />
                    <input type="email" placeholder='Email'
                        value={email} onChange={ev => setEmail(ev.target.value)} />
                    <input type="password" placeholder='Password'
                        value={password} onChange={ev => setPassword(ev.target.value)} />
                    <button type="submit">Register</button>
                    <button onClick={() => setToggle(true)}>Next</button>
                </div>
            )} */}

        </form >
        <div>Already a member? <Link to='/login' className='text-blue-500'>Login here!</Link></div>
    </div >)
    }
     else
    return (
        <div className='flex flex-col gap-1 max-w-[50%] justify-center items-center mx-auto h-full mt-40'>
            <form onSubmit={registerUser}
                className='flex flex-col gap-2 p-4 w-full rounded-md'>
                {!toggle && (
                    <Interests />
                )}
                {toggle && (
                    <div>
                        <input type="text" placeholder='Username'
                            value={name} onChange={ev => setName(ev.target.value)} />
                        <input type="email" placeholder='Email'
                            value={email} onChange={ev => setEmail(ev.target.value)} />
                        <input type="password" placeholder='Password'
                            value={password} onChange={ev => setPassword(ev.target.value)} />
                        <button type="submit">Register</button>
                        <button onClick={() => setToggle(true)}>Next</button>
                    </div>
                )}

            </form >
            <div>Already a member? <Link to='/login' className='text-blue-500'>Login here!</Link></div>
        </div >
    )
}
