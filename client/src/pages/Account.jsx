import React, { useContext, useState } from 'react'
import { UserContext } from '../UserContext'
import axios from 'axios'
import { Link, Navigate } from 'react-router-dom'

export default function Account() {
    return (
        <div className='w-full justify-center mt-16 flex gap-4 items-center mx-auto'>
            <Link to={'/logout'}>Logout</Link>
            <Link to={'/interests'}>Edit your intersts</Link>
            <Link>Chat</Link>
        </div>
    )
}
