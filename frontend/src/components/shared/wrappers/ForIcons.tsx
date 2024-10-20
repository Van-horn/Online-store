import { FC, HTMLAttributes, ReactElement } from "react"
import { styled } from "styled-components"
import hover_reactionOptions, {
	I_hover_reactionOptions,
} from "../reactions/hover-on-element/reaction-options"

interface StylesForWrapper {
	hover_reaction?: keyof I_hover_reactionOptions
}

interface WrapperForIconsProps
	extends HTMLAttributes<HTMLDivElement>,
		StylesForWrapper {
	children: ReactElement<SVGRectElement>
}

const StyledWrapperForIcons = styled.div.withConfig({
	shouldForwardProp: (prop) => prop !== "hover_reaction",
})<WrapperForIconsProps>`
	color: var(--theme-color);
	display: flex;
	align-items: center;
	justify-content: center;

	&:hover {
		${(props) => hover_reactionOptions[props?.hover_reaction ?? "none"]}
	}
`

const WrapperForIcons: FC<WrapperForIconsProps> = (props) => {
	return (
		<StyledWrapperForIcons {...props}>{props.children}</StyledWrapperForIcons>
	)
}

export default WrapperForIcons
