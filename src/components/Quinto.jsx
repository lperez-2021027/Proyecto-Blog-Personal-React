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
                            Aquí encontrarás proyectos que desarrollé en el año 2022
                        </div>
                        <div className="single-form-max-width pt-3 mx-auto">
                        </div>
                    </div>
                </section>


                <section className="blog-list px-3 py-5 p-md-5">
                    <div className="container single-col-max-width">

                        <Item
                            title="Proyecto Final"
                            img="https://ocs-consulting.be/wp-content/uploads/2018/03/java-ee-logo.png"
                            text={txtQuinto.proyecto5}
                            URL="https://github.com/lperez-2021027/Proyecto-final-2022"
                        ></Item>

                        <Item
                            title="Proyecto Control Acádemico con Java Enterprise Edition"
                            img="https://ocs-consulting.be/wp-content/uploads/2018/03/java-ee-logo.png"
                            text={txtQuinto.proyecto3}
                            URL="https://github.com/lperez-2021027/Proyecto-Control-Academico-JEE"
                        ></Item>

                        <Item
                            title="Proyecto Control Acádemico con JavaFX"
                            img="https://i0.wp.com/gluonhq.com/wp-content/uploads/2015/09/javafx_logo1.jpg?fit=404%2C375&ssl=1"
                            text={txtQuinto.proyecto4}
                            URL="https://github.com/lperez-2021027/Javafx-Proyecto-Control-Academico-IN5BM.git"
                        ></Item>

                        <Item
                            title="Proyecto calculadora JavaFx"
                            img="https://i0.wp.com/gluonhq.com/wp-content/uploads/2015/09/javafx_logo1.jpg?fit=404%2C375&ssl=1"
                            text={txtQuinto.proyecto2}
                            URL="https://github.com/lperez-2021027/Calculadora-JavaFx.git"
                        ></Item>

                        <Item
                            title="Proyecto Consultas PL/SQL en MySQL"
                            img="https://icons.veryicon.com/png/o/system/inspur-cloud-icon/rds-mysql.png"
                            text={txtQuinto.proyecto1}
                            URL="https://github.com/lperez-2021027/SQL-Consultas-PL-SQL.git"
                        ></Item>


                    </div>
                </section>

                <Footer></Footer>

            </div>
        </>
    )

}