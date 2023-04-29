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
                            title="Proyecto Blog Personal desarrollado con React"
                            img="https://upload.wikimedia.org/wikipedia/commons/thumb/a/a7/React-icon.svg/2300px-React-icon.svg.png"
                            text={txtSexto.proyecto10}
                            URL="https://github.com/lperez-2021027/Proyecto-Blog-Personal-React.git"
                        ></Item>

                        <Item
                            title="Proyecto Almacenadora"
                            img="https://upload.wikimedia.org/wikipedia/commons/thumb/a/a7/React-icon.svg/2300px-React-icon.svg.png"
                            text={txtSexto.proyecto9}
                            URL="https://github.com/lperez-2021027/Proyecto-Almacenadora.git"
                        ></Item>

                        <Item
                            title="Proyecto Venta Online"
                            img="https://static-00.iconduck.com/assets.00/node-js-icon-454x512-nztofx17.png"
                            text={txtSexto.proyecto10}
                            URL="https://github.com/lperez-2021027/Venta-Online.git"
                        ></Item>
                        <Item
                            title="Proyecto Identificación de errores en gestor  de opiniones"
                            img="https://static-00.iconduck.com/assets.00/node-js-icon-454x512-nztofx17.png"
                            text={txtSexto.proyecto7}
                            URL="https://github.com/lperez-2021027/Gestor-de-opiniones.git"
                        ></Item>

                        <Item
                            title="Proyecto Control Empresas con NodeJS"
                            img="https://static-00.iconduck.com/assets.00/node-js-icon-454x512-nztofx17.png"
                            text={txtSexto.proyecto4}
                            URL="https://github.com/lperez-2021027/Control-empresas.git"
                        ></Item>

                        <Item
                            title="Proyecto Control Acádemico con NodeJS"
                            img="https://static-00.iconduck.com/assets.00/node-js-icon-454x512-nztofx17.png"
                            text={txtSexto.proyecto3}
                            URL="https://github.com/lperez-2021027/Control-estudiantes"
                        ></Item>

                        <Item
                            title="CRUD de la entidad Categoria como parte del desarrollo del proyecto final de unidad"
                            img="https://static-00.iconduck.com/assets.00/node-js-icon-454x512-nztofx17.png"
                            text={txtSexto.proyecto2}
                            URL="https://github.com/lperez-2021027/RestServer-CRUD-categoria"
                        ></Item>

                        <Item
                            title="Diseño de vista para una agenda web utilizando html y css"
                            img="https://cdn-icons-png.flaticon.com/512/2351/2351825.png"
                            text={txtSexto.proyecto1}
                            URL="https://github.com/lperez-2021027/Agenda-web"
                        ></Item>

                        <Item
                            title="Creación de página web y hosteo de la misma"
                            img="https://cdn-icons-png.flaticon.com/512/2351/2351825.png"
                            text={txtSexto.proyecto6}
                            URL="https://github.com/lperez-2021027/Laboratorio-1.git"
                        ></Item>

                        <Item
                            title="Práctia e introducción a NodeJS"
                            img="https://static-00.iconduck.com/assets.00/node-js-icon-454x512-nztofx17.png"
                            text={txtSexto.proyecto5}
                            URL="https://github.com/lperez-2021027/Servivor-de-prueba-NodeJS.git"
                        ></Item>

                    </div>
                </section>

                <Footer></Footer>

            </div>
        </>
    )

}