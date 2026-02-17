import { useEffect, useRef, useState } from 'react';
import { Phone, Mail, MapPin, Target, Eye } from 'lucide-react';

const contactInfo = [
  {
    icon: Phone,
    label: '联系电话',
    value: '19801350795',
  },
  {
    icon: Mail,
    label: '电子邮箱',
    value: 'contact@11dm.cn',
  },
  {
    icon: MapPin,
    label: '公司地址',
    value: '北京市海淀区中关村科技园',
  },
];

export default function About() {
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
      id="about"
      ref={sectionRef}
      className="relative py-20 md:py-32 bg-black"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20">
          {/* Left Content */}
          <div className={`transition-all duration-700 ${isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-10'}`}>
            <span className="inline-block px-4 py-1.5 rounded-full bg-purple-500/10 text-purple-400 text-sm font-medium mb-4">
              关于我们
            </span>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-6">
              关于
              <span className="text-gradient">十一维空间</span>
            </h2>

            <div className="space-y-4 text-white/70 leading-relaxed">
              <p>
                北京十一维空间科技有限公司是一家专注于企业数字化转型的科技公司。我们致力于通过AI人工智能、云计算、大数据等前沿技术，为企业提供全方位的数字化解决方案。
              </p>
              <p>
                公司深耕技术领域10年，拥有20多位来自一线互联网企业的资深工程师，已成功服务超过500家企业客户，覆盖零售、医疗、教育、金融等多个行业领域。
              </p>
            </div>

            {/* Vision & Mission */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mt-8">
              <div className="glass-card p-5">
                <div className="flex items-center gap-3 mb-3">
                  <div className="w-10 h-10 rounded-lg bg-gradient-primary flex items-center justify-center">
                    <Eye className="w-5 h-5 text-white" />
                  </div>
                  <h4 className="text-white font-semibold">企业愿景</h4>
                </div>
                <p className="text-white/60 text-sm">
                  成为企业数字化转型最值得信赖的合作伙伴
                </p>
              </div>

              <div className="glass-card p-5">
                <div className="flex items-center gap-3 mb-3">
                  <div className="w-10 h-10 rounded-lg bg-gradient-primary flex items-center justify-center">
                    <Target className="w-5 h-5 text-white" />
                  </div>
                  <h4 className="text-white font-semibold">企业使命</h4>
                </div>
                <p className="text-white/60 text-sm">
                  用技术创新驱动商业变革，助力企业实现跨越式增长
                </p>
              </div>
            </div>
          </div>

          {/* Right Contact Info */}
          <div className={`transition-all duration-700 delay-300 ${isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-10'}`}>
            <div className="glass-card p-8 h-full">
              <h3 className="text-2xl font-semibold text-white mb-6">
                联系我们
              </h3>

              <div className="space-y-6">
                {contactInfo.map((item, index) => (
                  <div
                    key={item.label}
                    className={`flex items-start gap-4 transition-all duration-500 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-5'
                      }`}
                    style={{ transitionDelay: `${(index + 3) * 100}ms` }}
                  >
                    <div className="w-12 h-12 rounded-xl bg-white/5 flex items-center justify-center flex-shrink-0">
                      <item.icon className="w-5 h-5 text-purple-400" />
                    </div>
                    <div>
                      <div className="text-white/50 text-sm mb-1">{item.label}</div>
                      <div className="text-white font-medium">{item.value}</div>
                    </div>
                  </div>
                ))}
              </div>

              {/* Contact Form CTA */}
              <div className="mt-8 pt-6 border-t border-white/10">
                <p className="text-white/60 text-sm mb-4">
                  有项目需求？立即联系我们，获取专属解决方案
                </p>
                <button
                  onClick={() => alert('请联系：19801350795 或发送邮件至 contact@11dm.cn')}
                  className="w-full bg-gradient-primary text-white px-6 py-4 rounded-xl font-medium hover:opacity-90 transition-opacity"
                >
                  免费咨询
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
