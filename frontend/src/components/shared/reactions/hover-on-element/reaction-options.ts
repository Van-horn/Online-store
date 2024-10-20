import { css, Interpolation } from "styled-components"

export interface I_hover_reactionOptions {
	blackout: Interpolation<Record<never, never>>
	lightening: Interpolation<Record<never, never>>
	none: Interpolation<Record<never, never>>
}

const hover_reactionOptions: I_hover_reactionOptions = {
	blackout: css`
		filter: brightness(0.96);
	`,
	lightening: css`
		filter: brightness(1.1);
	`,
	none: css``,
}

export default hover_reactionOptions
