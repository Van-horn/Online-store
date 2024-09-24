import { FC, useCallback, useState } from "react"
import styled from "styled-components"
import { Link } from "react-router-dom"

import DefaultHeaderProps from "../props"
import Logo from "src/components/shared/logo"
import styles from "./index.module.scss"
import MenuIcon from "../../../../shared/icons/menu"
import UserIcon from "../../../../shared/icons/user"

const Header = styled.header`
	font-size: clamp(2vw, 4vw, 5vw);
`

const Mobile: FC<DefaultHeaderProps> = () => {
	const [menuState, setMenuState] = useState<boolean>(false)
	const setMenuStateHandler = useCallback(
		() => setMenuState((prev) => !prev),
		[],
	)
	return (
		<Header className={styles.header}>
			<span className={styles.spanForIcon}>
				<MenuIcon fontSize={1.7} />
			</span>
			<Link to="/">
				<Logo size={2.5} />
			</Link>

			<span className={styles.spanForIcon}>
				<UserIcon fontSize={1.9} type="newUser" />
			</span>
		</Header>
	)
}

export default Mobile
