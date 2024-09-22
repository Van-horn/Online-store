import { configureStore, combineReducers } from "@reduxjs/toolkit"

const rootReducer = combineReducers({
	// [userService.reducerPath]: userService.reducer,
})

export const store = configureStore({
	reducer: rootReducer,
	// middleware: getDefaultMiddleware => getDefaultMiddleware().concat(userService.middleware),
})

export type RootState = ReturnType<typeof rootReducer>
export type AppStore = typeof store
export type AppDispatch = AppStore["dispatch"]
