import { useState, useEffect } from "react"

interface IuseDeviceSize {
	device_width: number
	device_height: number
}

interface ISizeState {
	device_width: number
	device_height: number
}

const useDeviceSize = (): IuseDeviceSize => {
	const [device_size, setDeviceSize] = useState<ISizeState>({
		device_width: window.screen.width,
		device_height: window.screen.height,
	})

	useEffect(() => {
		const handleResize = () =>
			setDeviceSize({
				device_width: window.screen.width,
				device_height: window.screen.height,
			})

		window.addEventListener("resize", handleResize)

		return () => {
			window.removeEventListener("resize", handleResize)
		}
	}, [device_size])

	return {
		device_width: device_size.device_width,
		device_height: device_size.device_height,
	}
}

export default useDeviceSize
