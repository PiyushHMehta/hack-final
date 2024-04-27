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
				</Route>
			</Routes>
		</UserContextProvider>

	)
}

export default App
