export type Devices = "Computer" | "Laptop" | "Tablet" | "Mobile"

const identifyDevice = (width: number): Devices => {
	if (width <= 425) return "Mobile"
	if (width > 425 && width <= 768) return "Tablet"
	if (width > 768 && width <= 1440) return "Laptop"
	if (width > 1440) return "Computer"
	return "Computer"
}

export default identifyDevice
