import { useState, useCallback, FC } from "react"
import { OnePieceInput, OnePieceButton } from "my-react-ui-kit"
import { Link } from "react-router-dom"

import styles from "./index.module.scss"
// import { useAppDispatch, useAppSelector } from '../../../hooks/redux'
import { useInput } from "../../../hooks/input"
import PasswordEye from "../../../UI/passwordEye"

export interface IForgotPasswordData {
	email: string
	password: string
}
const initialState: IForgotPasswordData = {
	email: "",
	password: "",
}
// const Button: FC<any> = memo((props) => <button {...props}>wdwd</button>)
const ForgotPasswordForm: FC<Record<never, never>> = () => {
	// const dispatch = useAppDispatch()
	// const navigate = useNavigate()

	const {
		state: { email, password },
		changeEmail,
		changePassword,
	} = useInput<IForgotPasswordData>(initialState)

	const [passwordEye, setPasswordEye] = useState<boolean>(true)
	const passwordEyeHandler = useCallback(
		() => setPasswordEye((prev) => !prev),
		[],
	)

	return (
		<main className={styles.main}>
			<form className={styles.form}>
				<span className={styles.formName}>Replace password</span>
				<div className={styles.inputs}>
					{/* <Button value={{ styles: {} }}></Button> */}
					<OnePieceInput
						type="email"
						title=""
						required
						value={email}
						onChange={changeEmail}
						placeholder="email..."
						className={styles.input}
					/>
					<OnePieceInput
						type={passwordEye ? "password" : "text"}
						value={password}
						title=""
						required
						pattern="[A-Za-z0-9]*"
						minLength={6}
						onChange={changePassword}
						placeholder="new password..."
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
						text="Replace"
						type="submit"
						className={styles.buttonSubmit}
					/>
				</div>
			</form>
			<div className={styles.alternatives}>
				<div
				//  className={styles.forgotAlternative}
				>
					<span className={styles.lableForgot}>Back to :</span>
					<Link to="/authorization/logIn" className={styles.refForgot}>
						LogIn
					</Link>
				</div>
				<div
				//  className={styles.regAlternative}
				>
					<span className={styles.lableReg}>Back to :</span>
					<Link to="/authorization/singUp" className={styles.refReg}>
						SingUp
					</Link>
				</div>
			</div>
		</main>
	)
}

export default ForgotPasswordForm
