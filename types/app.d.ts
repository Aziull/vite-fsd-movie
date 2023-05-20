declare global {

    export type Email = string

    export type Id = number

    declare type RootState = import('../src/app/redux/store').RootState
    declare type AppDispatch = import('../src/app/redux/store').AppDispatch
}

export {}
