import { Header } from "../components/Header/Header"
import { Card } from "../components/Card/Card"
import { cardArray } from "../constans"
import { Footer } from "../components/Footer/Footer"
import { Search } from "../components/Search/Search"
import { Side } from "../components/Side/Side"

export const Home = () => {
    return (
        //react fragment
        <>
            <Header />
            <main>
                <Search />
                <section className="content">
                    <div className="container">
                        <div className="content-box">
                            <div className="content-main">
                                <h2 className="content-main__title">Рекомендации для вас</h2>


                                <div className="content-main__list">
                                    {
                                        cardArray.map(card => (
                                            <Card
                                                key={card.id}
                                                title={card.title}
                                                price={card.price}
                                                address={card.address}
                                                date={card.date}
                                                img={card.img}
                                            />
                                        ))
                                    }
                                </div>


                            </div>
                            <div className="content-side">
                                <h3 className="content-side__title">Сервисы и услуги</h3>
                                <div className="content-side__box">
                                    <Side />
                                    <Footer />
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
            </main>
        </ >
    )
}