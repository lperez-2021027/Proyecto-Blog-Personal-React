import '../assets/css/theme-8.css'
import { txtQuinto } from '../assets/js/text'
import { Footer } from './Footer'
import { Item } from './Item'

export const Quinto = () => {

    return (
        <>
            <div className="main-wrapper">

                <section className="cta-section theme-bg-light py-5">
                    <div className="container text-center single-col-max-width">
                        <h1 className="heading">Proyectos de quinto año</h1>
                        <div className="intro ">
                            Aquí encontrarás proyectos que fueron desarrollados en el año 2022
                        </div>
                        <div className="single-form-max-width pt-3 mx-auto">
                        </div>
                    </div>
                </section>


                <section className="blog-list px-3 py-5 p-md-5">
                    <div className="container single-col-max-width">

                        <Item
                            title="Proyecto..."
                            img="https://cdn-icons-png.flaticon.com/512/826/826981.png"
                            text={txtQuinto.proyecto1}
                            URL="/quinto"
                        ></Item>

                    </div>
                </section>

                <Footer></Footer>

            </div>
        </>
    )

}