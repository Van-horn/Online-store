import { FC, memo } from "react"

import GetFooter, { GetFooterProps } from "./data"
import useDeviceSize from "./../../hooks/deviceSize"

export type FooterProps = Partial<Omit<GetFooterProps, "device_width">>

const Footer: FC<FooterProps> = memo((props) => {
	const { device_width } = useDeviceSize()

	return GetFooter({
		device_width,
		kind: props?.kind ?? "default",
		options: props?.options ?? {},
	})
})

export default Footer
