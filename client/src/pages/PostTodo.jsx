import React, { useContext, useState } from 'react'
import { UserContext } from '../UserContext'
import axios from 'axios'

export default function PostTodo() {
    const { user } = useContext(UserContext)
    const [work, setWork] = useState('')
    const [deadline, setDeadline] = useState('')

    async function addToDoList(ev) {
        ev.preventDefault();
        const deadlineDate = new Date(deadline);
        await axios.post('/post-todo', {
            user: user._id,
            work,
            deadline: deadlineDate
        });
        setWork('')
        setDeadline('')
        console.log({ user: user._id, work, deadline: deadlineDate });
    }

    return (
        <div className=''>
            <form onSubmit={addToDoList} className='flex flex-col w-60 justify-center items-center mx-auto gap-2 mt-20'>
                <input type="text" placeholder='work to do' name='work'
                    value={work} onChange={ev => setWork(ev.target.value)} />
                <input type="datetime-local" name='deadline'
                    value={deadline} onChange={(event) => {
                        setDeadline(event.target.value);
                    }} />
                <button type='submit'>Add to list</button>
            </form>
        </div>
    )
}
