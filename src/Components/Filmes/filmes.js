import React from "react"
import * as S from "../style"
import { useState, useEffect } from 'react'
import axios from 'axios'
import Carousel from 'react-elastic-carousel'



export default function Filmes (){

    const [filmes, setFilmes] = useState([])

    useEffect(() => {
        getFilmes()
    }, [filmes])

    const getFilmes = async () => {
        await axios.get('https://api.themoviedb.org/3/movie/popular?api_key=7b3563dca1e96510a3981911bb89a35c&language=pt-BR&page=1')
        .then((resposta) => {
            const allApi = resposta.data.results.map((item) => {
                return {
                    ...item,
                    image: `https://image.tmdb.org/t/p/w500/${item.poster_path}`
                }
            })
            setFilmes(allApi)

        }).catch((error) => alert(`desculpe, você teve um erro de requisição ${error}`))
    }
    const breakPoints = [
    
        { width: 500, itemsToShow: 5 }
        
      ];

    return(
        <S.Biscoito id="filmes">
           
            
                <Carousel breakPoints={breakPoints} itemPadding={[10, 15]}>
                     {filmes.map((item) => (
                <S.Coxinha>
                     <a href="https://www.themoviedb.org/" target="blank">
                    <img src={item.image} alt={item.title}/>
                    <h2>{item.title}</h2>
                    </a>
                    <p>Data: 2023</p>
                   
                </S.Coxinha>
                
            ))}
            </Carousel>
        </S.Biscoito>
    )
}