import React from 'react'
import { UserRepo } from '../../@types';
import SectionHeader from '../SectionHeader'

export type Project = {
  title: string;
  description: string;
};

type ProjectsProps = {
  repos: UserRepo[],
}

const Projects = ({
  repos,
}: ProjectsProps) => {
  return (
    <>
        <SectionHeader
            title='Projects'
        />

        {/* <div
          className='grid grid-rows-3 grid-flow-col gap-2
          overflow-x-scroll
          scroll-smooth scrollbar-thin scrollbar-thumb-gray-900 scrollbar-track-gray-100
          snap snap-mandatory snap-x'
        >
          {repos.map((item, i) => (
            <div
              key={i}
              className='
              snap-center
              p-5
              relative
              before:absolute before:rounded-lg before:-z-10 before:backdrop-blur-[5px] before:w-full before:h-full before:inset-0 before:border before:border-white/10 before:bg-white/10'
            >
              <p>
                {item.name}
              </p>
              <p>
                {item.description}
              </p>
            </div>
          ))}
        </div> */}
    </>
  )
}

export default Projects