import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { ChevronRight } from "lucide-react";

const HeroSection = () => {
  return (
    <div className="relative overflow-hidden bg-gradient-to-br from-blue-900 to-blue-700 py-16 sm:py-24">
      <div className="absolute inset-0 z-0 opacity-20">
        <svg className="h-full w-full" viewBox="0 0 100 100" preserveAspectRatio="none">
          <path d="M0,0 L100,0 L100,100 L0,100 Z" fill="url(#pattern)" />
        </svg>
        <defs>
          <pattern id="pattern" width="10" height="10" patternUnits="userSpaceOnUse">
            <circle cx="5" cy="5" r="1" fill="white" />
          </pattern>
        </defs>
      </div>
      
      <div className="container relative z-10 mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid items-center gap-12 md:grid-cols-2">
          <div className="text-center md:text-left">
            <h1 className="mb-6 text-4xl font-bold tracking-tight text-white sm:text-5xl">
              Профессиональные услуги бурения для нефтегазовой отрасли
            </h1>
            <p className="mb-8 text-lg text-gray-100">
              ООО "Бурение Сервис" - ваш надежный партнер с 2007 года. Мы предоставляем полный комплекс услуг по бурению скважин любой сложности.
            </p>
            <div className="flex flex-col space-y-4 sm:flex-row sm:space-x-4 sm:space-y-0 md:justify-start">
              <Button size="lg" className="bg-white text-blue-700 hover:bg-gray-100">
                <Link to="/services" className="flex items-center">
                  Наши услуги
                  <ChevronRight className="ml-2 h-4 w-4" />
                </Link>
              </Button>
              <Button size="lg" variant="outline" className="border-white text-white hover:bg-white/10">
                <Link to="/contacts">Связаться с нами</Link>
              </Button>
            </div>
          </div>
          
          <div className="hidden animate-fade-in rounded-lg bg-white/10 p-6 backdrop-blur-sm md:block">
            <img 
              src="https://images.unsplash.com/photo-1585144860106-998d6cc0e0aa?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80" 
              alt="Буровая установка" 
              className="mx-auto h-auto max-w-full rounded-lg object-cover shadow-lg"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
