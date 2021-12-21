import Styled from 'styled-components'

export const Content = Styled.div`
    nav 
    {
        position: relative;
        width: 100%;
        padding: 15px 10px;
        display: flex;
        justify-content: space-between;
        align-items: center;
        background: #fff;
        z-index: 999;

        .container 
        {
            width: 100%;
            max-width: 980px;
            display: flex;
            justify-content: space-between;
            align-items: center;
            margin: auto;

            a 
            {
                text-decoration: none;
                font-weight: bold;
                color: #7e7d7d;
                font-size: 2rem;
            }

            .menu-icon 
            {
                display: none;
            }

            ul 
            {
                a 
                {
                    margin: 10px;
                    text-decoration: none;
                    color: #7e7d7d;
                    font-weight: bold;
                    font-size: 1.2rem;

                    &:hover 
                    {
                        color: #000;
                    }
                }
            }
        }
    }

    nav.active 
    {
        position: fixed;    
        width: 100vw
    }

    @media (min-width: 260px) and (max-width: 650px)
    {
        nav 
        {
            .container 
            {
                .menu-icon 
                {
                    display: flex;
                    z-index: 999;
                    font-size: 2rem;
                    color: #7e7d7d;
                }       

                .menu.open 
                {
                    position: absolute;
                    top: 0;
                    left: 0;
                    width: 100vw;
                    height: 100vh;
                    background: #fff;
                    color: #7e7d7d;
                    display: flex;
                    flex-direction: column;
                                        
                    a 
                    {
                        margin: auto;
                    }
                }

                .menu.close
                {
                    display: none;
                }
            }
        }
    }
`;