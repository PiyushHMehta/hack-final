import { Link } from 'react-router-dom'

export default function Account() {
    return (
        <div className='w-full grid grid-cols-4 justify-center mt-16 gap-4 items-center mx-auto'>
            <Link to={'/logout'}>Logout</Link>
            <Link to={'/interests'}>Edit your intersts</Link>
            <Link to={"http://localhost:4000"}>Chat</Link>
            <Link to='/post-todo'>Post Todo</Link>
            <Link to='/get-todo'>Get Todo</Link>
            <Link to='/upload-docs'>Upload Documents</Link>
            <Link to='/get-docs'>Get Documents</Link>
        </div>
    )
}
