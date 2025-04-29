import { Link } from "react-router-dom";
import { Phone, Mail, MapPin, Clock } from "lucide-react";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-gray-900 text-gray-300">
      <div className="container mx-auto px-4 pt-12 pb-8">
        <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-4">
          {/* Company Info */}
          <div>
            <h3 className="mb-4 text-lg font-bold text-white">
              ООО "Бурение Сервис"
            </h3>
            <p className="mb-4 text-sm">
              Предоставление услуг по бурению, связанному с добычей нефти, газа и газового конденсата с 2007 года.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="mb-4 text-lg font-bold text-white">Быстрые ссылки</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <Link to="/" className="hover:text-primary">Главная</Link>
              </li>
              <li>
                <Link to="/about" className="hover:text-primary">О компании</Link>
              </li>
              <li>
                <Link to="/services" className="hover:text-primary">Услуги</Link>
              </li>
              <li>
                <Link to="/news" className="hover:text-primary">Новости</Link>
              </li>
              <li>
                <Link to="/contacts" className="hover:text-primary">Контакты</Link>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="mb-4 text-lg font-bold text-white">Контактная информация</h3>
            <ul className="space-y-3 text-sm">
              <li className="flex items-start">
                <MapPin className="mr-2 h-5 w-5 shrink-0 text-primary" />
                <span>респ. Башкортостан, г. Уфа, ул. Чебоксарская, д. 23</span>
              </li>
              <li className="flex items-center">
                <Phone className="mr-2 h-5 w-5 text-primary" />
                <span>+7 (347) 123-45-67</span>
              </li>
              <li className="flex items-center">
                <Mail className="mr-2 h-5 w-5 text-primary" />
                <span>info@burenie-service.ru</span>
              </li>
              <li className="flex items-center">
                <Clock className="mr-2 h-5 w-5 text-primary" />
                <span>Пн-Пт: 9:00 - 18:00</span>
              </li>
            </ul>
          </div>

          {/* Call to Action */}
          <div>
            <h3 className="mb-4 text-lg font-bold text-white">Остались вопросы?</h3>
            <p className="mb-4 text-sm">
              Свяжитесь с нами для получения консультации по вашему проекту.
            </p>
            <Link
              to="/contacts"
              className="inline-block rounded bg-primary px-4 py-2 text-sm font-medium text-white hover:bg-primary/90"
            >
              Отправить заявку
            </Link>
          </div>
        </div>

        <hr className="my-8 border-gray-700" />

        {/* Copyright */}
        <div className="flex flex-col items-center justify-between space-y-4 text-sm md:flex-row md:space-y-0">
          <p>© {currentYear} ООО "Бурение Сервис". Все права защищены.</p>
          <div className="flex space-x-4">
            <a href="#" className="hover:text-primary">Политика конфиденциальности</a>
            <a href="#" className="hover:text-primary">Условия использования</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
