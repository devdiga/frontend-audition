import styled from "styled-components";

export const Content = styled.div`
    max-width: 100vw;
    min-height: 100vh;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;

    .search-box 
    {
        margin: 20px;
        height: auto;
        display: flex;
        align-items: center;
        justify-content: center;
        position: relative;
        width: 550px;
        
        input 
        {
            border: none;
            border-radius: 10px;
            width: 75%;
            padding: 15px 15px;
            margin: 0;
        }

        svg 
        {
            margin: 5px;
            width: 37.5px;
            fill: #7e7d7d;
            cursor: pointer;
            padding: 8.5px;
            border-radius: 100%;
            transition: .2s;

            &:hover 
            {
                background-color: #aaaaaa30;
            }
        }
    }

    #container 
    {
        position: relative;
        width: 100%;
        max-width: 950px;
        display: flex;
        flex-wrap: wrap;
        margin: auto;
        align-items: center;
        justify-content: center;
    }

    .scroll-to-top
    {
        width: 30px;
        height: 30px;
        border: none;
        border-radius: 100%;
        background-color: #fff;
        position: sticky;
        left: 97%;
        top: 94%;
        margin: 10px;
        z-index: 999;
        display: flex;
        justify-content: center;
        align-items: center;

        a 
        {
            text-decoration: none;
            color: #7e7d7d;
            font-size: 1rem;
            font-weight: bold;
        }
    }  

    .mostrar-mais
    {
        button 
        {
            border: none;
            border-radius: 5px;
            padding: 10px;
            background-color: #fff;
            margin: 10px;
            font-weight: bold;
            font-size: .8rem;
            cursor: pointer;

            &:hover 
            {
                background-color: #9e9d9d3d;
            }
        }
    }

    @media (min-width: 260px) and (max-width: 500px)
    {
        .search-box
        {
            width: 90%;
        }
    }

    @media (min-width: 260px) and (max-width: 500px)
    {
        .search-box
        {
            svg 
            {
                display: none;
            }
        }
    }

    @media (min-width: 500px) and (max-width: 800px)
    {
        .search-box
        {
            width: 70%;
        }
    }
`;