import { LuUser, LuUserPlus } from "react-icons/lu"
import styled from "styled-components"
import { FC } from "react"

interface IconProps {
	color?: string
	fontSize?: number
}

interface UserIconProps extends IconProps {
	type: "new_user" | "user"
}

const User = styled(LuUser).withConfig({
	shouldForwardProp: (prop) => false,
})<IconProps>`
	${(props) => `
		color: ${props?.color ?? "inherit"};
		font-size: ${props?.fontSize ? props.fontSize + "em" : "inherit"};
	`}
`

const NewUser = styled(LuUserPlus).withConfig({
	shouldForwardProp: (prop) => false,
})<IconProps>`
	${(props) => `
		color: ${props?.color ?? "inherit"};
		font-size: ${props?.fontSize ? props.fontSize + "em" : "inherit"};
	`}
`
type UserIconDataType = (
	props: IconProps,
) => Record<UserIconProps["type"], JSX.Element>

const userIconData: UserIconDataType = (props) => ({
	user: <User {...props} />,
	new_user: <NewUser {...props} />,
})

const UserIcon: FC<UserIconProps> = ({ type, ...props }) => {
	return userIconData(props)[type]
}

export default UserIcon
