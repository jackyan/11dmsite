import { useEffect, useRef, useState } from 'react';
import { CheckCircle2 } from 'lucide-react';

const advantages = [
  {
    title: '10+年技术沉淀',
    description: '深耕软件开发领域，积累了丰富的行业经验',
  },
  {
    title: '20+资深工程师',
    description: '核心技术团队均来自一线互联网企业',
  },
  {
    title: '500+成功案例',
    description: '服务覆盖零售、医疗、教育、金融等多个行业',
  },
  {
    title: '7×24小时响应',
    description: '专业售后团队，确保系统稳定运行',
  },
];

const stats = [
  { value: 10, suffix: '+', label: '年技术沉淀' },
  { value: 500, suffix: '+', label: '服务客户' },
  { value: 20, suffix: '+', label: '技术专家' },
  { value: 98, suffix: '%', label: '客户满意度' },
];

function AnimatedNumber({ value, suffix }: { value: number; suffix: string }) {
  const [count, setCount] = useState(0);
  const ref = useRef<HTMLSpanElement>(null);
  const [hasAnimated, setHasAnimated] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !hasAnimated) {
          setHasAnimated(true);
          const duration = 2000;
          const steps = 60;
          const increment = value / steps;
          let current = 0;
          const timer = setInterval(() => {
            current += increment;
            if (current >= value) {
              setCount(value);
              clearInterval(timer);
            } else {
              setCount(Math.floor(current));
            }
          }, duration / steps);
        }
      },
      { threshold: 0.5 }
    );

    if (ref.current) {
      observer.observe(ref.current);
    }

    return () => observer.disconnect();
  }, [value, hasAnimated]);

  return (
    <span ref={ref} className="text-gradient">
      {count}
      {suffix}
    </span>
  );
}

export default function Advantages() {
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
      id="advantages"
      ref={sectionRef}
      className="relative py-20 md:py-32 bg-black"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          {/* Left Content */}
          <div className={`transition-all duration-700 ${isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-10'}`}>
            <span className="inline-block px-4 py-1.5 rounded-full bg-purple-500/10 text-purple-400 text-sm font-medium mb-4">
              为什么选择我们
            </span>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-6">
              技术实力与
              <br />
              <span className="text-gradient">服务保障</span>
            </h2>
            <p className="text-lg text-white/60 mb-8">
              我们拥有专业的技术团队和丰富的行业经验，为您提供全方位的技术支持和服务保障，让您安心托付
            </p>

            {/* Advantages List */}
            <div className="space-y-4">
              {advantages.map((advantage, index) => (
                <div
                  key={advantage.title}
                  className={`flex items-start gap-4 transition-all duration-500 ${isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-5'
                    }`}
                  style={{ transitionDelay: `${(index + 1) * 150}ms` }}
                >
                  <CheckCircle2 className="w-6 h-6 text-purple-400 flex-shrink-0 mt-0.5" />
                  <div>
                    <h4 className="text-white font-semibold mb-1">{advantage.title}</h4>
                    <p className="text-white/60 text-sm">{advantage.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Right Stats */}
          <div className={`transition-all duration-700 delay-300 ${isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-10'}`}>
            <div className="grid grid-cols-2 gap-4">
              {stats.map((stat, index) => (
                <div
                  key={stat.label}
                  className={`glass-card p-6 md:p-8 text-center transition-all duration-500 hover:bg-white/10 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-5'
                    }`}
                  style={{ transitionDelay: `${(index + 2) * 100}ms` }}
                >
                  <div className="text-3xl md:text-4xl lg:text-5xl font-bold mb-2">
                    <AnimatedNumber value={stat.value} suffix={stat.suffix} />
                  </div>
                  <div className="text-white/60 text-sm">{stat.label}</div>
                </div>
              ))}
            </div>

            {/* Additional Info Card */}
            <div className="glass-card p-6 mt-4">
              <div className="flex items-center gap-4 mb-4">
                <div className="w-12 h-12 rounded-full bg-gradient-primary flex items-center justify-center">
                  <span className="text-white font-bold text-lg">7×24</span>
                </div>
                <div>
                  <h4 className="text-white font-semibold">全天候技术支持</h4>
                  <p className="text-white/60 text-sm">随时响应您的需求</p>
                </div>
              </div>
              <p className="text-white/50 text-sm">
                我们的技术团队全天候在线，确保您的系统稳定运行，任何问题都能得到及时响应和解决。
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
