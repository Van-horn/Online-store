import { FC } from "react"
import { Link } from "react-router-dom"

import styles from "./index.module.scss"
import DefaultHeaderProps from "../../props"
import Logo from "src/components/shared/logo"
import MenuIcon from "../../../../../shared/icons/menu"
import UserIcon from "../../../../../shared/icons/user"
import WrapperForIcons from "src/components/shared/wrappers/ForIcons"

interface InitialProps extends DefaultHeaderProps {
	change: () => void
}

const Initial: FC<InitialProps> = ({ change }) => {
	return (
		<header className={styles.header}>
			<WrapperForIcons onClick={change} hover_reaction="blackout">
				<MenuIcon fontSize={1.7} />
			</WrapperForIcons>
			<Link to="/">
				<Logo size={2.5} />
			</Link>
			<WrapperForIcons hover_reaction="blackout">
				<UserIcon fontSize={1.9} type="new_user" />
			</WrapperForIcons>
		</header>
	)
}

export default Initial
