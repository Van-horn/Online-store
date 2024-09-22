import { FC, memo } from "react"

import useDeviceWidth from "../../hooks/deviceWidth"
import getFooter, { IFooters } from "./data"

export interface FooterProps {
	kind?: keyof IFooters
}

const Footer: FC<FooterProps> = memo((props) => {
	const { deviceWidth } = useDeviceWidth(window.innerWidth)

	return getFooter(deviceWidth, props?.kind ?? "default")
})

export default Footer
