import { Link } from "react-router-dom";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { 
  Droplet, 
  BarChart3, 
  Wrench, 
  HardHat, 
  Compass, 
  ArrowRight
} from "lucide-react";

const services = [
  {
    id: 1,
    title: "Бурение скважин",
    description: "Профессиональное бурение скважин различной глубины и назначения с использованием современного оборудования.",
    icon: <Droplet className="h-8 w-8 text-primary" />,
    link: "/services#drilling"
  },
  {
    id: 2,
    title: "Геологическое сопровождение",
    description: "Комплексный анализ геологических условий и сопровождение процесса бурения для достижения оптимальных результатов.",
    icon: <Compass className="h-8 w-8 text-primary" />,
    link: "/services#geological"
  },
  {
    id: 3,
    title: "Техническое обслуживание",
    description: "Профилактика, диагностика и ремонт бурового оборудования для обеспечения его безотказной работы.",
    icon: <Wrench className="h-8 w-8 text-primary" />,
    link: "/services#maintenance"
  }
];

const ServicesList = () => {
  return (
    <section className="py-16 bg-secondary">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mb-12 text-center">
          <h2 className="mb-4 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
            Наши услуги
          </h2>
          <p className="mx-auto max-w-3xl text-lg text-gray-600">
            Мы предлагаем полный комплекс услуг для нефтегазовой отрасли, используя 
            современное оборудование и опытных специалистов.
          </p>
        </div>

        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {services.map((service) => (
            <Card key={service.id} className="service-card overflow-hidden border border-gray-200">
              <CardHeader className="pb-4">
                <div className="mb-4">{service.icon}</div>
                <CardTitle className="text-xl">{service.title}</CardTitle>
              </CardHeader>
              <CardContent className="pb-6">
                <CardDescription className="mb-4 text-gray-600">{service.description}</CardDescription>
                <Link to={service.link}>
                  <Button variant="ghost" className="p-0 text-primary hover:text-primary/80">
                    Подробнее <ArrowRight className="ml-2 h-4 w-4" />
                  </Button>
                </Link>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="mt-12 text-center">
          <Link to="/services">
            <Button size="lg" className="bg-primary text-white hover:bg-primary/90">
              Все услуги
            </Button>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default ServicesList;
