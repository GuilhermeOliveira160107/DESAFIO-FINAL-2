import styled from "styled-components";
export const ContainerBox = styled.section`
height: 100vh;
`
export const Guarana = styled.section`
   background-image: url(${props => props.back});
    background-repeat:no-repeat;
    background-size:100% 100%;
    height: 100vh;
    color:white;
    display: flex;
    flex-direction: column;
    justify-content: space-around;  
`


export const Paodequeijo = styled.section`
/* border: 1px solid pink; */
display: flex;
flex-direction: column;
justify-content: end;
width: 60%;
height:60vh;
margin-left: 7vw;
color: black;
h1{
    font-size: 3em;
}
h3{
    font-size: 1.3em;
}
p{
    font-size: 1.2em;
}
`


export const Biscoito = styled.section`
    background-color: #000000;
    height: 78vh;
    display:flex;
    flex-direction: column;
    justify-content: space-between;
    border: 1px solid green;
    button{
        border: none;
        background-color: #000000;
        color: white;
    }
    .rec-dot {
    display: none;
  }
 `


 export const Coxinha = styled.div`
    font-size: 3rem;
    /* border: 1px solid yellow; */
    width: 20vw;
    display: flex;
    align-items:center;
    justify-content: space-evenly;
    flex-direction: column;
    padding-top: 10px;
    a{
        text-decoration: none;
    }
    img{
        width: 14vw;
    }
    h2{
        font-size: 1rem;
        width: 14vw;
        color: #F6F6F6;
        &:hover{
        color: blue;
       }
    }
    p{
        font-size: 0.9rem;
        width: 14vw; 
        color: #F6F6F6;
    }
`