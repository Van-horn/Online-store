import { ReactElement } from "react"

import identifyDevice from "src/utils/identifyDevice"
import GetDefaultFooters, { IDefaultFooters } from "./default"
import DefaultFooterProps from "./default/props"

interface IFooters {
	default: IDefaultFooters
}

interface IFootersProps {
	default: DefaultFooterProps
}

type IGetFooters = <K extends keyof IFooters>(
	props: IFootersProps[K],
) => IFooters

const GetFooters: IGetFooters = (props) => ({
	default: GetDefaultFooters(props),
})

export interface GetFooterProps {
	device_width: number
	kind: keyof IFooters
	options: IFootersProps[GetFooterProps["kind"]]
}

type IGetFooter = (props: GetFooterProps) => ReactElement<typeof props.options>

const GetFooter: IGetFooter = (props) => {
	return GetFooters<typeof props.kind>(props.options)[props.kind][
		identifyDevice(props.device_width)
	]
}

export default GetFooter
