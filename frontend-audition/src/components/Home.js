/* eslint-disable jsx-a11y/alt-text */
import React, { useEffect } from "react";
import { Content } from './layout/Home-styled';
import homeSvg from './images/home-svg.svg';
import { Link } from "react-router-dom";
import Aos from 'aos';
import 'aos/dist/aos.css';

export default function Home()
{
    useEffect(() => 
    {
        Aos.init({duration: 2000})
    }, []);

    return(
        <Content>

            <div className="box-home">
                <span data-aos="fade-right">
                    <p>
                        Neste site, apresentamos o uso da API de fotos, sem custos algúm, clique no botão abaixo para acessar nossa página que contém os elementos disponíneis nesta API.
                    </p>
                    <Link to="/frontend-audition/photos">Acessar fotos</Link>
                </span>

                <img data-aos="fade-left" src={homeSvg} />
            </div>

        </Content>
    )
}