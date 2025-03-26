import React from 'react';
import { Carousel } from 'react-bootstrap';
import '../App.css'

const Home = () => {
    return (
        <>
            <div className="">
                <Carousel>
                    <Carousel.Item>
                        <img src="images2/slide1.jpg" class="d-block w-100" alt="" />
                    </Carousel.Item>
                    <Carousel.Item>
                        <img src="images2/slide2.jpg" class="d-block w-100" alt="..." />
                    </Carousel.Item>
                    <Carousel.Item>
                        <img src="images2/slide3.jpg" class="d-block w-100" alt="..." />
                    </Carousel.Item>
                </Carousel>

                <div className='menu'>
                    <ul>
                        <li>
                            <img src='/images2/menu-01.jpg' className='rounded-circle'></img>
                        </li>
                        <li>
                            <img src='/images2/menu-02.jpg' className='rounded-circle'></img>
                        </li>
                        <li>
                            <img src='/images2/menu-03.jpg' className='rounded-circle'></img>
                        </li>
                        <li>
                            <img src='/images2/menu-04.jpg' className='rounded-circle'></img>
                        </li>
                        <li>
                            <img src='/images2/menu-05.jpg' className='rounded-circle'></img>
                        </li>
                        <li>
                            <img src='/images2/menu-06.jpg' className='rounded-circle'></img>
                        </li>
                        <li>
                            <img src='/images2/menu-07.jpg' className='rounded-circle'></img>
                        </li>
                        <li>
                            <img src='/images2/menu-08.jpg' className='rounded-circle'></img>
                        </li>
                    </ul>
                </div>

                <h1 className='mt-3' style={{ color: "red", textAlign: 'start' }}>This is Home Page</h1>
            </div>
        </>
    )
}

export default Home;
