import './Side.css'

export const Side = () => {
    return (
        <div class="side">
            <div class="side-item">
                <img class="side-item--img" src="/image/side-info-1.svg"
                    alt="side-info" />
                <h5 class="side-item--title">Доставка</h5>
                <p class="side-item--text">Проверка при получении и возможность
                    бесплатно вернуть товар</p>
            </div>

            <div class="side-item">
                <img class="side-item--img" src="/image/side-info-2.svg"
                    alt="side-info" />
                <h5 class="side-item--title">Автотека</h5>
                <p class="side-item--text">Отчёт с историей авто: пробег, владельцы,
                    сведения о залоге, ДТП и ремонтах</p>
            </div>

            <div class="side-item">
                <img class="side-item--img" src="/image/side-info-3.svg"
                    alt="side-info" />
                <h5 class="side-item--title">Онлайн-бронирование жилья</h5>
                <p class="side-item--text">Посуточная аренда квартир и домов: большой
                    выбор вариантов для поездок по России</p>
            </div>
        </div>

    )
}