import { configureStore } from '@reduxjs/toolkit'
import { counterSlice } from './features/slices/counter/CounterSlice'
import { PokemonSlice } from './features/slices/pokemon/pokemonSlice'
import { todosApi } from '../todoApp/todoApi'

export default configureStore({
    reducer: {
        counter: counterSlice.reducer,
        pokemons: PokemonSlice.reducer,
        [todosApi.reducerPath]: todosApi.reducer,
    },
    middleware: (getDefaultMiddleware) => getDefaultMiddleware()
    .concat( todosApi.middleware )
})