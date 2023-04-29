import { Link } from 'react-router-dom'
import '../assets/css/theme-8.css'

export const Item = (props) => {

    return (

        <>
            <div className="item mb-5">
                <div className="row g-3 g-xl-0">

                    <div className="col-sm-12 col-xl-3">
                        <img className="img-fluid post-thumb " src={props.img}
                            alt={props.title} />
                    </div>

                    <div className="col ">
                        <h3 className="title mb-1 fs-3">
                            <Link to={props.URL} className="no-text-decoration nav-link">
                                {props.title}
                            </Link>
                        </h3>
                        <div className="intro fs-5 text">
                            {props.text}
                        </div>
                        <Link to={props.URL} className="no-text-decoration nav-link text-link">
                            Visitar el proyecto &rarr;
                        </Link>
                    </div>

                </div>

            </div>
        </>

    )

}