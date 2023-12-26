// Importa las funciones necesarias de @reduxjs/toolkit/query/react
import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

// Crea una instancia de la API usando createApi de Redux Toolkit
export const todosApi = createApi({

    // Nombre del slice de Redux donde se almacenarán los resultados de las consultas
    reducerPath: 'todos',

    // Configuración de la consulta base usando fetchBaseQuery
    baseQuery: fetchBaseQuery({
        baseUrl: 'https://jsonplaceholder.typicode.com' // URL base para las consultas
    }),

    // Define los endpoints de la API utilizando el builder
    endpoints: (builder) => ({

        // Configuración del endpoint para obtener todos los todos
        getTodos: builder.query({
            query: () => '/todos' // Ruta relativa para la consulta de todos los todos
        }),

        // Configuración del endpoint para obtener un todo específico por su ID
        getTodo: builder.query({
            query: (todoId) => `/todos/${ todoId }` // Ruta relativa con el ID del todo
        }),

    })

})

// Extrae los hooks generados automáticamente para cada endpoint
export const { useGetTodosQuery, useGetTodoQuery, } = todosApi;
