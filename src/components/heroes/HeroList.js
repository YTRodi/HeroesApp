import React, { useMemo } from 'react'
import { getHeroesByPublisher } from '../../selectors/getHeroesByPublisher'
import { HeroCard } from './HeroCard';

export const HeroList = ( { publisher } ) => {

    // Si el publisher cambia (array de dependencias) se vuelve a memorizar.
    const heroes = useMemo( () => getHeroesByPublisher( publisher ), [ publisher ]);
 
    return (
        <div className="card-columns animate__animated animate__fadeIn">
            {
                heroes.map( hero => (
                    <HeroCard 
                        key={ hero.id } 
                        { ...hero }
                    />
                    ))
                }
        </div>
    )
}
// Extraigo todas las props del hero y las mando por props al componente