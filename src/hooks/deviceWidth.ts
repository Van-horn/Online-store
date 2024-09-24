import { useState, useEffect } from "react"

import identifyDevice from "../utils/identifyDevice"

interface IuseDeviceWidth {
	device_width: number
}

const useDeviceWidth = (): IuseDeviceWidth => {
	const [device_width, setDeviceWidth] = useState<number>(window.screen.width)

	useEffect(() => {
		const handleResize = () => {
			if (
				identifyDevice(device_width) !== identifyDevice(window.screen.width)
			)
				setDeviceWidth(window.screen.width)
		}

		window.addEventListener("resize", handleResize)

		return () => {
			window.removeEventListener("resize", handleResize)
		}
	}, [device_width])

	return { device_width }
}

export default useDeviceWidth
