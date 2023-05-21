declare global {

    export type Brand<K, T> = K & { [_brand]: T };

    export type Email = string
    export type Username = string
    export type Id = number

    export type Title = string
    export type Url = str

    declare type RootState = import('../src/app/redux/store').RootState
    declare type AppDispatch = import('../src/app/redux/store').AppDispatch
}

export {}
