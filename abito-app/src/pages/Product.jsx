import { Header } from "../components/Header/Header"
import { Footer } from "../components/Footer/Footer"
import { Search } from "../components/Search/Search"
import { Content } from "../components/Content/Content"
import { contentArray } from "../constans"
import { Side } from "../components/Side/Side"

export const { Product } = () => {
    return (
        <>
            <Header />
            <main>
                <Search />
                <section class="content">
                    <div class="container">
                        <div class="content-box">
                            <div class="content-product">
                                {
                                    contentArray.pop(content => (
                                        <Content
                                            key={content.id}
                                            title={content.title}
                                            price={content.price}
                                            text={content.text}
                                            img={content.img}
                                        />
                                    ))
                                }
                            </div>

                            <div class="content-side">
                                <h3 class="content-side__title">Сервисы и услуги</h3>
                                <div class="content-side__box">
                                    <Side />
                                    <Footer />
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
            </main>


        </>
    )
}