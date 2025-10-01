import './Footer.css'
import { Link } from 'react-router'

export const Footer = () => {
    return (
        <div className="footer">
            <p className="footer--item">
                © ООО «Абито», 2011–2025
            </p>
            <Link to={`#!`} className="footer--item">
                Политика конфиденциальности
            </Link>
            <Link to={`#!`} className="footer--item">
                Обработка данных
            </Link>
        </div>
    )
}