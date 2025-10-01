import './Search.css'

export const Search = () => {
    return (

        <section className="search">
            <div className="container">
                <div className="search-box">
                    <input id="search" type="text" autoFocus placeholder="Поиск по объявлениям" />
                    <button className="btn btn-primary search-btn">
                        <img className="search-btn__icon" src="/image/search.svg" alt="search" />
                        <span className="search-btn__text">Найти</span>
                    </button>
                </div>
            </div>
        </section>
    )
}

