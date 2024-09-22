import { FC, ReactNode } from "react"

import Footer, { FooterProps } from "../footer/Footer"
import Header, { HeaderProps } from "../header/Header"

interface IndexLayoutProps {
	headerKind?: HeaderProps["kind"]
	footerKind?: FooterProps["kind"]
	children?: ReactNode
}

const IndexLayout: FC<IndexLayoutProps> = (props) => {
	return (
		<>
			<Header kind={props?.headerKind ?? "default"} />
			{props.children}
			<Footer kind={props?.footerKind ?? "default"} />
		</>
	)
}

export default IndexLayout
