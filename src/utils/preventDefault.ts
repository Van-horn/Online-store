import { FormEvent, MouseEvent } from "react"

const prevDef = (
	e: MouseEvent<HTMLAnchorElement> | FormEvent<HTMLFormElement>,
): void => {
	e.preventDefault()
}

export default prevDef
