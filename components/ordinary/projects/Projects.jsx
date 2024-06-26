import React from 'react';
import getProjectData from '@/api/getProjectData';
import ProjectCard from '@/components/reusable/projects-card/ProjectCard';



const Projects = async ({sliceFrom, sliceTo}) => {
    const ourProjects = await getProjectData();
    const dataFlow = ourProjects.projects;

    return (
        <>
            <div className='flex flex-col text-center my-16'>
                <h5 className='text-2xl font-bold lg:text-4xl md:text-3xl'>Our Innovation, Our Work</h5>
                <h6 className='text-[0.9rem] lg:text-[1.3rem] md:text-[1rem] font-medium text-gray-500 mt-4'>The seeds of your Business Growth</h6>
            </div>
            <div className='grid gap-4 mx-auto grid-cols-1 sm:grid-cols-1 sm:mx-auto md:grid-cols-2 md:mx-12 md:gap-4 lg:grid-cols-3 lg:mx-12 2xl:mx-28 2xl:gap-2'>


                {
                    dataFlow.slice(sliceFrom, sliceTo).map((data) =>
                        <ProjectCard
                            key={data.id}
                            imageSource={data.thumbNail}
                            title={data.title}
                            siteUrl={data.url}
                            dynamicLink={data.id} />)
                }
            </div>
        </>
    )
}

export default Projects;