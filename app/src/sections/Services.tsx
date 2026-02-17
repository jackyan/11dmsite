import { useEffect, useRef, useState } from 'react';
import { Brain, Building2, Smartphone, ShoppingCart, Cpu, Users } from 'lucide-react';

const services = [
  {
    icon: Brain,
    title: 'AI人工智能开发',
    description: '智能聊天系统、AI绘画创作、大模型知识库训练、智能客服机器人，为企业打造专属AI能力',
    features: ['智能聊天', 'AI绘画', '知识库训练', '智能客服'],
  },
  {
    icon: Building2,
    title: '企业信息化系统',
    description: 'ERP、MES、RPA、OA、CRM等管理系统定制开发，打通数据壁垒，提升运营效率',
    features: ['ERP系统', 'OA办公', 'CRM管理', 'RPA自动化'],
  },
  {
    icon: Smartphone,
    title: '移动应用开发',
    description: 'iOS/Android原生开发、跨平台解决方案、小程序、H5、公众号全端覆盖',
    features: ['APP开发', '小程序', 'H5应用', '公众号'],
  },
  {
    icon: ShoppingCart,
    title: '电商平台搭建',
    description: '跨境电商、社交电商、直播电商、多店铺管理系统，助力企业数字化转型',
    features: ['跨境电商', '社交电商', '直播电商', '多店铺管理'],
  },
  {
    icon: Cpu,
    title: '物联网解决方案',
    description: '智能硬件对接、IoT平台搭建、数据采集与分析，实现万物互联',
    features: ['硬件对接', 'IoT平台', '数据采集', '智能分析'],
  },
  {
    icon: Users,
    title: '企业研发中心',
    description: '企业研发中心外包、技术团队孵化、人才培训，构建企业技术核心竞争力',
    features: ['研发中心', '团队孵化', '人才培训', '技术咨询'],
  },
];

export default function Services() {
  const sectionRef = useRef<HTMLElement>(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0.2 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <section
      id="services"
      ref={sectionRef}
      className="relative py-20 md:py-32 bg-black"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className={`text-center mb-16 transition-all duration-700 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          <span className="inline-block px-4 py-1.5 rounded-full bg-purple-500/10 text-purple-400 text-sm font-medium mb-4">
            我们的服务
          </span>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-4">
            核心服务
          </h2>
          <p className="text-lg text-white/60 max-w-2xl mx-auto">
            全方位技术能力，满足企业多元需求，助力数字化转型
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service, index) => (
            <div
              key={service.title}
              className={`group glass-card p-6 md:p-8 hover-lift transition-all duration-500 ${
                isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
              }`}
              style={{ transitionDelay: `${index * 100}ms` }}
            >
              {/* Icon */}
              <div className="w-14 h-14 rounded-xl bg-gradient-primary flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                <service.icon className="w-7 h-7 text-white" />
              </div>

              {/* Title */}
              <h3 className="text-xl font-semibold text-white mb-3">
                {service.title}
              </h3>

              {/* Description */}
              <p className="text-white/60 text-sm leading-relaxed mb-5">
                {service.description}
              </p>

              {/* Features */}
              <div className="flex flex-wrap gap-2">
                {service.features.map((feature) => (
                  <span
                    key={feature}
                    className="px-3 py-1 text-xs text-white/70 bg-white/5 rounded-full border border-white/10"
                  >
                    {feature}
                  </span>
                ))}
              </div>

              {/* Hover Border Effect */}
              <div className="absolute inset-0 rounded-2xl border border-purple-500/0 group-hover:border-purple-500/30 transition-colors duration-300 pointer-events-none" />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
