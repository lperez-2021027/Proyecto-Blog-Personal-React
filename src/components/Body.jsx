import '../assets/css/theme-8.css'
import { Footer } from './Footer'
import { Item } from './Item'
import { txt } from '../assets/js/text'

export const Body = () => {

    const txtColorblk = {
        color: "#333"
    }

    return (
        <>
            <div className="main-wrapper">

                <section className="cta-section theme-bg-light py-5">
                    <div className="container text-center single-col-max-width">
                        <h1 className="heading">Proyectos que he realizado</h1>
                        <h2>{}</h2>
                        <div className="intro ">
                            Aquí encontrarás proyectos y ejercicios de diversas tecnologías que he desarrollado a lo largo de mi carrera como estudiante de informática.
                            <br /> <br />
                            <p className='fs-4 heading' style={txtColorblk}> Y algunas palabras...</p>
                            Ha sido una gran travesía la recorrida para mí estos últimos tres años, fue una grandiosa experiencia el aprender y
                            el aquirir nuevo conocimiento en esta aventura. 
                            <br />
                            Con paciencia y dedicación todos pueden lograr cumplir sus sueños, es una lección que veo reflejada el
                            día de hoy cuando brindo un vistazo al pasado y veo el camino que he trazado; 
                            <br />
                            y cuando veo hacía el futuro, proyectando el camino que seguiré.
                        </div>
                    </div>
                </section>


                <section className="blog-list px-3 py-5 p-md-5">
                    <div className="container single-col-max-width">

                        <Item
                            title="Proyectos desarrollados en 6to. Grado"
                            img="https://images.vexels.com/media/users/3/136638/isolated/preview/8794edc043ac61418c90043b1ed63f2b-purple-flower-icon.png"
                            text={txt.proyectos_6to}
                            URL="/sexto"
                        ></Item>

                        <Item
                            title="Proyectos desarrollados en 5to. Grado"
                            img="https://cdn-icons-png.flaticon.com/512/826/826981.png"
                            text={txt.proyectos_5to}
                            URL="/quinto"
                        ></Item>

                        <Item
                            title="Proyectos desarrollados en 4to. Grado"
                            img="https://cdn-icons-png.flaticon.com/512/774/774832.png"
                            text={txt.proyectos_4to}
                            URL="/cuarto"
                        ></Item>

                    </div>
                </section>

                <Footer></Footer>

            </div>
        </>
    )

}