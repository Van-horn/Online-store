import { ReactElement } from "react"

import identifyDevice from "src/utils/identifyDevice"
import GetDefaultHeaders, { IDefaultHeaders } from "./default"
import DefaultHeaderProps from "./default/props"

interface IHeaders {
	default: IDefaultHeaders
}

interface IHeadersProps {
	default: DefaultHeaderProps
}

type IGetHeaders = <K extends keyof IHeaders>(
	props: IHeadersProps[K],
) => IHeaders

const GetHeaders: IGetHeaders = (props) => ({
	default: GetDefaultHeaders(props),
})

export interface GetHeaderProps {
	device_width: number
	kind: keyof IHeaders
	options: IHeadersProps[GetHeaderProps["kind"]]
}

type IGetHeader = (props: GetHeaderProps) => ReactElement<typeof props.options>

const GetHeader: IGetHeader = (props) => {
	return GetHeaders<typeof props.kind>(props.options)[props.kind][
		identifyDevice(props.device_width)
	]
}

export default GetHeader
