import { FC } from "react"

import DefaultComputer from "./default/Computer"
import DefaultLaptop from "./default/Laptop"
import DefaultMobile from "./default/Mobile"
import DefaultTablet from "./default/Tablet"
import identifyDevice from "../../../utils/identifyDevice"

interface IDeviceHeaders<Props> {
	Mobile: FC<Props>
	Tablet: FC<Props>
	Laptop: FC<Props>
	Computer: FC<Props>
}

export interface IHeaders {
	default: IDeviceHeaders<Record<never, never>>
}

const headers = {
	default: {
		Mobile: <DefaultMobile />,
		Tablet: <DefaultTablet />,
		Laptop: <DefaultLaptop />,
		Computer: <DefaultComputer />,
	},
}

const getHeader = (width: number, kind: keyof IHeaders): JSX.Element =>
	headers[kind][identifyDevice(width)]

export default getHeader
