import queryString from 'query-string';


import { useNavigate, useLocation } from "react-router-dom";
import { HeroCard } from "../heroe/HeroCard";
import { useForm } from "../../hooks/useForm";
import { getHeroesByName } from "../selectors/getHeroesByName";
import { useMemo } from 'react';

export const SearchScreen = () => {

  const navigate = useNavigate();
  const location = useLocation();

  const { q = '' } = queryString.parse(location.search);
  
  
  const [formValues, handleInputChange] = useForm({
    searchText: q,
  })  

  const {searchText} = formValues;

 
  const heroesFltered = useMemo( () =>  getHeroesByName(q), [q] ) ;


  const handleSubmit = (e) => {
    e.preventDefault();
    navigate(`?q=${searchText}`)
    
  }
    
  return (
    <>
        <h1>Searchs</h1>
        <hr/>

        <div className="row">
          <div className="col-5">
              <h4>Search</h4>
              <form onSubmit={handleSubmit}>
                <input
                  type="text"
                  placeholder="Search Hero"
                  className="form-control"
                  name="searchText"
                  autoComplete="off"
                  value={ searchText }
                  onChange={ handleInputChange }
                />

                <button
                  className="btn btn-outline-primary mt-2 btn-block"
                  type="submit"
                >
                  Searh...
                </button>

              </form>

          </div>

          <div className="col-7">
              <h4>Resultados</h4>
              <hr/>

              {
                (q === '')
                  ? <div className="alert alert-info">Buscar un heroe</div>
                  : (heroesFltered.length === 0) 
                    && <div className="alert alert-danger">No hay resultados: {q}</div>
              }

              {
                heroesFltered.map( hero => (
                  <HeroCard 
                      key={ hero.id }
                      { ...hero }
                  />
                ))
              }
          </div>
        </div>
    </>
  )
}