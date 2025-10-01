import './Side.css'

export const Side = () => {
    return (
        <div className="side">
            <div className="side-item">
                <img className="side-item--img" src="/image/side-info-1.svg"
                    alt="side-info" />
                <h5 className="side-item--title">Доставка</h5>
                <p className="side-item--text">Проверка при получении и возможность
                    бесплатно вернуть товар</p>
            </div>

            <div className="side-item">
                <img className="side-item--img" src="/image/side-info-2.svg"
                    alt="side-info" />
                <h5 className="side-item--title">Автотека</h5>
                <p className="side-item--text">Отчёт с историей авто: пробег, владельцы,
                    сведения о залоге, ДТП и ремонтах</p>
            </div>

            <div className="side-item">
                <img className="side-item--img" src="/image/side-info-3.svg"
                    alt="side-info" />
                <h5 className="side-item--title">Онлайн-бронирование жилья</h5>
                <p className="side-item--text">Посуточная аренда квартир и домов: большой
                    выбор вариантов для поездок по России</p>
            </div>
        </div>

    )
}