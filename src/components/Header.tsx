import clsx from "clsx";
import { useTranslation } from "react-i18next";
import { Icon } from "@iconify/react";
import { TypeAnimation } from "react-type-animation";

const Header = () => {
  const { t, i18n } = useTranslation();

  return (
    <>
      <header className="relative h-screen w-[100%] bg-yellow">
        <div className="absolute left-[100%] top-5 flex -translate-x-full items-center gap-10 pr-10">
          <div className="flex justify-center gap-5 bg-yellow">
            <Icon
              className={clsx(
                "h-full cursor-pointer text-[50px] text-gray-dark",
                i18n.language === "en" && "brightness-50",
              )}
              icon="twemoji-flag-for-flag-united-kingdom"
              onClick={() => i18n.changeLanguage("en")}
            />
            <Icon
              className={clsx(
                "h-full cursor-pointer text-[50px] text-gray-dark",
                i18n.language === "es" && "brightness-50",
              )}
              icon="twemoji-flag-for-flag-argentina"
              onClick={() => i18n.changeLanguage("es")}
            />
          </div>
        </div>

        <div className="flex h-[90%] flex-col items-center justify-center gap-5">
          <div>
            <Icon
              className="text-gray-dark"
              icon="la:laptop-code"
              style={{
                height: "100%",
                fontSize: 300,
              }}
            />
          </div>

          <h1 className="text-gray-darkk text-4xl font-bold">
            {t("basic_info.name")}
          </h1>

          <TypeAnimation
            sequence={t("basic_info.titles", { returnObjects: true }).flatMap(
              (title: string) => [title, 1000],
            )}
            wrapper="span"
            speed={50}
            className="text-regular text-2xl text-gray-dark"
            repeat={Infinity}
          />
          <div className="flex justify-center gap-5">
            {t("basic_info.socials", { returnObjects: true }).map((social) => (
              <a
                key={social.icon}
                href={social.url}
                target="_blank"
                className="transition-all hover:scale-125"
              >
                <Icon icon={social.icon} width="45px" />
              </a>
            ))}
            <button
              className="rounded-3xl border p-4 transition-all hover:bg-gray-light "
              onClick={() => {
                window.open(
                  "https://drive.google.com/file/d/1cts9CjH3b4gQyI4pqWgBA5CUtfxAMvgS/view?usp=drive_link",
                  "_blank",
                );
              }}
            >
              {t("about_me.cv")}
            </button>
          </div>
        </div>

        <div className="flex w-full items-center justify-center">
          <button
            onClick={() => {
              document
                .getElementById("about-me")
                ?.scrollIntoView({ behavior: "smooth" });
            }}
            className="flex  animate-bounce items-center justify-center rounded-full p-2 transition-all hover:bg-gray-light"
          >
            <Icon className="h-14 w-14 " icon="formkit:arrowdown" />
          </button>
        </div>
      </header>
    </>
  );
};

export default Header;
