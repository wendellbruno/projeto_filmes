import { useEffect, useState } from "react";
import api from "../../Services/Api";
import {Link} from 'react-router-dom'
import "./Home.css"

function Home(){

    const [Filmes, setFilmes] = useState([])
    const [loading, setLoading] = useState(true)

    useEffect(() =>{
        async function loadFilmes(){
            const response = await api.get("movie/now_playing", {
                params:{
                    api_key: 'acc52bd1b22703336fe1f82c94a4c2d9',
                    language: 'pt-BR',
                    page: 1,
                }
            })

            //console.log(response.data.results.slice(0,10))
            setFilmes(response.data.results.slice(0,10))
            setLoading(false)
        }

        loadFilmes()
    }, [])


    if(loading){
        return(
            <div className="loading">
                <h2>Carregando filmes....</h2>
            </div>
        )
    }

    return (
        <div className="container">
            <div className="lista_filmes">
                {
                    Filmes.map(elemento =>{
                        return(
                            <article key={elemento.id}>
                                <strong>{elemento.title}</strong>
                                <img src={`https://image.tmdb.org/t/p/original/${elemento.poster_path}`} 
                                alt={elemento.title} />
                                <Link to={`/filme/${elemento.id}`} >Acessar</Link>
                            </article>
                        )
                    })
                }
            </div>
        </div>
    )
}

export default Home;