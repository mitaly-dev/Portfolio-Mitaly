import {createApi,fetchBaseQuery} from '@reduxjs/toolkit/query/react'

export const ProjectApi = createApi({
    reducerPath:'ProjectApi',
    baseQuery:fetchBaseQuery({baseUrl:'/'}),
    endpoints:builder=>({
        getProjects:builder.query({
            query:()=>"projects"
        }),
        getProject:builder.query({
            query:(id)=>`projects/${id}`
        }),
        addProject:builder.mutation({
            query:(project)=>({
                headers:{
                    'Content-type':'application/json'
                },
                url:'projects',
                method:'POST',
                body:project
            })
        }),
        updateProject:builder.mutation({
            query:(project)=>({
                headers:{
                    'Content-type':'application/json'
                },
                url:`projects/${project.id}`,
                method:'UPDATE',
                body:project
            })
        }),
        deleteProject:builder.mutation({
            query:({id})=>({
                url:`projects/${id}`,
                method:'DELETE'
            })
        })
    })
})

export const {
    useGetProjectsQuery,
    useGetProjectQuery,
    useAddProjectMutation,
    useUpdateProjectMutation,
    useDeleteProjectMutation
} = ProjectApi