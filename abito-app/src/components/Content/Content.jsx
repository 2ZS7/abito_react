import './Content.css'

export const Content = ({ title, text, price, img }) => {
    return (
        <>
            <div class="content-product__left">
                <h2 class="content-product__title">{title} </h2>

                <img class="content-product__img" src={img} alt="product-img" />
                <p class="content-product__text">{text}</p>
            </div>
            <div class="content-product__right">
                <h2 class="content-product__price">{price} </h2>
                <button class="btn btn-primary btn-large">Показать телефон</button>
            </div>
        </>
    )
}