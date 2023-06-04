import { useEffect, useState } from "react";
import {useParams, useNavigate} from 'react-router-dom';
import api from '../../Services/Api';
import './Filme.css'
import {toast} from 'react-toastify'

function Filme(){

    const {id} = useParams();
    const navigate = useNavigate();

    const [filme,setFilme] = useState({});
    const [loading, setLoading] = useState(true);

    useEffect(() =>
    {
        async function loadFilme(){
            await api.get(`/movie/${id}`,{
                params:{
                    api_key: 'acc52bd1b22703336fe1f82c94a4c2d9',
                    language: 'pt-BR',
                }
            })
            .then((response) =>{
                setFilme(response.data)
                setLoading(false);
            })
            .catch(() =>{
                navigate("/", {replace: true})
                return;
            })
        }

        loadFilme();

        return () =>{
            console.log('desmontado')
        }
    }, [id, navigate])


    if(loading){
        <div className="filme_info">
            <h1>
                Carregando Detalhes
            </h1>
        </div>
    }

    function addFavorito(){
        const minhaLista = localStorage.getItem("@primeFlix")

        let filmesSalvos = JSON.parse(minhaLista) || []

        const hasFilme = filmesSalvos.some(filmesSalvos =>filmesSalvos.id === filme.id)

        if(hasFilme){
            toast.warning('Esse filme já está em sua lista')
            return;
        }

        filmesSalvos.push(filme)
        localStorage.setItem("@primeFlix", JSON.stringify(filmesSalvos))
        toast.success('Filme salvo com sucesso')
    }

    return (
        <div className="filme_info">
            <h1>{filme.title}</h1>
            <img src={`https://image.tmdb.org/t/p/original/${filme.backdrop_path}`} 
             alt={filme.title} />

             <h3>Sinopse</h3>
             <span>{filme.overview}</span>

             <strong>Avaliação : {filme.vote_average} / 10</strong>

             <div className="area_btn">
                <button onClick={addFavorito}>Salvar</button>
                <button >
                    <a 
                    target="blank"
                    rel="external"
                    href={`https://youtube.com/results?search_query=${filme.title} Trailer`} >
                        Trailer
                    </a>
                </button>
             </div>

        </div>
    )
}

export default Filme;