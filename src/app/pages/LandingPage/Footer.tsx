import Image from "next/image";

const footerLinks = [
  {
    title: "Product",
    links: ["Popular", "Trending", "Guided", "Products"],
  },
  {
    title: "Company",
    links: ["Press", "Mission", "Strategy", "About"],
  },
  {
    title: "Info",
    links: ["Support", "Customer Service", "Get Started"],
  },
];

const socialLinks = [
  { name: "Facebook", icon: "/icons/facebook.svg" },
  { name: "Google", icon: "/icons/google.svg" },
  { name: "Twitter", icon: "/icons/twitter.svg" },
];

const FooterSection = ({
  title,
  links,
}: {
  title: string;
  links: string[];
}) => (
  <div>
    <h3 className="mb-4 font-bold text-[10px] leading-[15px] tracking-[0.15em] uppercase">
      {title}
    </h3>
    <ul className="space-y-5">
      {links.map((link) => (
        <li key={link}>
          <a
            href="#"
            className="hover:text-black transition-colors font-normal text-base leading-[30px] tracking-[0em]"
          >
            {link}
          </a>
        </li>
      ))}
    </ul>
  </div>
);

export const Footer = () => {
  return (
    <footer className="bg-[#E8EFE9] text-[#0B3B3C] pt-12 px-6 md:px-20">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row md:items-start gap-12">
        <div className="w-full md:w-1/3 flex justify-center md:justify-start">
          <Image
            src="/manual-logo.svg"
            alt="Manual logo"
            width={75}
            height={70}
            className="h-auto object-contain"
          />
        </div>

        <div className="w-full md:flex-1 grid grid-cols-2 sm:grid-cols-4 gap-8">
          {footerLinks.map((section) => (
            <FooterSection
              key={section.title}
              title={section.title}
              links={section.links}
            />
          ))}

          <div>
            <h3 className="mb-4 font-bold text-[10px] leading-[15px] tracking-[0.15em] uppercase">
              Follow Us
            </h3>
            <div className="flex space-x-5">
              {socialLinks.map(({ name, icon }) => (
                <a
                  key={name}
                  href="#"
                  aria-label={name}
                  className="w-6 h-6 flex items-center justify-center hover:opacity-80 transition-opacity"
                >
                  <div className="w-4 h-4 relative">
                    <Image
                      src={icon}
                      alt={name}
                      fill
                      className="object-contain"
                    />
                  </div>
                </a>
              ))}
            </div>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto mt-12 border-t border-[#BDCDC5] py-6 text-sm text-center">
        © {new Date().getFullYear()} Manual. All rights reserved.
      </div>
    </footer>
  );
};
