import { Link } from 'react-router-dom'
import '../assets/css/theme-8.css'

export const Item = (props) => {

    const linkText = {
        color: "#a8549c"
    }

    const imgStyle = {
        width: "400px",
        height: "auto",
        maxWidth: "100%"
    }

    return (

        <>
            <div className="item mb-5">
                <div className="row g-3 g-xl-0">

                    <div className="col-sm-12 col-xl-3">
                        <Link to={props.URL}  >
                            <img className="img-fluid post-thumb px-4 py-1" src={props.img}
                                alt={props.title} style={imgStyle}/>
                        </Link>
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
                        <Link to={props.URL} className="no-text-decoration nav-link fs-5" style={linkText}>
                            Visitar el proyecto &rarr;
                        </Link>
                    </div>

                </div>

            </div>
        </>

    )

}