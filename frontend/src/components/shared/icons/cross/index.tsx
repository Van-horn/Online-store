import { RxCross2 } from "react-icons/rx"
import styled from "styled-components"
import { FC } from "react"

interface IconProps {
	color?: string
	fontSize?: number
}
interface CrossIconProps extends IconProps {}

const Icon = styled(RxCross2).withConfig({
	shouldForwardProp: (prop) => false,
})<IconProps>`
	${(props) => `
		color: ${props?.color ?? "inherit"};
		font-size: ${props?.fontSize ? props.fontSize + "em" : "inherit"};
	`}
`

const CrossIcon: FC<CrossIconProps> = (props) => <Icon {...props} />

export default CrossIcon
