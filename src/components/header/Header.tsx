import { FC, memo } from "react"

import useDeviceWidth from "../../hooks/deviceWidth"
import GetHeader, { GetHeaderProps } from "./data"

export type HeaderProps = Partial<Omit<GetHeaderProps, "device_width">>

const Header: FC<HeaderProps> = memo((props) => {
	const { device_width } = useDeviceWidth()

	return GetHeader({
		device_width,
		kind: props?.kind ?? "default",
		options: props?.options ?? {},
	})
})

export default Header
