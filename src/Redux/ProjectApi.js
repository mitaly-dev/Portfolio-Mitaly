import {createApi,fetchBaseQuery} from '@reduxjs/toolkit/query/react'

export const ProjectApi = createApi({
    reducerPath:'ProjectApi',
    baseQuery:fetchBaseQuery({baseUrl:'http://localhost:5000/'}),
    endpoints:builder=>({
        getProjects:builder.query({
            query:()=>"/projects"
        }),
        getProject:builder.query({
            query:(id)=>`/projects/${id}`
        })
    })
})

export const {
    useGetProjectsQuery,
    useGetProjectQuery
} = ProjectApi