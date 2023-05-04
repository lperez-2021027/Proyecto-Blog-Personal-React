import { Link } from "react-router-dom";

export const Default = () => {

    const centrar = {
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        height: "100vh"
    }

    return (
        <>
            <div className="main-wrapper" style={centrar}>
                <h1>400 not found page</h1>
                <Link to="/" className="no-text-decoration nav-link px-5 fs-3">
                    <i className="fas fa-home fa-fw me-2"></i>
                </Link>
            </div>
        </>
    );

}
