/* eslint-disable react/jsx-no-target-blank */
/* eslint-disable jsx-a11y/anchor-is-valid */
/* eslint-disable jsx-a11y/alt-text */
import React from 'react';
import { Link } from 'react-router-dom';
import { Content } from './layout/Footer-styled';

export default function Footer()
{
    return(
        <Content>
            <div className='box-footer'>

                <div className='box-info'>
                    <h2>Contact</h2>
                    <ul>
                        <li>
                            <img src="data:image/png;base64,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"/>
                            <a target="_blank" href="https://web.whatsapp.com/send?phone=17996710745">Whatsapp</a>
                        </li>
                        <li>
                            <img src="data:image/png;base64,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"/>
                            <a target="_blank" href="https://www.instagram.com/bodao_code/">Instagram</a>
                        </li>
                        <li>
                            <img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAFoAAABaCAYAAAA4qEECAAAAAXNSR0IArs4c6QAAA7ZJREFUeF7t2r9rFEEUB/D3NmkixEKDFmphEMRCbQzYKCJWFmKjhX+BjUgQm3hzTmZW0liInY1/gD8KkVQiBBQEtdBoH9BOsTAoCLo7chpIIgZmvrcMG/a7zaV43/eyn3s59jarwiOLgGaZwiFC6ExLQGhCZxLINIYbTehMApnGcKMJnUkg0xhuNKEzCWQas+k32lq7r6qqE4XIfhGZCCLbg8i4iHwrRJZFZDmofg0h/PlZVb8OXuu6XizLcimT8+b8ZjgzM7NzdHT0ioRwQUR2QViqs845C2WB0Kba6Onp6bHx8fE5CeEycK7rI4T+P2Gv19tbqM6LyIGhkUUGf8pu1vvrTfSK6bEpNtoYc1BFnovI1piTiqrhRq9nstZuq6vqjYjsiQKMLOJG/wNljHmiIqci/eLLuNGrVrbXO1mrPo3Xi6/kRq+x6vf7LySEo/F88ZWEXrGy1h6qq+ptPF1iJT86/oL1e70ronozkS+6nBu9QmWMmVeR09Fy6ws/qMi9oPp9o3xR1wu2LBfA/smx1l5H940Z3JsY3LNIOZZE9apz7mFKKEdtK6GttVvqqtpwGzeA+V6MjExaaz/lgEud0Vbo3XVVfUw6GdU7zrmLSZmMxW2FTr7iKEI4Z8vyQUa7pFGthDbGTKnIy5Qz0bo+NnvjxuB+SCuPVkLba9eO1EXxKkWM0Claq5d2yRsdRI57758B47JEWrnRyEcHoYF9ITSAhkQIjagBGUIDaEiE0IgakCE0gLY20u/3nYRghmzTSPznr1875ubmPjfSLKJJ1su7FkH/cN6PRfg0VtJN6BDeu7I82JhiRKNuQos8dt6fifBprKST0Cpye9b74R8rS3gbOgkdRKa997cSnIYu7SS0qJ51zj0aWi+hQSehi5GRw9baxQSnoUu7Cj1mrf0xtF5Cgy5Cf3HeTyQYNVLaPWjV1865qUb0Epp0DzqE+64szycYNVKaFTr2NzbGHFaRwTPR0Qf/wxJNtVpIaAANiRAaUQMyhAbQkAihETUgQ2gADYkQGlEDMoQG0JAIoRE1IENoAA2JEBpRAzKEBtCQCKERNSBDaAANiRAaUQMyhAbQkAihETUgQ2gADYkQGlEDMoQG0JAIoRE1IENoAA2JEBpRAzKEBtCQCKERNSBDaAANiRAaUQMyhAbQkAihETUgQ2gADYlYayfrqrqbkg0il7z371IyOWtb+dhuToBcswidSZrQhM4kkGkMN5rQmQQyjeFGEzqTQKYx3GhCZxLINIYbnQn6NyXq1mrTAG1qAAAAAElFTkSuQmCC"/>
                            <a href="#">Facebook</a>
                        </li>
                    </ul>
                </div>

                <div className='box-info'>
                    <h2>About Us</h2>
                    <ul>
                        <li>
                            <Link to="/frontend-audition">Home</Link>
                        </li>
                        <li>
                            <Link to="/frontend-audition/Description">Description</Link>
                        </li>
                        <li>
                            <Link to="/frontend-audition/About">About</Link>
                        </li>
                    </ul>
                </div>

                <div className='box-info'>
                    <h2>Fotos</h2>
                    <ul>
                        <li>
                            <Link to="/frontend-audition/photos">Fotos</Link>
                        </li>
                    </ul>    
                </div>

            </div>
        </Content>
    )
}