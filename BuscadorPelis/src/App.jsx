
import './index.css'
import { Movies } from './components/Movies';
import { useMovies } from './hooks/UseMovies';
// import { useRef } from 'react';

  
export const App = () => {

  const { movies} = useMovies()
  
  return (
    <>
    <div className="page">

      <header>
        <h1>Buscador de peliculas</h1>
        <form className="form">
          <input placeholder="nose aun xd" />
          <button type="submit" >Buscar</button>
        </form>
      </header>

    <main>
      {/* renderizado condicional */}
      <Movies movies={movies} />
    </main>



    </div>
    
    
    
    </>
  )
}



