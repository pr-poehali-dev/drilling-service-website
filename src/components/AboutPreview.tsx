import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { BadgeCheck, Users, Award, Calendar } from "lucide-react";

const AboutPreview = () => {
  return (
    <section className="py-16">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid gap-12 md:grid-cols-2">
          <div>
            <img
              src="https://images.unsplash.com/photo-1565515768413-94e55a4cbb5c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1074&q=80"
              alt="Команда ООО Бурение Сервис"
              className="h-auto max-w-full rounded-lg shadow-lg"
            />
          </div>
          
          <div className="flex flex-col justify-center">
            <h2 className="mb-6 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
              О компании ООО "Бурение Сервис"
            </h2>
            
            <p className="mb-6 text-lg text-gray-600">
              Наша компания основана в 2007 году и специализируется на предоставлении 
              услуг по бурению, связанному с добычей нефти, газа и газового конденсата.
            </p>
            
            <div className="mb-8 space-y-4">
              <div className="flex items-start">
                <BadgeCheck className="mr-3 h-6 w-6 shrink-0 text-primary" />
                <div>
                  <h3 className="font-semibold">Высокое качество услуг</h3>
                  <p className="text-gray-600">Используем современное оборудование и передовые технологии</p>
                </div>
              </div>
              
              <div className="flex items-start">
                <Users className="mr-3 h-6 w-6 shrink-0 text-primary" />
                <div>
                  <h3 className="font-semibold">Опытная команда</h3>
                  <p className="text-gray-600">В нашей команде работают профессионалы с многолетним опытом</p>
                </div>
              </div>
              
              <div className="flex items-start">
                <Calendar className="mr-3 h-6 w-6 shrink-0 text-primary" />
                <div>
                  <h3 className="font-semibold">Более 15 лет на рынке</h3>
                  <p className="text-gray-600">Успешно реализовали сотни проектов различной сложности</p>
                </div>
              </div>
            </div>
            
            <Link to="/about">
              <Button className="w-fit">Узнать больше о нас</Button>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutPreview;
