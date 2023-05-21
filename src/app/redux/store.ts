import { baseApi } from '@/shared/api';
import { rootReducer } from './rootReducer';
import { configureStore } from '@reduxjs/toolkit'
import { setupListeners } from '@reduxjs/toolkit/dist/query';

const makeStore = () => {
    const store = configureStore({
        reducer: rootReducer,
        middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(baseApi.middleware),
    });

    setupListeners(store.dispatch)

    return store;
}

export const store = makeStore();

export type RootState = ReturnType<typeof store.getState>

export type AppDispatch = typeof store.dispatch