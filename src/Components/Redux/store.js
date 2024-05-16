import { configureStore } from '@reduxjs/toolkit';
import counterReducer from './counterSlice';

// store is created using configureStore of reduxjs/toolkit
export default configureStore({
    reducer: {
        counter: counterReducer,
    },
});