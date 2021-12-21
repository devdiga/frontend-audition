/* eslint-disable jsx-a11y/alt-text */
import React, { useEffect } from "react";
import { Content } from './layout/Description-styled';
import Aos from 'aos';
import 'aos/dist/aos.css';

export default function Description()
{
    useEffect(() => 
    {
        Aos.init({duration: 2000})
    }, []);

    return(
        <Content>

            <div data-aos="fade-up" className="box-description">
                
            </div>

        </Content>
    )
}