import { Phone, Mail, MapPin } from 'lucide-react';

const footerLinks = {
  services: [
    { label: 'AI人工智能开发', href: '#services' },
    { label: '企业信息化系统', href: '#services' },
    { label: '移动应用开发', href: '#services' },
    { label: '电商平台搭建', href: '#services' },
  ],
  solutions: [
    { label: '智慧零售', href: '#solutions' },
    { label: '智慧医疗', href: '#solutions' },
    { label: '智慧社区', href: '#solutions' },
    { label: '智慧餐饮', href: '#solutions' },
  ],
  company: [
    { label: '关于我们', href: '#about' },
    { label: '技术优势', href: '#advantages' },
    { label: '项目流程', href: '#process' },
    { label: '联系我们', href: '#about' },
  ],
};

export default function Footer() {
  const scrollToSection = (href: string) => {
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <footer className="relative bg-[#0a0a0a] border-t border-white/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 md:py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8 lg:gap-12">
          {/* Company Info */}
          <div className="lg:col-span-2">
            <div className="flex items-center gap-3 mb-4">
              <img
                src="/logo.webp"
                alt="北京十一维空间科技有限公司"
                className="h-10 w-auto"
              />
              <span className="text-white font-semibold">十一维空间科技</span>
            </div>
            <p className="text-white/50 text-sm leading-relaxed mb-6 max-w-sm">
              专注企业数字化转型，提供AI人工智能、企业信息化系统、移动应用开发等全方位技术服务
            </p>

            {/* Contact Info */}
            <div className="space-y-3">
              <div className="flex items-center gap-3 text-white/50 text-sm">
                <Phone className="w-4 h-4 text-purple-400" />
                <span>19801350795</span>
              </div>
              <div className="flex items-center gap-3 text-white/50 text-sm">
                <Mail className="w-4 h-4 text-purple-400" />
                <span>contact@11dm.cn</span>
              </div>
              <div className="flex items-center gap-3 text-white/50 text-sm">
                <MapPin className="w-4 h-4 text-purple-400" />
                <span>北京市海淀区中关村科技园</span>
              </div>
            </div>
          </div>

          {/* Services Links */}
          <div>
            <h4 className="text-white font-semibold mb-4">核心服务</h4>
            <ul className="space-y-2">
              {footerLinks.services.map((link) => (
                <li key={link.label}>
                  <a
                    href={link.href}
                    onClick={(e) => {
                      e.preventDefault();
                      scrollToSection(link.href);
                    }}
                    className="text-white/50 hover:text-purple-400 text-sm transition-colors"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Solutions Links */}
          <div>
            <h4 className="text-white font-semibold mb-4">解决方案</h4>
            <ul className="space-y-2">
              {footerLinks.solutions.map((link) => (
                <li key={link.label}>
                  <a
                    href={link.href}
                    onClick={(e) => {
                      e.preventDefault();
                      scrollToSection(link.href);
                    }}
                    className="text-white/50 hover:text-purple-400 text-sm transition-colors"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Company Links */}
          <div>
            <h4 className="text-white font-semibold mb-4">关于公司</h4>
            <ul className="space-y-2">
              {footerLinks.company.map((link) => (
                <li key={link.label}>
                  <a
                    href={link.href}
                    onClick={(e) => {
                      e.preventDefault();
                      scrollToSection(link.href);
                    }}
                    className="text-white/50 hover:text-purple-400 text-sm transition-colors"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-12 pt-8 border-t border-white/10 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-white/40 text-sm">
            © 2026 北京十一维空间科技有限公司 版权所有
          </p>
          <div className="flex items-center gap-6">
            <a href="#" className="text-white/40 hover:text-white text-sm transition-colors">
              隐私政策
            </a>
            <a href="#" className="text-white/40 hover:text-white text-sm transition-colors">
              服务条款
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
