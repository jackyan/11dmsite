import { useEffect, useRef, useState } from 'react';
import { ClipboardList, Palette, Code, Rocket, CheckCircle } from 'lucide-react';

const steps = [
  {
    icon: ClipboardList,
    number: '01',
    title: '需求调研',
    description: '深入了解业务需求，分析行业特点，制定最优解决方案',
  },
  {
    icon: Palette,
    number: '02',
    title: '方案设计',
    description: '产品原型设计、UI视觉设计、技术架构设计，确保方案可行性',
  },
  {
    icon: Code,
    number: '03',
    title: '开发实施',
    description: '敏捷开发模式，迭代交付，全程透明，确保项目质量',
  },
  {
    icon: Rocket,
    number: '04',
    title: '测试上线',
    description: '全面功能测试、性能测试、安全测试，稳定部署上线',
  },
  {
    icon: CheckCircle,
    number: '05',
    title: '运维支持',
    description: '持续运维监控，定期优化升级，提供长期技术支持',
  },
];

export default function Process() {
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
      id="process"
      ref={sectionRef}
      className="relative py-20 md:py-32 bg-[#0a0a0a]"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className={`text-center mb-16 transition-all duration-700 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          <span className="inline-block px-4 py-1.5 rounded-full bg-blue-500/10 text-blue-400 text-sm font-medium mb-4">
            工作流程
          </span>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-4">
            项目开发流程
          </h2>
          <p className="text-lg text-white/60 max-w-2xl mx-auto">
            标准化流程，确保项目高质量交付，让您的数字化转型之路更加顺畅
          </p>
        </div>

        {/* Process Steps */}
        <div className="relative">
          {/* Connection Line - Desktop */}
          <div className="hidden lg:block absolute top-24 left-0 right-0 h-0.5 bg-gradient-to-r from-purple-500/0 via-purple-500/50 to-purple-500/0" />

          {/* Steps Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-6 lg:gap-4">
            {steps.map((step, index) => (
              <div
                key={step.number}
                className={`relative transition-all duration-700 ${
                  isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
                }`}
                style={{ transitionDelay: `${index * 150}ms` }}
              >
                <div className="glass-card p-6 h-full group hover:bg-white/10 transition-colors duration-300">
                  {/* Step Number */}
                  <div className="absolute -top-4 left-6 w-8 h-8 rounded-full bg-gradient-primary flex items-center justify-center">
                    <span className="text-white text-sm font-bold">{step.number}</span>
                  </div>

                  {/* Icon */}
                  <div className="w-14 h-14 rounded-xl bg-white/5 flex items-center justify-center mb-4 mt-2 group-hover:bg-purple-500/20 transition-colors duration-300">
                    <step.icon className="w-7 h-7 text-purple-400" />
                  </div>

                  {/* Content */}
                  <h3 className="text-lg font-semibold text-white mb-2">
                    {step.title}
                  </h3>
                  <p className="text-white/60 text-sm leading-relaxed">
                    {step.description}
                  </p>
                </div>

                {/* Arrow - Mobile */}
                {index < steps.length - 1 && (
                  <div className="lg:hidden flex justify-center my-4">
                    <div className="w-0.5 h-6 bg-gradient-to-b from-purple-500/50 to-transparent" />
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>

        {/* Bottom CTA */}
        <div className={`text-center mt-16 transition-all duration-700 delay-500 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          <p className="text-white/60 mb-4">
            想了解更多关于我们的服务流程？
          </p>
          <button
            onClick={() => {
              const element = document.querySelector('#about');
              if (element) element.scrollIntoView({ behavior: 'smooth' });
            }}
            className="bg-gradient-primary text-white px-8 py-3 rounded-xl font-medium hover:opacity-90 transition-opacity"
          >
            联系我们获取详情
          </button>
        </div>
      </div>
    </section>
  );
}
