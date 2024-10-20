import { RxHamburgerMenu } from "react-icons/rx"
import styled from "styled-components"
import { FC } from "react"

interface IconProps {
	color?: string
	fontSize?: number
}
interface MenuIconProps extends IconProps {}

const Icon = styled(RxHamburgerMenu).withConfig({
	shouldForwardProp: (prop) => false,
})<IconProps>`
	${(props) => `
		color: ${props?.color ?? "inherit"};
		font-size: ${props?.fontSize ? props.fontSize + "em" : "inherit"};
	`}
`

const MenuIcon: FC<MenuIconProps> = (props) => <Icon {...props} />

export default MenuIcon
