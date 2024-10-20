import { ReactElement } from "react"

import DefaultFooterProps from "./props"
import Mobile from "./Mobile"
import Tablet from "./Tablet"
import Laptop from "./Laptop"
import Computer from "./Computer"

export interface IDefaultFooters {
	mobile: ReactElement<DefaultFooterProps>
	tablet: ReactElement<DefaultFooterProps>
	laptop: ReactElement<DefaultFooterProps>
	computer: ReactElement<DefaultFooterProps>
}

type DefaultFooters = (props: DefaultFooterProps) => IDefaultFooters

const GetDefaultFooters: DefaultFooters = (props) => ({
	mobile: <Mobile {...props} />,
	tablet: <Tablet {...props} />,
	laptop: <Laptop {...props} />,
	computer: <Computer {...props} />,
})

export default GetDefaultFooters
