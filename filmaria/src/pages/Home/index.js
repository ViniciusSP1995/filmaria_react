import { useEffect, useState } from 'react';
import api from '../../services/api';
import { Link } from 'react-router-dom';
import './home.css'

export default function Home() {
    const [filmes, setFilmes] = useState([]);

    useEffect(() => {

     async function loeadFilmes(){
       
        const response = await api.get('r-api/?api=filmes')
       // console.log(response.data);
       setFilmes(response.data);

      }

      loeadFilmes();

    }, []);

    return (
      <div className="container">
        <div className="lista-filmes">
          {filmes.map((filme)=>{
            return(
              <article key={filme.id}>
                <strong> {filme.nome} </strong>
                <img src={filme.foto} alt={filme.nome}/>
                <Link to={`filme/${filme.id}`}>Acessar</Link>
              </article>
            )
          })}
        </div>
      </div>
    );
  }