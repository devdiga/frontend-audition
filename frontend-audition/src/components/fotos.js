/* eslint-disable jsx-a11y/alt-text */
/* eslint-disable no-use-before-define */
import React, { useEffect, useState } from "react";
import { Content } from './layout/Fotos-styled.js';
import axios from 'axios';
import Aos from 'aos';
import 'aos/dist/aos.css';
import PhotoCard from './photoCard';

export default function Page() 
{
    // Função para mostrar mais elementos para quando for clicado para "mostrar mais" elementos
    function mostrarMais()  
    {
        axios('https://jsonplaceholder.typicode.com/photos')
        .then((response) => {
            const container = document.getElementById('container')

            response.data.slice(50, 100).forEach((photo) => 
            {
                container.appendChild(PhotoCard(photo))
            });
        });
    }


    // Função para quando for clicado no ícone de lista, para mostrar os elementos em bloco
    function clicarBloco()
    {
        if(document.getElementById('container') &&
           document.getElementById('bloco') &&
           document.getElementById('lista'))
        {
            document.getElementById('container').style.display = "flex"
            document.getElementById('container').style.flexDirection = "row"
            document.getElementById('bloco').style.fill = 'red'
            document.getElementById('lista').style.fill = '#aaa'
        }
    }

    // Função para quando for clicado no ícone de lista, para mostrar os elementos em lista
    function clicarLista()
    {
        if(document.getElementById('container') &&
           document.getElementById('bloco') &&
           document.getElementById('lista'))
        {
            document.getElementById('container').style.display = "flex"
            document.getElementById('container').style.flexDirection = "column"
            document.getElementById('bloco').style.fill = '#aaa'
            document.getElementById('lista').style.fill = 'red'
        }
    }

    // Efeito de duração de suavização de animação de scroll
    useEffect(() =>
    {
        Aos.init({ duration: 2000 })
    }, []);  


    const [allData,setAllData] = useState([]);
    const [filter,setFilter] = useState(allData);
    
    // Função para filtro de busca
    const handleSearch = (event) => {
        let value = event.target.value.toLowerCase();
        let result = [];

        result = allData.filter((data) => {
            return data.title.search(value) != -1;
        });
        setFilter(result);
    }

    // Função effect para renderizar os elementos no container
    useEffect(() => {
        axios('https://jsonplaceholder.typicode.com/photos')
        .then(response => {
            
            setAllData(response.data.slice(0, 50));
            setFilter(response.data.slice(0, 50));
        })
        .catch(error => {
            console.log('Error getting fake data: ' + error);
        })
    }, []);
    

    return(
        <Content>

            <div data-aos="fade-left" id="search" className="search-box">
                <input  
                    type="text"
                    placeholder='Pesquise por nomes de fotos'
                    onChange={(event) => handleSearch(event)}
                />
                <svg id="bloco" onClick={clicarBloco} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" ><g fillRule="evenodd"><path d="M0 0h24v24H0z" fill="none"/><path d="M3 3v8h8V3H3zm6 6H5V5h4v4zm-6 4v8h8v-8H3zm6 6H5v-4h4v4zm4-16v8h8V3h-8zm6 6h-4V5h4v4zm-6 4v8h8v-8h-8zm6 6h-4v-4h4v4z"/></g></svg>
                <svg id="lista" onClick={clicarLista} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" ><path d="M0 0h24v24H0V0z" fill="none"/><path d="M4 10.5c-.83 0-1.5.67-1.5 1.5s.67 1.5 1.5 1.5 1.5-.67 1.5-1.5-.67-1.5-1.5-1.5zm0-6c-.83 0-1.5.67-1.5 1.5S3.17 7.5 4 7.5 5.5 6.83 5.5 6 4.83 4.5 4 4.5zm0 12c-.83 0-1.5.68-1.5 1.5s.68 1.5 1.5 1.5 1.5-.68 1.5-1.5-.67-1.5-1.5-1.5zM7 19h14v-2H7v2zm0-6h14v-2H7v2zm0-8v2h14V5H7z"/></svg>
            </div>

            <div className="scroll-to-top">
                <a href="#search"> 
                    ^
                </a>   
            </div>

            <div data-aos="fade-up" id="container">
                {filter.map((value) => {
                    return(

                        <div className="box-foto" key={value.id}>
                            <img src={value.url} title={"Foto do id: " + value.id}/>
                            <h2>
                                {value.title}   
                            </h2>
                            <p>
                                {value.id}
                            </p>
                        </div>  

                    )}
                )}
            </div>

            <div className="mostrar-mais">
                <button type="button" onClick={mostrarMais}>
                    mostrar mais
                </button>   
            </div>
            
        </Content>
    )
}