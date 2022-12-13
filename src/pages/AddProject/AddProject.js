import React from 'react';
import { useForm } from "react-hook-form";
import { useAddProjectMutation } from '../../Redux/ProjectApi';

const AddProject = () => {
	const { register, handleSubmit, formState: { errors } } = useForm();
	const [addProject,isLoading,error] = useAddProjectMutation()

	const onSubmit = async(data) => {
		const project = {
			liveSite : data.liveSite,
			serverSideLink:data.serverSideLink,
			clientSideLink:data.clientSideLink,
			name:data.name,
			description:data.description
		}
		const res = await addProject(project)
		console.log(res)
		
	};
	
    return (
        <div className=' py-16'>
			<div className="w-3/4 m-auto p-8 space-y-3 rounded-xl dark:bg-dark dark:text-gray-100">
				<h1 className="text-2xl font-bold text-center">Add Project</h1>
				<form onSubmit={handleSubmit(onSubmit)} className="space-y-6 ng-untouched ng-pristine ng-valid">
					<div className='grid grid-cols-2 gap-5'>
						<div className="space-y-1 text-sm">
							<label htmlFor="name" className="block dark:text-gray-400">Project Name</label>
							<input  {...register("name", { required: true })} type="text" name="name" id="name" placeholder="name" className="w-full px-4 py-3 rounded-md dark:border-gray-700 dark:bg-lightDark dark:text-gray-100 focus:dark:border-violet-400" />
						</div>
						<div className="space-y-1 text-sm">
							<label htmlFor="liveSite" className="block dark:text-gray-400">Live Site</label>
							<input {...register("liveSite", { required: true })} type="text" name="liveSite" id="liveSite" placeholder="Live Site" className="w-full px-4 py-3 rounded-md dark:border-gray-700 dark:bg-lightDark dark:text-gray-100 focus:dark:border-violet-400" />
						</div>
					</div>
					<div className='grid grid-cols-2 gap-5'>
						<div className="space-y-1 text-sm">
							<label htmlFor="clientSideLink" className="block dark:text-gray-400">Client Side Link</label>
							<input {...register("clientSideLink", { required: true })} type="text" name="clientSideLink" id="clientSideLink" placeholder="Client Side Link" className="w-full px-4 py-3 rounded-md dark:border-gray-700 dark:bg-lightDark dark:text-gray-100 focus:dark:border-violet-400" />
						</div>
						<div className="space-y-1 text-sm">
							<label htmlFor="serverSideLink" className="block dark:text-gray-400">Server Side Link</label>
							<input {...register("serverSideLink", { required: true })}  type="text" name="serverSideLink" id="serverSideLink" placeholder="Server Side Link" className="w-full px-4 py-3 rounded-md dark:border-gray-700 dark:bg-lightDark dark:text-gray-100 focus:dark:border-violet-400" />
						</div>
					</div>
					<div>
						<label htmlFor="description" className="block dark:text-gray-400">Description</label>
						<textarea {...register("description", { required: true })} name="description" className=' bg-lightDark mt-2 w-full'/>
					</div>
					<button type='submit' className="block w-full p-3 text-center rounded-sm dark:text-gray-900 dark:bg-violet-400">Add</button>
				</form>
			</div>
		</div>
    );
};

export default AddProject;