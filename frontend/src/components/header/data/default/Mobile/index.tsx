import { FC, useCallback, useState } from "react"

import DefaultHeaderProps from "../props"
import Initial from "./Initial"
import Menu from "./Menu"

const Mobile: FC<DefaultHeaderProps> = (props) => {
	const [menuState, setMenuState] = useState<boolean>(false)
	const setMenuStateHandler = useCallback(() => {
		setMenuState((prev) => !prev)
	}, [])
	return menuState ? (
		<Menu change={setMenuStateHandler} {...props} />
	) : (
		<Initial change={setMenuStateHandler} {...props} />
	)
}

export default Mobile
