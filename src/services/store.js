import { configureStore } from "@reduxjs/toolkit";

import { articleApi } from "./article";

// store is a global state object that holds the state of the whole application.
export const store = configureStore({

    // reducer slices the state into smaller pieces that you want to use in your application.
    reducer: {
        [articleApi.reducerPath]: articleApi.reducer,
    },
    middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(articleApi.middleware),
});