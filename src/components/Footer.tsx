import { Icon } from "@iconify/react";
import { useTranslation } from "react-i18next";

const Footer = () => {
  const { t } = useTranslation();
  return (
    <footer className="bg-[#1f1f1f] py-5 pt-10  text-center text-white">
      <div className="flex justify-center gap-5">
        {t("basic_info.socials", { returnObjects: true }).map((social) => (
          <a
            key={social.icon}
            target="_blank"
            href={social.url}
            className="transition-all ease-in-out hover:scale-125"
          >
            <Icon icon={social.icon} width="40px" />
          </a>
        ))}
      </div>
    </footer>
  );
};

export default Footer;
