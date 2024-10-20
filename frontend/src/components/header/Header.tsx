import { FC, memo } from "react"


import GetHeader, { GetHeaderProps } from "./data"
import useDeviceSize from "./../../hooks/deviceSize"

export type HeaderProps = Partial<Omit<GetHeaderProps, "device_width">>

const Header: FC<HeaderProps> = memo((props) => {
	const { device_width } = useDeviceSize()

	return GetHeader({
		device_width,
		kind: props?.kind ?? "default",
		options: props?.options ?? {},
	})
})

export default Header
