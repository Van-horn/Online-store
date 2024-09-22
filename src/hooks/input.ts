import { ChangeEvent, useCallback, useState } from "react"

interface IuseInput<State> {
	state: State
	resetInputs: () => void
}

const useInput = <T extends object>(initialState: T) => {
	const [state, setState] = useState<T>(initialState)

	const customFunc = {} as Record<
		`change${Capitalize<string & keyof T>}`,
		(e: ChangeEvent<HTMLInputElement>) => void
	>

	Object.keys(state).forEach((property) => {
		customFunc[
			`change${
				(property.charAt(0).toUpperCase() +
					property.slice(1)) as Capitalize<string & keyof T>
			}`
		] = (e: ChangeEvent<HTMLInputElement>) => {
			setState((prev) => ({ ...prev, [property]: e.target.value }))
		}
	})

	const resetInputs = useCallback(() => {
		setState(() => initialState)
	}, [initialState])

	const [customFuncState] = useState<typeof customFunc>(customFunc)

	return { state, resetInputs, ...customFuncState } as IuseInput<T> &
		typeof customFunc
}

export { useInput }
