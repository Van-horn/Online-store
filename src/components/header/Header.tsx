import { FC, memo } from "react"
import useDeviceWidth from "../../hooks/deviceWidth"
import getHeader, { IHeaders } from "./data"

export interface HeaderProps {
	kind?: keyof IHeaders
}

const Header: FC<HeaderProps> = memo((props) => {
	const { deviceWidth } = useDeviceWidth(window.innerWidth)

	return getHeader(deviceWidth, props?.kind ?? "default")
})

export default Header
