import React from "react"
import * as S from "../style"
import { useState, useEffect } from "react"
import axios from 'axios'

export default function Main() {

    const [filmes, setFilmes] = useState([])
    const [fundo, setFundo] = useState([])

    const [loading, setLoading] = useState(false);

    useEffect(() => {
        let isMounted = true; 

        const fetchData = async () => {
            if (!loading) {
                
                try {
                    setLoading(true); 

                    const response = await axios.get(
                        'https://api.themoviedb.org/3/movie/popular?api_key=7b3563dca1e96510a3981911bb89a35c&language=pt-BR&page=1'); 

                    if (isMounted) {
                        const allApi = response.data.results.map((item) => {
                            return {
                                ...item,
                                poster: `https://image.tmdb.org/t/p/w500/${item.backdrop_path}`
                            }
                        })
                        setFilmes(allApi)

                      
                        setFundo(arrayAntiga => arrayAntiga = filmes.slice(0, 1))
                        console.log()

                    }

                } catch (error) {
                    console.error(error);
                } finally {
                    setLoading(false); 
                }
            }
        };

        fetchData();

        return () => {
            isMounted = false; 
        };
    }, [fundo,setFundo,setFilmes,filmes]);

    return (
        <S.ContainerBox id="main">
            {}
            <S.Guarana back={fundo.map(item => item.poster)} id="main">

                {fundo.map(item => (
                    <S.Paodequeijo  back={fundo.map(item => item.poster)}>
                        <h1>{item.title}</h1>
                        <h3>IMDB: {item.vote_average}</h3>
                        <h3>Lançamento: {item.release_date}</h3>
                        <p>Sinopse{item.overview}</p>

                    </S.Paodequeijo>
                ))}
            </S.Guarana>
        </S.ContainerBox>
    )
}