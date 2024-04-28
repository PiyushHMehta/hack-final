import { Link } from 'react-router-dom'

export default function Account() {
    return (
        <div className='w-full grid grid-cols-3 justify-center mt-16 gap-4 
        items-center mx-auto'>
            <Link className='bg-blue-400 py-2 px-4 rounded-sm hover:bg-blue-300 text-white' to={'/logout'}>Logout</Link>
            <Link className='bg-blue-400 py-2 px-4 rounded-sm hover:bg-blue-300 text-white' to={'/interests'}>Edit your intersts</Link>
            <Link className='bg-blue-400 py-2 px-4 rounded-sm hover:bg-blue-300 text-white' to='/post-todo'>Post Todo</Link>
            <Link className='bg-blue-400 py-2 px-4 rounded-sm hover:bg-blue-300 text-white' to='/get-todo'>Get Todo</Link>
            <Link className='bg-blue-400 py-2 px-4 rounded-sm hover:bg-blue-300 text-white' to='/upload-docs'>Upload Documents</Link>
            <Link className='bg-blue-400 py-2 px-4 rounded-sm hover:bg-blue-300 text-white' to='/get-docs'>Get Documents</Link>
        </div>
    )
}
