import { FC, useState, useCallback } from "react"
import { Link } from "react-router-dom"
import { useInput } from "../../../hooks/input"
import { OnePieceInput, OnePieceButton } from "my-react-ui-kit"

import styles from "./index.module.scss"
// import { useAppDispatch, useAppSelector } from '../../../hooks/redux'
import PasswordEye from "../../../UI/passwordEye"

export interface ISingUpData {
	login: string
	email: string
	password: string
}
const initialState: ISingUpData = {
	login: "",
	email: "",
	password: "",
}
const SingUpForm: FC<Record<never, never>> = () => {
	const {
		state: { login, email, password },
		changeEmail,
		changeLogin,
		changePassword,
	} = useInput<ISingUpData>(initialState)

	const [passwordEye, setPasswordEye] = useState<boolean>(true)
	const passwordEyeHandler = useCallback(
		() => setPasswordEye((prev) => !prev),
		[],
	)
	return (
		<main className={styles.main}>
			<form className={styles.form}>
				<span className={styles.formName}>SingUp</span>
				<div className={styles.inputs}>
					<OnePieceInput
						type="text"
						value={login}
						title=""
						required
						onChange={changeLogin}
						placeholder="login..."
						className={styles.input}
					/>
					<OnePieceInput
						type="email"
						value={email}
						title=""
						required
						onChange={changeEmail}
						placeholder="email..."
						className={styles.input}
					/>
					<OnePieceInput
						type={passwordEye ? "password" : "text"}
						value={password}
						title=""
						required
						onChange={changePassword}
						placeholder="password..."
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
						text="SingUp"
						type="submit"
						className={styles.buttonSubmit}
					/>
				</div>
			</form>
			<div className={styles.alternatives}>
				<div
				//  className={styles.regAlternative}
				>
					<span className={styles.lableReg}>
						I already have an account :
					</span>
					<Link to="/authorization/logIn" className={styles.refReg}>
						LogIn
					</Link>
				</div>
				<div
				//  className={styles.forgotAlternative}
				>
					<span className={styles.lableForgot}>Forgot password :</span>
					<Link
						to="/authorization/forgot_password"
						className={styles.refForgot}>
						Replace
					</Link>
				</div>
			</div>
		</main>
	)
}

export default SingUpForm
