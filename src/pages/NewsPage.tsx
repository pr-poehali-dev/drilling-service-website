
import Header from "@/components/Header";
import Footer from "@/components/Footer";

const NewsPage = () => {
  const news = [
    {
      id: 1,
      title: "Завершение крупного проекта по бурению в Западной Сибири",
      date: "25 апреля 2025",
      summary: "Компания ООО \"Бурение Сервис\" успешно завершила масштабный проект по бурению эксплуатационных скважин на месторождении в Западной Сибири.",
      content: "Наша компания успешно завершила масштабный проект по бурению 12 эксплуатационных скважин на Приобском месторождении. Работы были выполнены в установленные сроки с соблюдением всех технологических требований и стандартов безопасности. Применение инновационных технологий позволило значительно сократить время бурения и повысить эффективность работ.",
      image: "https://source.unsplash.com/random/800x600?drilling,oil,1"
    },
    {
      id: 2,
      title: "Внедрение новой технологии горизонтального бурения",
      date: "18 марта 2025",
      summary: "ООО \"Бурение Сервис\" внедрило новую технологию горизонтального бурения, повышающую эффективность добычи нефти.",
      content: "Наша компания успешно внедрила новейшую технологию горизонтального бурения с многостадийным гидроразрывом пласта. Данная технология позволяет значительно увеличить площадь контакта скважины с продуктивным пластом, что приводит к повышению дебита скважины на 30-40%. Первые испытания технологии были проведены на месторождениях Волго-Уральского региона и показали отличные результаты.",
      image: "https://source.unsplash.com/random/800x600?technology,drilling,2"
    },
    {
      id: 3,
      title: "Участие в международной выставке нефтегазового оборудования",
      date: "5 февраля 2025",
      summary: "Представители ООО \"Бурение Сервис\" приняли участие в международной выставке нефтегазового оборудования и технологий в Москве.",
      content: "Делегация нашей компании приняла активное участие в международной выставке \"Нефть и Газ 2025\", проходившей в Москве. На выставке были представлены последние разработки и достижения компании в области бурения нефтяных и газовых скважин. Наш стенд вызвал большой интерес у посетителей, были проведены переговоры с потенциальными партнерами и заказчиками, достигнуты предварительные договоренности о сотрудничестве.",
      image: "https://source.unsplash.com/random/800x600?exhibition,industry,3"
    },
    {
      id: 4,
      title: "Компания получила сертификат ISO 14001",
      date: "20 января 2025",
      summary: "ООО \"Бурение Сервис\" успешно прошло сертификацию системы экологического менеджмента по стандарту ISO 14001.",
      content: "Мы рады сообщить, что наша компания успешно прошла сертификацию системы экологического менеджмента по международному стандарту ISO 14001. Получение данного сертификата подтверждает соответствие экологической политики компании международным требованиям и демонстрирует нашу приверженность принципам устойчивого развития и бережного отношения к окружающей среде. Сертификация проводилась независимым аудитором и включала комплексную проверку всех производственных процессов компании.",
      image: "https://source.unsplash.com/random/800x600?certificate,environment,4"
    }
  ];

  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-grow container mx-auto px-4 py-12">
        <h1 className="text-3xl font-bold mb-8">Новости и статьи</h1>
        
        <div className="grid md:grid-cols-2 gap-8">
          {news.map((item) => (
            <div key={item.id} className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition duration-300">
              <div className="h-48 overflow-hidden">
                <img 
                  src={item.image} 
                  alt={item.title} 
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="p-6">
                <span className="text-sm text-gray-500">{item.date}</span>
                <h2 className="text-xl font-semibold mt-2 mb-3">{item.title}</h2>
                <p className="mb-4">{item.summary}</p>
                <div className="text-blue-600 hover:text-blue-800 cursor-pointer">
                  Читать далее
                </div>
              </div>
            </div>
          ))}
        </div>
        
        <div className="mt-12">
          <h2 className="text-2xl font-semibold mb-6">Полезные статьи</h2>
          <div className="grid md:grid-cols-3 gap-6">
            {[
              "Современные технологии бурения нефтяных скважин",
              "Экологические аспекты нефтедобычи",
              "Инновации в отрасли бурения - что ждет нас в будущем"
            ].map((title, index) => (
              <div key={index} className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition duration-300">
                <div className="h-40 bg-gray-200">
                  <img 
                    src={`https://source.unsplash.com/random/300x200?drilling,article,${index}`} 
                    alt={title} 
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="p-4">
                  <h3 className="font-semibold mb-2">{title}</h3>
                  <p className="text-sm text-gray-600 mb-3">
                    Обзор актуальных тенденций и технологий в современной нефтегазовой отрасли.
                  </p>
                  <div className="text-blue-600 hover:text-blue-800 text-sm cursor-pointer">
                    Читать статью
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default NewsPage;
