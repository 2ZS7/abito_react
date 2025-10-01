import { useRouteError } from "react-router-dom";
import { Header } from "./components/Header/Header"
import { Link } from "react-router-dom";

export default function ErrorPage() {
    const error = useRouteError();
    console.error(error);

    return (
        <>
            <Header />
            <div className="error-page">
                <h1>Oops!</h1>
                <p>Sorry, an unexpected error has occurred.</p>
                <p>
                    <i>{error.statusText || error.message}</i>
                </p>
                <img className="error-img" src="/image/404.png" alt="error-logo" />
                <Link to={`/`} className="home-back">
                    <button className="btn btn-primary">Вернуться на главную страницу</button>
                </Link>

            </div>
        </>
    );
}
