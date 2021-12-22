import styled from "styled-components";

export const Content = styled.div`
    max-width: 100vw;
    min-height: 100vh;
    display: flex;
    justify-content: center;
    align-items: center;
    margin: auto;

    .box-home
    {
        width: 100%;
        max-width: 980px;
        height: auto;
        margin: auto;
        display: flex;
        align-items: center;
        flex-wrap: wrap;
        background-color: #fff;
        padding: 10px;
        border-radius: 10px;
        box-shadow: 0px 0px 30px #00000025;

        span 
        {
            width: 65%;
            height: auto;

            p 
            {
                font-size: 1.2rem;
                margin: 15px;
                color: #7e7d7d;
            }

            a 
            {
                text-decoration: none;
                color: red;
                border: .5px solid red;
                font-size: 1rem;
                padding: 7px 12px;
                margin: 15px;
                transition: .2s;
                font-weight: bold;

                &:hover 
                {
                    background-color: #00000015;
                }
            }
        }

        img 
        {
            width: 300px;
        }
    }

    @media (min-width: 260px) and (max-width: 750px)
    {
        .box-home 
        {
            width: 90%;
            height: auto;
            padding: 20px;
            margin: auto;

            span 
            {
                width: 100%;

                p 
                {
                    font-size: .9rem;
                }
                
                a 
                {
                    font-size: .8rem;
                    padding: 5px 7px;
                }
            }

            img 
            {
                order: -1;
                margin: auto;
            }
        }
    }

    @media (min-width: 750px) and (max-width: 1100px) 
    {
        .box-home 
        {
            width: 90%;

            span 
            {
                width: 55%;

                p 
                {
                    font-size: 1rem;
                }
            }
        }
    }
`;