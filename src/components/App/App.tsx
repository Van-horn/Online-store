import { Route, Routes } from "react-router-dom"

import "./App.css"
import ForgotPasswordForm from "../authorization/ForgotPasswordForm"
import LogInForm from "../authorization/LogInForm"
import SingUpForm from "../authorization/SingUpForm"
import IndexLayout from "../layouts"

function App() {
	return (
		<Routes>
			<Route element={<LogInForm />} path="/authorization/logIn" />
			<Route element={<SingUpForm />} path="/authorization/singUp" />
			<Route
				element={<ForgotPasswordForm />}
				path="/authorization/forgot_password"
			/>
			<Route
				element={<IndexLayout children={<main>main</main>} />}
				path="*"
			/>
		</Routes>
	)
}

export default App
