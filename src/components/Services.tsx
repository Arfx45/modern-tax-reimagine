import { FileText, Building2, Calculator, TrendingUp, PieChart, FileCheck } from "lucide-react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "./ui/card";

const services = [
  {
    icon: FileText,
    title: "Personal Tax",
    description: "Comprehensive tax preparation and filing services for individuals, ensuring maximum refunds and compliance.",
    color: "text-primary",
    bgColor: "bg-primary/10",
  },
  {
    icon: Building2,
    title: "Corporate Tax",
    description: "Strategic corporate tax planning and preparation for businesses of all sizes, optimizing your tax position.",
    color: "text-secondary",
    bgColor: "bg-secondary/10",
  },
  {
    icon: Calculator,
    title: "Bookkeeping",
    description: "Professional bookkeeping services to keep your financial records accurate, organized, and up-to-date.",
    color: "text-primary",
    bgColor: "bg-primary/10",
  },
  {
    icon: TrendingUp,
    title: "Tax Planning",
    description: "Proactive tax planning strategies to minimize liabilities and maximize savings throughout the year.",
    color: "text-secondary",
    bgColor: "bg-secondary/10",
  },
  {
    icon: PieChart,
    title: "Financial Consulting",
    description: "Expert financial advice and consulting to help you make informed decisions for your business growth.",
    color: "text-primary",
    bgColor: "bg-primary/10",
  },
  {
    icon: FileCheck,
    title: "Audit Support",
    description: "Professional audit preparation and representation services to navigate tax audits with confidence.",
    color: "text-secondary",
    bgColor: "bg-secondary/10",
  },
];

const Services = () => {
  return (
    <section id="services" className="py-24 px-4 sm:px-6 lg:px-8 gradient-subtle">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16 animate-fade-in">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 text-primary text-sm font-medium mb-4">
            Our Services
          </div>
          <h2 className="text-4xl lg:text-5xl font-bold mb-4">
            Comprehensive Tax & Accounting Solutions
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            From personal tax returns to complex corporate planning, we've got you covered
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service, index) => {
            const Icon = service.icon;
            return (
              <Card
                key={service.title}
                className="border-0 shadow-elegant hover:shadow-lg transition-smooth hover:-translate-y-2 bg-card animate-fade-in-up"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <CardHeader>
                  <div className={`w-14 h-14 rounded-xl ${service.bgColor} flex items-center justify-center mb-4`}>
                    <Icon className={`w-7 h-7 ${service.color}`} />
                  </div>
                  <CardTitle className="text-xl">{service.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-base leading-relaxed">
                    {service.description}
                  </CardDescription>
                </CardContent>
              </Card>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Services;
 