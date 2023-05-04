import { Link } from 'react-router-dom';
import '../assets/css/theme-8.css'
import { useState } from 'react';

export const NavBar = () => {

    const [expanded, setExpanded] = useState(false);

    const showNav = () => {
        setExpanded(!expanded);
    }

    return (
        <>
            <header className="header text-center">
                <h1 className="blog-name pt-lg-4 mb-0 list-inline">
                    {/* <p className='list-inline-item' >Jvne</p> */}
                    <a className="no-text-decoration list-inline-item" href="https://www.youtube.com/@Sewerslvt" target="_blank">                        
                        <i className="fas fa-heart"></i>
                    </a>
                </h1>

                <nav className="navbar navbar-expand-lg navbar-dark">

                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navigation"
                        aria-controls="navigation" aria-expanded={expanded} aria-label="Toggle navigation" onClick={showNav}>
                        <span className="navbar-toggler-icon"></span>
                    </button>

                    <div id="navigation" className="collapse navbar-collapse flex-column">
                        <div className="profile-section pt-lg-0">
                            <img className="profile-image mb-3 rounded-circle mx-auto"
                                src="https://i.pinimg.com/564x/8d/e8/ee/8de8eee444eec2d19350ffb9cdb44e3c.jpg" alt="image" />

                            <div className="bio mb-3">
                                <p className="text ">
                                    Hola, mi nombre es Luis Carlos :)
                                    <br /> <br />
                                    Aquí encontrarás los
                                    proyectos que he desarrollado y ejercicios en diversas tecnologías
                                    que he realizado a lo largo de mi formación como profesional
                                    en el área de la informática
                                </p>
                            </div>

                            <ul className="social-list list-inline py-3 mx-auto">
                                {/* <li className="list-inline-item"><a href="#"><i className="fab fa-twitter fa-fw"></i></a></li>
                                    <li className="list-inline-item"><a href="#"><i className="fab fa-linkedin-in fa-fw"></i></a></li>  */}
                                <li className="list-inline-item">
                                    <a href="https://github.com/lperez-2021027">
                                        <i className="fab fa-github-alt fa-fw"></i></a>
                                </li>



                                <li className="list-inline-item">
                                    <a href="https://youtu.be/dTh4cp_ypu4" target='_blank'>
                                        <i className="fas fa-heart"></i></a>
                                </li>

                                {/* <!-- <li className="list-inline-item"><a href="#"><i className="fab fa-stack-overflow fa-fw"></i></a></li>
                                    <li className="list-inline-item"><a href="#"><i className="fab fa-codepen fa-fw"></i></a></li> --> */}
                            </ul>
                            <hr />
                        </div>

                        <ul className="navbar-nav flex-column text-start">
                            <li className="nav-item">
                                <Link to="/" className="no-text-decoration nav-link">
                                    <i className="fas fa-home fa-fw me-2"></i>
                                    Mis proyectos
                                </Link>
                            </li>
                            <li className="nav-item">
                                <Link to="/sexto" className="no-text-decoration nav-link">
                                    <i className="fas fa-bookmark fa-fw me-2"></i>
                                    Proyectos de 6to.
                                </Link>
                            </li>
                            <li className="nav-item">
                                <Link to="/quinto" className="no-text-decoration nav-link">
                                    <i className="fas fa-bookmark fa-fw me-2"></i>
                                    Proyectos de 5to.
                                </Link>
                            </li>
                            <li className="nav-item">
                                <Link to="/cuarto" className="no-text-decoration nav-link">
                                    <i className="fas fa-bookmark fa-fw me-2"></i>
                                    Proyectos de 4to.
                                </Link>
                            </li>
                            {/* <li className="nav-item">
                                <a className="nav-link" href="about.html"><i className="fas fa-user fa-fw me-2"></i>Acerca de mí</a>
                            </li> */}
                        </ul>

                        <div className="my-2 my-md-3 ">
                            <a className="btn btn-primary mx-1 my-1" href="https://youtu.be/RgFaK6ZQifE" target="_blank">
                                <i className="fa-solid fa-headphones"></i>
                            </a>
                            <a className="btn btn-primary mx-1 my-1" href="https://youtu.be/wL2ylkbNVqU" target='_blank'>
                                <i className="fas fa-heart"></i>
                            </a>
                        </div>
                    </div>
                </nav>
            </header >
        </>
    );

}