import { FC, memo } from "react"

import useDeviceWidth from "../../hooks/deviceWidth"
import GetFooter, { GetFooterProps } from "./data"

export type FooterProps = Partial<Omit<GetFooterProps, "device_width">>

const Footer: FC<FooterProps> = memo((props) => {
	const { device_width } = useDeviceWidth()

	return GetFooter({
		device_width,
		kind: props?.kind ?? "default",
		options: props?.options ?? {},
	})
})

export default Footer
