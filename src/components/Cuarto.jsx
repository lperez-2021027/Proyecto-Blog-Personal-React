import '../assets/css/theme-8.css'
import { txtCuarto } from '../assets/js/text'
import { Footer } from './Footer'
import { Item } from './Item'

export const Cuarto = () => {

    return (
        <>
            <div className="main-wrapper">

                <section className="cta-section theme-bg-light py-5">
                    <div className="container text-center single-col-max-width">
                        <h1 className="heading">Proyectos de cuarto año</h1>
                        <div className="intro ">
                            Aquí encontrarás proyectos que fueron desarrollados en mi primer año de la carrera, 2021
                        </div>
                        <div className="single-form-max-width pt-3 mx-auto">
                        </div>
                    </div>
                </section>


                <section className="blog-list px-3 py-5 p-md-5">
                    <div className="container single-col-max-width">

                        <Item
                            title="Desarrollo de una base de datos relacional pequeña"
                            img="https://icons.veryicon.com/png/o/system/inspur-cloud-icon/rds-mysql.png"
                            text={txtCuarto.proyecto6}
                            URL="https://github.com/lperez-2021027/Script-SQL-Biblioteca-Musical.git"
                        ></Item>

                        <Item
                            title="MySQL práctica de procedimientos almacenados"
                            img="https://icons.veryicon.com/png/o/system/inspur-cloud-icon/rds-mysql.png"
                            text={txtCuarto.proyecto5}
                            URL="https://github.com/lperez-2021027/MySQL-procedures.git"
                        ></Item>

                        <Item
                            title="Ejecicios en MySQL Workbench"
                            img="https://icons.veryicon.com/png/o/system/inspur-cloud-icon/rds-mysql.png"
                            text={txtCuarto.proyecto4}
                            URL="https://github.com/lperez-2021027/MySQL-DDL-DML.git"
                        ></Item>


                        <Item
                            title="Calculadora con interfaz en consola"
                            img="https://cdn.icon-icons.com/icons2/2415/PNG/512/java_original_wordmark_logo_icon_146459.png"
                            text={txtCuarto.proyecto3}
                            URL="https://github.com/lperez-2021027/Calculadora-Java-CLI.git"
                        ></Item>

                        <Item
                            title="Ejercicios de lógica y sintaxis en java"
                            img="https://cdn.icon-icons.com/icons2/2415/PNG/512/java_original_wordmark_logo_icon_146459.png"
                            text={txtCuarto.proyecto2}
                            URL="https://github.com/lperez-2021027/Ejercicios-java-8.git"
                        ></Item>

                        <Item
                            title="Topologías Cisco Packet Tracer"
                            img="https://hurbad.com/wp-content/uploads/2021/12/Cisco-Packet-Tracer.png"
                            text={txtCuarto.proyecto1}
                            URL="https://cetkinal-my.sharepoint.com/:f:/g/personal/lperez-2021027_kinal_edu_gt/EpC4xjpVypVJt9ivKZ2CGtwBAFgEir1t2Ix1OKkCJFdX1Q?e=akEh7g"
                        ></Item>

                    </div>
                </section>

                <Footer></Footer>

            </div>
        </>
    )

}