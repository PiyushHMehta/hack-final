import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import axios from 'axios'

export default function SinglePreferencePage() {
    const { interest } = useParams()
    const [users, setUsers] = useState([])

    useEffect(() => {
        const fetchUsers = async () => {
            try {
                const response = await axios.get(`/connect/${interest}`)
                setUsers(response.data) // Update state with the data array from the response
            } catch (error) {
                console.error('Error fetching users:', error)
            }
        }

        fetchUsers()
    }, [interest])

    return (
        <div>
            {users.length > 0 && users.map((user, index) => (
                <div key={index}>{user.name}</div> // Don't forget to add a unique key prop for each element in the map function
            ))}
        </div>
    )
}
