import { configureStore } from '@reduxjs/toolkit'
import { counterSlice } from './features/slices/counter/CounterSlice'
import { PokemonSlice } from './features/slices/pokemon/pokemonSlice'

export default configureStore({
    reducer: {
        counter: counterSlice.reducer,
        pokemons: PokemonSlice.reducer
    }
})