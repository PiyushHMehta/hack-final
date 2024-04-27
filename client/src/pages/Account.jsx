import React, { useContext, useState } from 'react'
import { UserContext } from '../UserContext'
import axios from 'axios'
import { Navigate } from 'react-router-dom'

export default function Account() {
    const [redirect, setRedirect] = useState(false)
    const { user, setUser } = useContext(UserContext)

    async function logoutUser(ev) {
        ev.preventDefault()
        await axios.post('/logout')
        setRedirect(true)
        setUser(null)
    }

    if (redirect) {
        return (
            <Navigate to='/' />
        )
    }
    
    return (
        <div className='max-w-60 mt-32 flex flex-col gap-4 items-center mx-auto'>
            {!!user && (
                <div>
                    Logged in as {user.name}
                </div>
            )}
            <button onClick={logoutUser}>Logout</button>
        </div>
    )
}
