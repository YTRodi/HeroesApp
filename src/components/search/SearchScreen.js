import React, { useMemo } from 'react';
import queryString from 'query-string';

import { useLocation } from 'react-router-dom';
import { useForm } from '../../hooks/useForm';
import { HeroCard } from '../heroes/HeroCard';
import { getHeroesByName } from '../../selectors/getHeroesByName';

export const SearchScreen = ( { history } ) => {

    const { search } = useLocation(); // Hook nativo de 'react-router-dom'
    const { q = '' } = queryString.parse( search );

    
    const [ formValues, handleInputChange ] = useForm( {
        searchText: q
    });
    
    const { searchText } = formValues;

    // Unicamente se va a disparar esto cuando el query cambie.
    const heroesFiltered = useMemo(() => getHeroesByName( q ), [ q ]);

    const handleSearch = ( e ) => {
        e.preventDefault();

        history.push( `?q=${ searchText }` );
    }

    return (
        <div>
            <h1>Search Screen</h1>
            <hr />

            <div className="row">
                <div className="col-5 animate__animated animate__fadeInLeft">
                    <h4>Search Form</h4>
                    <hr />
                    <form>
                        <input 
                            type="text"
                            placeholder="Find your hero"
                            className="form-control"
                            autoComplete="off"
                            name="searchText"
                            value={ searchText }
                            onChange={ handleInputChange }
                        />

                        <button
                            type="submit"
                            className="btn m-1 btn-block btn-outline-primary"
                            onClick={ handleSearch }
                        >
                            Search
                        </button>
                    </form>
                </div>

                <div className="col-7 animate__animated animate__fadeInRight">

                    <h4>Results</h4>
                    <hr />
                    
                    {
                        ( q === '' )
                        && 
                        <div className="alert alert-info">
                            Search a hero
                        </div>
                    }

                    {
                        ( q !== '' && heroesFiltered.length === 0)
                        && 
                        <div className="alert alert-danger">
                            There is no a hero with '{ q }'
                        </div>
                    }
                    
                    
                    {
                        heroesFiltered.map( hero => (
                            <HeroCard 
                                key={ hero.id }
                                { ...hero }
                            />
                        ))
                    }
                </div>
            </div>
        </div>
    )
}
