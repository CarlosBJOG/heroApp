import { useMemo } from 'react';

import { HeroCard } from './HeroCard';

import { getHeroByPublisher } from '../selectors/getHeroByPublisher';

import PropTypes from 'prop-types';

import 'animate.css'

export const HeroList = ( { publisher } ) => {

    const heroes = useMemo( () => getHeroByPublisher( publisher ), [publisher] );
    
    return (
        <div className="row ">  
           
                {
                    heroes.map( (hero) => (
                        <HeroCard 
                            key= { hero.id } 
                            { ...hero } 
                        />
                      
                    ))
                }

        </div>
    )
}

HeroList.propTypes = {
    publisher: PropTypes.string.isRequired
}
