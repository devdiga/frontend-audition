/* eslint-disable no-use-before-define */
import React, { useEffect, useState } from "react";
import { Content } from './layout/Fotos-styled.js';
import axios from 'axios';
import Aos from 'aos';
import 'aos/dist/aos.css';
import PhotoCard from './photoCard';

export default function Page() 
{
    const ultimaQtd = 50;

    axios.get('https://jsonplaceholder.typicode.com/photos')
    .then((response) => {
        const container = document.getElementById('container')

        response.data.slice(0, ultimaQtd).forEach((photo) => 
        {
            container.appendChild(PhotoCard(photo));
        });
    });

    function mostrarMais()
    {
        const qtd = ultimaQtd;
        let somaQtd = qtd;

        axios.get('https://jsonplaceholder.typicode.com/photos')
        .then((response) => {
            const container = document.getElementById('container')

            response.data.slice(qtd, somaQtd).forEach((photo) => 
            {
                container.appendChild(PhotoCard(photo));
            });
        });
        
        somaQtd = qtd + 50;
    }

    // const handleChange = (response) =>
    // {
    //     const filter = response.data.filter((fotos) => response.data.name.includes(fotos))
    //     response(filter)
    // } 

    
    const container = document.getElementById('container');
    const blocoIcon = document.getElementById('bloco');
    const listaIcon = document.getElementById('lista');

    function clicarBloco()
    {
        container.style.display = 'flex';
        container.style.flexDirection = 'row';
        blocoIcon.style.fill = 'red';
        listaIcon.style.fill = '#aaa';
    };

    function clicarLista()
    {
        container.style.display = 'flex';
        container.style.flexDirection = 'column';
        blocoIcon.style.fill = '#aaa';
        listaIcon.style.fill = 'red';
    };


    useEffect(() =>
    {
        Aos.init({ duration: 2000 })
    }, []);  
    

    return(
        <Content>

            <div data-aos="fade-left" id="search" className="search-box">
                <input  
                    type="text"
                    placeholder='Pesquise por nomes de fotos'
                    // onChange={handleChange}
                />
                <svg id="bloco" onClick={clicarBloco} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" ><g fill-rule="evenodd"><path d="M0 0h24v24H0z" fill="none"/><path d="M3 3v8h8V3H3zm6 6H5V5h4v4zm-6 4v8h8v-8H3zm6 6H5v-4h4v4zm4-16v8h8V3h-8zm6 6h-4V5h4v4zm-6 4v8h8v-8h-8zm6 6h-4v-4h4v4z"/></g></svg>
                <svg id="lista" onClick={clicarLista} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" ><path d="M0 0h24v24H0V0z" fill="none"/><path d="M4 10.5c-.83 0-1.5.67-1.5 1.5s.67 1.5 1.5 1.5 1.5-.67 1.5-1.5-.67-1.5-1.5-1.5zm0-6c-.83 0-1.5.67-1.5 1.5S3.17 7.5 4 7.5 5.5 6.83 5.5 6 4.83 4.5 4 4.5zm0 12c-.83 0-1.5.68-1.5 1.5s.68 1.5 1.5 1.5 1.5-.68 1.5-1.5-.67-1.5-1.5-1.5zM7 19h14v-2H7v2zm0-6h14v-2H7v2zm0-8v2h14V5H7z"/></svg>
            </div>

            <div className="scroll-to-top">
                <a href="#search"> 
                    ^
                </a>   
            </div>

            <div data-aos="fade-up" id="container">
            </div>

            <div className="mostrar-mais">
                <button type="button" onClick={mostrarMais}>
                    mostrar mais
                </button>   
            </div>
            
        </Content>
    )
}