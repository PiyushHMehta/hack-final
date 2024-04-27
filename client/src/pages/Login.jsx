import { useState } from 'react'
import { Link, Navigate } from 'react-router-dom'
import axios from 'axios'
import Index from './Index'

export default function Login() {
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [redirect, setRedirect] = useState(false)

    async function loginUser(ev) {
        ev.preventDefault()
        await axios.post('/login', {
            email, password
        })
        setRedirect(true)
    }

    if(redirect) {
        return (
            <Navigate to={'/'} />
        )
    }

    return (
        <div className='flex flex-col gap-1 max-w-[50%] justify-center items-center mx-auto h-full mt-40'>
            <form onSubmit={loginUser}
            className='flex flex-col gap-2 p-4 w-full rounded-md'>
                <input type="email" placeholder='Email'
                    value={email} onChange={ev => setEmail(ev.target.value)} />
                <input type="password" placeholder='Password'
                    value={password} onChange={ev => setPassword(ev.target.value)} />
                <button type="submit">Login</button>
            </form>
            <div>Not registered yet? <Link to='/register' className='text-blue-500'>Register now!</Link></div>
        </div>
    )
}
