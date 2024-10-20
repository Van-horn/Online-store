import { FC } from "react"
import styled from "styled-components"
import { OnePieceInput, OnePieceButton } from "my-react-ui-kit"
import { Link } from "react-router-dom"

import styles from "./index.module.scss"
import DefaultHeaderProps from "../../props"
import Logo from "src/components/shared/logo"
import MenuIcon from "../../../../../shared/icons/menu"
import UserIcon from "../../../../../shared/icons/user"
import WrapperForIcons from "src/components/shared/wrappers/ForIcons"
import CrossIcon from "src/components/shared/icons/cross"
import { theme_color } from "src/sass/variables"

interface MenuProps extends DefaultHeaderProps {
	change: () => void
}
// const SpanForIcons = styled.div``

const Menu: FC<MenuProps> = ({ change }) => {
	return (
		<header className={styles.header}>
			<div className={styles.searchAndExit}>
				<div className={styles.search}>
					<OnePieceInput
						placeholder="search"
						width={13}
						themeColor={theme_color}
						height={2.4}
						rounding="semicircle"
					/>
					<OnePieceButton
						width={5.5}
						height={2.5}
						themeColor={theme_color}
						rounding="semicircle"
						text="search"
						kind="filled"
					/>
				</div>

				<WrapperForIcons onClick={change} hover_reaction="blackout">
					<CrossIcon fontSize={1.7} />
				</WrapperForIcons>
			</div>
		</header>
	)
}

export default Menu
