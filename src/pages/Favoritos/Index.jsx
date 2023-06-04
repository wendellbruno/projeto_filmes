import { useEffect, useState } from 'react';
import {Link} from 'react-router-dom';
import {toast} from 'react-toastify'

import './Favoritos.css';

function Favoritos(){

    const [favoritos, setFavoritos] = useState([])

    useEffect(() =>{
        const minhaLista = localStorage.getItem('@primeFlix');
        setFavoritos(JSON.parse(minhaLista) || []);
    }, [])


    function deletarFavorito(id){
        let filtroFilmes = favoritos.filter(filme =>{
            return (filme.id !== id);
        });

        setFavoritos(filtroFilmes);
        localStorage.setItem('@primeFlix', JSON.stringify(filtroFilmes))
        toast.success('Filme removido com sucesso')

    }



    return(
        <div className='meus_filmes'>
            <h1>favoritos</h1>



            {
                favoritos.length === 0 && <span>Nenhum filme salvo 😥😒 ! </span>
            }

            <ul>
                {favoritos.map(elemento =>{
                    return(
                        <li key={elemento.id} >
                            <span>{elemento.title}</span>
                            <div>
                                <Link to={`/filme/${elemento.id}`}>Ver Detalhes</Link>
                                <button onClick={() => deletarFavorito(elemento.id)} >Excluir</button>
                            </div>

                        </li>
                    )
                })}
            </ul>

        </div>
    )
}

export default Favoritos

