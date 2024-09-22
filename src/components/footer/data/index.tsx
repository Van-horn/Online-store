import { FC } from "react"

import DefaultComputer from "./default/Computer"
import DefaultLaptop from "./default/Laptop"
import DefaultMobile from "./default/Mobile"
import DefaultTablet from "./default/Tablet"
import identifyDevice from "../../../utils/identifyDevice"

interface IDeviceFooters<Props> {
	Mobile: FC<Props>
	Tablet: FC<Props>
	Laptop: FC<Props>
	Computer: FC<Props>
}

export interface IFooters {
	default: IDeviceFooters<Record<never, never>>
}

const footers = {
	default: {
		Mobile: <DefaultMobile />,
		Tablet: <DefaultTablet />,
		Laptop: <DefaultLaptop />,
		Computer: <DefaultComputer />,
	},
}

const getFooter = (width: number, kind: keyof IFooters): JSX.Element =>
	footers[kind][identifyDevice(width)]

export default getFooter
