import { FC } from "react"
import { Link } from "react-router-dom"
import { OnePieceButton, OnePieceInput } from "my-react-ui-kit"

import styles from "./index.module.scss"
import DefaultHeaderProps from "../props"
import Logo from "src/components/shared/logo"
import UserIcon from "../../../../shared/icons/user"
import WrapperForIcons from "src/components/shared/wrappers/ForIcons"
import { theme_color } from "src/sass/variables"
import FilterIcon from "src/components/shared/icons/filter"

interface TabletProps extends DefaultHeaderProps {}

const Tablet: FC<TabletProps> = (props) => {
	return (
		<header className={styles.header}>
			<Link to="/">
				<Logo size={2} />
			</Link>
			<div className={styles.search}>
				<OnePieceInput
					placeholder="search"
					width={13}
					themeColor={theme_color}
					height={2.1}
					rounding="semicircle"
				/>
				<WrapperForIcons hover_reaction="blackout">
					<FilterIcon fontSize={1.6} />
				</WrapperForIcons>
				<OnePieceButton
					width={5}
					height={2.2}
					themeColor={theme_color}
					rounding="semicircle"
					text="search"
					kind="filled"
				/>
			</div>
			<WrapperForIcons hover_reaction="blackout">
				<UserIcon fontSize={1.7} type="new_user" />
			</WrapperForIcons>
		</header>
	)
}

export default Tablet
