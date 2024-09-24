export type Devices = "computer" | "laptop" | "tablet" | "mobile"

const identifyDevice = (width: number): Devices => {
	if (width <= 426) return "mobile"
	if (width <= 769) return "tablet"
	if (width <= 1441) return "laptop"
	return "computer"
}

export default identifyDevice
