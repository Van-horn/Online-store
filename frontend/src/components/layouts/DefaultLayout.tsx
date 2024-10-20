import { FC, ReactElement } from "react"

import Footer, { FooterProps } from "../footer/Footer"
import Header, { HeaderProps } from "../header/Header"

interface DefaultLayoutProps {
	children?: ReactElement
	headerOptions?: HeaderProps["options"]
	footerOptions?: FooterProps["options"]
}

const DefaultLayout: FC<DefaultLayoutProps> = (props) => {
	return (
		<>
			<Header options={props?.headerOptions ?? {}} />
			{props.children}
			<Footer options={props?.headerOptions ?? {}} />
		</>
	)
}

export default DefaultLayout
