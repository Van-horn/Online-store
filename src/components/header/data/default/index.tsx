import { ReactElement } from "react"

import DefaultHeaderProps from "./props"
import Mobile from "./Mobile"
import Tablet from "./Tablet"
import Laptop from "./Laptop"
import Computer from "./Computer"

export interface IDefaultHeaders {
	mobile: ReactElement<DefaultHeaderProps>
	tablet: ReactElement<DefaultHeaderProps>
	laptop: ReactElement<DefaultHeaderProps>
	computer: ReactElement<DefaultHeaderProps>
}

type DefaultHeaders = (props: DefaultHeaderProps) => IDefaultHeaders

const GetDefaultHeaders: DefaultHeaders = (props) => ({
	mobile: <Mobile {...props} />,
	tablet: <Tablet {...props} />,
	laptop: <Laptop {...props} />,
	computer: <Computer {...props} />,
})

export default GetDefaultHeaders
