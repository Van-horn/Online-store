import styled from "styled-components"
import { FC } from "react"
import { HiAdjustmentsVertical } from "react-icons/hi2"

interface IconProps {
	color?: string
	fontSize?: number
}
interface FilterIconProps extends IconProps {}

const Icon = styled(HiAdjustmentsVertical).withConfig({
	shouldForwardProp: (prop) => false,
})<IconProps>`
	${(props) => `
		color: ${props?.color ?? "inherit"};
		font-size: ${props?.fontSize ? props.fontSize + "em" : "inherit"};
	`}
`

const FilterIcon: FC<FilterIconProps> = (props) => <Icon {...props} />

export default FilterIcon
