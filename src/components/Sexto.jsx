import '../assets/css/theme-8.css'
import { txtSexto } from '../assets/js/text'
import { Footer } from './Footer'
import { Item } from './Item'

export const Sexto = () => {

    return (
        <>
            <div className="main-wrapper">

                <section className="cta-section theme-bg-light py-5">
                    <div className="container text-center single-col-max-width">
                        <h1 className="heading">Proyectos de sexto año</h1>
                        <div className="intro ">
                            Aquí encontrarás proyectos que he desarrollado en el presente año 2023
                        </div>
                        <div className="single-form-max-width pt-3 mx-auto">
                        </div>
                    </div>
                </section>


                <section className="blog-list px-3 py-5 p-md-5">
                    <div className="container single-col-max-width">

                        <Item
                            title="Proyecto..."
                            img="https://images.vexels.com/media/users/3/136638/isolated/preview/8794edc043ac61418c90043b1ed63f2b-purple-flower-icon.png"
                            text={txtSexto.proyecto1}
                            URL="/sexto"
                        ></Item>

                    </div>
                </section>

                <Footer></Footer>

            </div>
        </>
    )

}