import React from 'react'
import axios from 'axios'
import {  Navigate } from 'react-router-dom'
import { useState, useContext } from 'react'
import { UserContext } from '../UserContext'

export default function Logout() {
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
        <div className='w-full mt-16 flex justify-center flex-col mx-auto items-center gap-1'>
            {!!user && (
                <div>
                    Logged in as {user.name}
                </div>
            )}
            <button onClick={logoutUser} className='max-w-40'>Logout</button>
        </div>
    )
}
