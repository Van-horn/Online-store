import styled from "styled-components"
import { FC, ImgHTMLAttributes } from "react"

import LogoImage from "../../../data/img/logo.png"

interface ImgProps {
	size?: number
}
interface LogoProps extends ImgProps, ImgHTMLAttributes<HTMLImageElement> {}

const StyledLogo = styled.img.withConfig({
	shouldForwardProp: (prop) => prop !== "size",
})<ImgProps>`
	${(props) => `
		width: ${props?.size ? props.size + "em" : "1em"};
		aspect-ratio: 9 / 10;
	`}
`

const Logo: FC<LogoProps> = (props) => (
	<StyledLogo src={LogoImage} alt="online-store logo" {...props} />
)

export default Logo
