import React from 'react'

type Props = {
    title: string;
}

const SectionHeader = ({
    title,
}: Props) => {
  return (
    <h2
        className='visible lg:invisible
        text-2xl uppercase mx-auto text-center tracking-widest'
    >
        {title}
    </h2>
  )
}

export default SectionHeader