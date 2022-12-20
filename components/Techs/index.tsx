import React, { useEffect, useState } from 'react'
import SectionHeader from '../SectionHeader'

type Props = {}

const Techs = ({
}: Props) => {
    const [componentes, setComponentes] = useState<any[]>()

    useEffect(() => {
        const techs = [
            'csharp',
            'dot-net',
            'react',
            'angularjs',
            'vuejs',
            'typescript',
            'javascript',
            'html5',
            'css3',
            'git',
            'docker',
            'nodejs',
            'redis',
            'mongodb',
        ];

        Promise
        .all(techs.map(async (t) => {
            try {
                const m = await import(`react-devicons/${t}/original`);
                return m.default;
            } catch(err){}
        }))
        .then(comps => {
            setComponentes(comps)
        })
    }, [])    

  return (
    <div
        className=''
    >
        <SectionHeader
            title='Techs'
        />

        <p
            className='my-5 md:text-2xl mx-auto w-full text-center'
        >
            Here&apos;s an overview of tools/technologies im used to (full list ommited for brevitty)
        </p>

        <div
            className='mt-5 grid grid-cols-3 gap-y-5 place-items-center max-w-3xl mx-auto'
        >
            {componentes?.map((Icon, i) => (
                <Icon
                    key={i}
                    size={42}
                />
            ))}
            ...
        </div>
    </div>
  )
}

export default Techs