import { Footer } from "../components/Footer/Footer"
import { Side } from "../components/Side/Side"
import { useOutletContext, useParams } from "react-router-dom"

export const Product = () => {
    const { products } = useOutletContext()
    const { id } = useParams();
    const findProduct = products.find((p) => p.id === +id)

    return (
        <section className="content">
            <div className="container">
                <div className="content-box">
                    {findProduct ?
                        <div className="content-product">
                            <div className="content-product__left">
                                <h2 className="content-product__title">{findProduct.title}</h2>

                                <img className="content-product__img" src={findProduct.img} alt="product-img" />
                                <p className="content-product__text">{findProduct.text}</p>
                            </div>
                            <div className="content-product__right">
                                <h2 className="content-product__price">{findProduct.price}</h2>
                                <button className="btn btn-primary btn-large">Показать телефон</button>
                            </div>
                        </div>
                        :
                        <h2>Такого товара не существует!</h2>
                    }


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
    )
}