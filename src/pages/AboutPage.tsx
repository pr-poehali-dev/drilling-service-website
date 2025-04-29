
import Header from "@/components/Header";
import Footer from "@/components/Footer";

const AboutPage = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-grow container mx-auto px-4 py-12">
        <h1 className="text-3xl font-bold mb-8">О компании</h1>
        <div className="grid md:grid-cols-2 gap-8">
          <div>
            <h2 className="text-2xl font-semibold mb-4">История компании</h2>
            <p className="mb-4">
              ООО "Бурение Сервис" было основано в 2007 году и за это время зарекомендовало себя как надежный партнер в сфере бурения скважин для добычи нефти и газа.
            </p>
            <p className="mb-4">
              За годы работы мы реализовали множество проектов различной сложности, постоянно совершенствуя технологии и повышая качество предоставляемых услуг.
            </p>
          </div>
          <div>
            <h2 className="text-2xl font-semibold mb-4">Миссия и ценности</h2>
            <p className="mb-4">
              Наша миссия — предоставлять высококачественные услуги по бурению с использованием современных технологий и оборудования, обеспечивая безопасность работ и минимизируя воздействие на окружающую среду.
            </p>
            <h3 className="text-xl font-semibold mb-2">Наши ценности:</h3>
            <ul className="list-disc pl-5 mb-4">
              <li>Профессионализм и качество выполняемых работ</li>
              <li>Ответственность перед клиентами и партнерами</li>
              <li>Безопасность производственных процессов</li>
              <li>Забота об окружающей среде</li>
              <li>Непрерывное совершенствование и внедрение инноваций</li>
            </ul>
          </div>
        </div>
        
        <div className="mt-12">
          <h2 className="text-2xl font-semibold mb-6">Наша команда</h2>
          <div className="grid md:grid-cols-3 gap-6">
            {[1, 2, 3].map((i) => (
              <div key={i} className="bg-white rounded-lg shadow-md overflow-hidden">
                <div className="h-48 bg-gray-200">
                  <img 
                    src={`https://source.unsplash.com/random/300x200?portrait,professional,${i}`} 
                    alt="Сотрудник" 
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="p-4">
                  <h3 className="text-lg font-semibold">Иванов Иван Иванович</h3>
                  <p className="text-gray-600">Главный инженер</p>
                  <p className="mt-2 text-sm">
                    Опыт работы в сфере бурения более 15 лет. Отвечает за технические аспекты всех проектов компании.
                  </p>
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

export default AboutPage;
