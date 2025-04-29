
import Header from "@/components/Header";
import Footer from "@/components/Footer";

const ServicesPage = () => {
  const services = [
    {
      id: 1,
      title: "Бурение нефтяных и газовых скважин",
      description: "Осуществляем полный цикл буровых работ с использованием современного оборудования и передовых технологий.",
      image: "https://source.unsplash.com/random/800x600?drilling,oil",
      details: [
        "Разведочное бурение",
        "Эксплуатационное бурение",
        "Бурение боковых стволов",
        "Горизонтальное бурение"
      ]
    },
    {
      id: 2,
      title: "Капитальный ремонт скважин",
      description: "Проводим работы по восстановлению технических характеристик скважин, улучшению их производительности.",
      image: "https://source.unsplash.com/random/800x600?maintenance,industrial",
      details: [
        "Ремонтно-изоляционные работы",
        "Устранение аварий в скважинах",
        "Зарезка боковых стволов",
        "Ремонт эксплуатационной колонны"
      ]
    },
    {
      id: 3,
      title: "Цементирование скважин",
      description: "Выполняем качественное цементирование скважин любой сложности, обеспечивая надежность и долговечность конструкции.",
      image: "https://source.unsplash.com/random/800x600?concrete,construction",
      details: [
        "Цементирование обсадных колонн",
        "Установка цементных мостов",
        "Ликвидационное цементирование",
        "Контроль качества цементирования"
      ]
    },
    {
      id: 4,
      title: "Инженерное сопровождение",
      description: "Предоставляем услуги по инженерному сопровождению буровых работ с применением новейших методик и технологий.",
      image: "https://source.unsplash.com/random/800x600?engineering,technology",
      details: [
        "Геологическое сопровождение",
        "Технологический контроль",
        "Супервайзинг буровых работ",
        "Оптимизация режимов бурения"
      ]
    }
  ];

  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-grow container mx-auto px-4 py-12">
        <h1 className="text-3xl font-bold mb-8">Наши услуги</h1>
        
        <div className="space-y-12">
          {services.map((service) => (
            <div key={service.id} className="bg-white rounded-lg shadow-md overflow-hidden">
              <div className="md:flex">
                <div className="md:w-1/3">
                  <img 
                    src={service.image} 
                    alt={service.title} 
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="md:w-2/3 p-6">
                  <h2 className="text-2xl font-semibold mb-4">{service.title}</h2>
                  <p className="mb-4">{service.description}</p>
                  <h3 className="font-semibold mb-2">Виды работ:</h3>
                  <ul className="list-disc pl-5">
                    {service.details.map((detail, index) => (
                      <li key={index}>{detail}</li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          ))}
        </div>
        
        <div className="mt-12 bg-blue-50 rounded-lg p-6 shadow-sm">
          <h2 className="text-2xl font-semibold mb-4">Готовы начать проект?</h2>
          <p className="mb-4">
            Наша команда специалистов готова предложить оптимальное решение для ваших задач.
            Свяжитесь с нами для консультации и расчета стоимости работ.
          </p>
          <button className="bg-blue-600 hover:bg-blue-700 text-white font-semibold py-2 px-6 rounded-md transition duration-300">
            Связаться с нами
          </button>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default ServicesPage;
