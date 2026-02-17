import { useEffect, useRef, useState } from 'react';
import { ArrowUpRight } from 'lucide-react';

const solutions = [
  {
    title: '智慧零售',
    tags: ['新零售', 'O2O', '会员管理'],
    description: '线上线下融合，数据驱动经营决策，打造全渠道零售体验',
    image: '/solution-retail.jpg',
  },
  {
    title: '智慧文旅',
    tags: ['在线预约', '票务系统', '导览服务'],
    description: '文旅数字化体验，助力产业升级，提升游客满意度',
    image: '/solution-tourism.jpg',
  },
  {
    title: '智慧社区',
    tags: ['物业管理', '家政服务', '停车缴费'],
    description: '一站式社区服务，构建智慧生活圈，提升居民生活品质',
    image: '/solution-community.jpg',
  },
  {
    title: '智慧餐饮',
    tags: ['扫码点餐', '外卖配送', '会员系统'],
    description: '餐饮数字化运营，提升服务效率，优化顾客用餐体验',
    image: '/solution-restaurant.jpg',
  },
  {
    title: '智慧医疗',
    tags: ['在线问诊', '预约挂号', '电子处方'],
    description: '数字化医疗服务，提升就医体验，优化医疗资源配置',
    image: '/solution-medical.jpg',
  },
  {
    title: '智慧汽配',
    tags: ['保险报价', '配件管理', '维修预约'],
    description: '汽配行业数字化，提升服务品质，优化供应链管理',
    image: '/solution-automotive.jpg',
  },
];

export default function Solutions() {
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
      { threshold: 0.1 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <section
      id="solutions"
      ref={sectionRef}
      className="relative py-20 md:py-32 bg-gradient-to-b from-black via-[#0a0a0a] to-black"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className={`text-center mb-16 transition-all duration-700 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          <span className="inline-block px-4 py-1.5 rounded-full bg-blue-500/10 text-blue-400 text-sm font-medium mb-4">
            行业方案
          </span>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-4">
            行业解决方案
          </h2>
          <p className="text-lg text-white/60 max-w-2xl mx-auto">
            深耕垂直领域，打造专业化解决方案，助力行业数字化转型
          </p>
        </div>

        {/* Solutions Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {solutions.map((solution, index) => (
            <div
              key={solution.title}
              className={`group relative overflow-hidden rounded-2xl transition-all duration-700 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
                }`}
              style={{ transitionDelay: `${index * 100}ms` }}
            >
              {/* Background Image */}
              <div className="aspect-[16/10] overflow-hidden">
                <img
                  src={solution.image}
                  alt={solution.title}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                />
              </div>

              {/* Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-black via-black/50 to-transparent" />

              {/* Content */}
              <div className="absolute inset-0 p-6 md:p-8 flex flex-col justify-end">
                {/* Tags */}
                <div className="flex flex-wrap gap-2 mb-3">
                  {solution.tags.map((tag) => (
                    <span
                      key={tag}
                      className="px-3 py-1 text-xs text-white/90 bg-white/10 backdrop-blur-sm rounded-full"
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                {/* Title */}
                <h3 className="text-xl md:text-2xl font-semibold text-white mb-2 flex items-center gap-2">
                  {solution.title}
                  <ArrowUpRight className="w-5 h-5 opacity-0 group-hover:opacity-100 transition-opacity" />
                </h3>

                {/* Description */}
                <p className="text-white/70 text-sm md:text-base">
                  {solution.description}
                </p>
              </div>

              {/* Hover Border */}
              <div className="absolute inset-0 rounded-2xl border-2 border-purple-500/0 group-hover:border-purple-500/30 transition-colors duration-300 pointer-events-none" />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
