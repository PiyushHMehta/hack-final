import { Route, Routes } from "react-router-dom"
import Layout from "./Layout"
import Index from "./pages/Index"
import Register from "./pages/Register"
import Login from "./pages/Login"
import axios from "axios"
import Account from "./pages/Account"
import { UserContextProvider } from "./UserContext"
import Logout from "./pages/Logout"
import Interests from "./components/Interests"
import PostTodo from "./pages/PostTodo"
import GetTodo from "./pages/GetTodo"
import FileUpload from "./pages/FileUpload"
import FileList from "./pages/FileList"
import SinglePreferencePage from "./pages/SinglePreferencePage"

function App() {

	axios.defaults.baseURL = 'http://localhost:3000'
	axios.defaults.withCredentials = true

	return (
		<UserContextProvider>
			<Routes>
				<Route path="/" element={<Layout />}>
					<Route index element={<Index />} />
					<Route path="/register" element={<Register />} />
					<Route path="/login" element={<Login />} />
					<Route path="/account" element={<Account />} />
					<Route path="/logout" element={<Logout />} />
					<Route path="/interests" element={<Interests />} />
					<Route path='/post-todo' element={<PostTodo />} />
					<Route path="/get-todo" element={<GetTodo />} />
					<Route path="/upload-docs" element={<FileUpload />} />
					<Route path="/get-docs" element={<FileList />} />
					<Route path="/connect/:interest" element={<SinglePreferencePage />} />
				</Route>
			</Routes>
		</UserContextProvider>

	)
}

export default App
