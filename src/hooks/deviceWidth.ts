import { useState, useEffect } from "react"

import identifyDevice from "../utils/identifyDevice"

interface IuseDeviceWidth {
	deviceWidth: number
}

const useDeviceWidth = (initialWidth: number): IuseDeviceWidth => {
	const [deviceWidth, setDeviceWidth] = useState<number>(initialWidth)

	useEffect(() => {
		const handleResize = () => {
			if (identifyDevice(deviceWidth) !== identifyDevice(window.innerWidth))
				setDeviceWidth(window.innerWidth)
		}

		window.addEventListener("resize", handleResize)

		return () => {
			window.removeEventListener("resize", handleResize)
		}
	}, [deviceWidth])

	return { deviceWidth }
}

export default useDeviceWidth
