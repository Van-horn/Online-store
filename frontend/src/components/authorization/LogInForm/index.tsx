import { useState, FC } from "react"
import { Link } from "react-router-dom"
import { OnePieceInput, OnePieceButton, HintBorderInput } from "my-react-ui-kit"

import styles from "./index.module.scss"
// import { useAppDispatch, useAppSelector } from '../../../hooks/redux'
import { useInput } from "../../../hooks/input"
import PasswordEye from "../../../UI/passwordEye"

interface ILogInData {
	email: string
	password: string
}

const LogInForm: FC<Record<never, never>> = () => {
	//  const dispatch = useAppDispatch()
	//  const navigate = useNavigate()

	const initialState: ILogInData = {
		email: "",
		password: "",
	}

	const {
		state: { email, password },
		changeEmail,
		changePassword,
	} = useInput<ILogInData>(initialState)

	const [passwordEye, setPasswordEye] = useState<boolean>(true)
	const passwordEyeHandler = () => setPasswordEye((prev) => !prev)

	return (
		<main>
			<form className={styles.form}>
				<span className={styles.formName}>LogIn</span>
				<div className={styles.inputs}>
					<HintBorderInput
						type="email"
						value={email}
						title=""
						required
						onChange={changeEmail}
						placeholder="email"
						className={styles.input}
					/>
					<OnePieceInput
						type={passwordEye ? "password" : "text"}
						value={password}
						title=""
						required
						placeholder="password..."
						onChange={changePassword}
						className={styles.input}
					/>
					<PasswordEye
						onChange={passwordEyeHandler}
						value={passwordEye}
						className={styles.passwordEye}
					/>
				</div>
				<div className={styles.formButtons}>
					<OnePieceButton
						text="LogIn"
						type="submit"
						className={styles.buttonSubmit}
					/>
				</div>
			</form>
			<div className={styles.alternatives}>
				<div
				//  className={styles.forgotAlternative}
				>
					<span>Forgot password :</span>
					<Link
						to="/authorization/forgot_password"
						className={styles.refForgot}>
						Replace
					</Link>
				</div>
				<div
				//  className={styles.regAlternative}
				>
					<span className={styles.lableReg}>I have not an account :</span>
					<Link to="/authorization/singUp" className={styles.refReg}>
						SingUp
					</Link>
				</div>
			</div>
		</main>
	)
}

export default LogInForm
