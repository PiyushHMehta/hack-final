import React, { useContext, useEffect, useState } from 'react'
import { UserContext } from '../UserContext'
import axios from 'axios'
import { Link } from 'react-router-dom'

export default function Index() {
    const { user } = useContext(UserContext)
    const [users, setUsers] = useState([])
    const [userInterests, setUserInterests] = useState([])

    useEffect(() => {
        if (user) {
            const fetchUserInterests = async () => {
                try {
                    const resp1 = await axios.get('/user-interests')
                    const resp2 = await axios.get('/all-users')
                    setUserInterests(resp1.data)
                    setUsers(resp2.data)
                } catch (error) {
                    console.error('Error fetching user interests:', error)
                }
            }
            fetchUserInterests()
        }
    }, [user])

    return (
        <div>
            <div className="users-container">
                {users.length > 0 && (
                    <div className="grid grid-cols-3 gap-4 overflow-x-auto mt-12">
                        {users.map((uuser, index) => (
                            // Check if the user ID is not equal to the ID of the currently logged-in user
                            uuser._id !== user._id && (
                                <div key={index} className='border py-4 px-2 rounded-md bg-blue-400 text-white'>
                                    <div className='text-lg font-bold'>{uuser.name}</div>
                                    {uuser.interests.length > 0 && (
                                        <div className="grid grid-cols-1 gap-2">
                                            {uuser.interests.map((interest, i) => (
                                                <div key={i} className="">{interest}</div>
                                            ))}
                                        </div>
                                    )}
                                </div>
                            )
                        ))}
                    </div>
                )}
            </div>


            <div className='w-[80%] mt-20 grid grid-cols-3 gap-8 mx-auto'>
                {!!user && userInterests.map((interest, index) => (
                    <Link to={'/connect/' + interest}
                        key={index}
                        className='flex flex-col gap-2 items-center justify-center py-20 px-4 border bg-blue-500 text-white rounded-lg'>
                        <div to={""} key={index}>{interest}</div>
                        <div className='flex gap-1 items-center'>
                            <div>Connect with people</div>
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-6 h-6">
                                <path fillRule="evenodd" d="M16.72 7.72a.75.75 0 0 1 1.06 0l3.75 3.75a.75.75 0 0 1 0 1.06l-3.75 3.75a.75.75 0 1 1-1.06-1.06l2.47-2.47H3a.75.75 0 0 1 0-1.5h16.19l-2.47-2.47a.75.75 0 0 1 0-1.06Z" clipRule="evenodd" />
                            </svg>
                        </div>
                    </Link>
                ))}
            </div>
            <div className='align-self'>
                {!!user && (
                    <Link to={'http://localhost:4000'} className='bg-blue-400 text-white px-4 py-2 rounded-md flex mx-auto justify-center w-[180px] mt-12'>Join chat room</Link>
                )}
            </div>
        </div>
    )
}
