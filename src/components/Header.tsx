import { useContext } from "react";
import Switch from "react-switch";
import clsx from "clsx";
import { useTranslation } from "react-i18next";
import { Icon } from "@iconify/react";
import { TypeAnimation } from "react-type-animation";
import { ThemeContext, ThemeContextInterface } from "@/contexts";

const Header = () => {
  const { darkTheme, toggleTheme } = useContext(
    ThemeContext,
  ) as ThemeContextInterface;

  const { t, i18n } = useTranslation();

  return (
    <>
      <header className="relative h-screen w-[100%] bg-yellow dark:bg-[#494949]">
        <div className="absolute left-[100%] top-5 flex -translate-x-full items-center gap-10 pr-10">
          <div className="flex justify-center gap-5 bg-yellow dark:bg-[#494949]">
            <Icon
              className={clsx(
                "h-full cursor-pointer text-[50px] text-gray-dark ",
                i18n.language === "en" && "brightness-50",
              )}
              icon="twemoji-flag-for-flag-united-kingdom"
              onClick={() => i18n.changeLanguage("en")}
            />
            <Icon
              className={clsx(
                "h-full cursor-pointer text-[50px] text-gray-dark ",
                i18n.language === "es" && "brightness-50",
              )}
              icon="twemoji-flag-for-flag-argentina"
              onClick={() => i18n.changeLanguage("es")}
            />
          </div>
          <Switch
            checked={darkTheme}
            onChange={toggleTheme}
            offColor="#baaa80"
            onColor="#353535"
            className="react-switch mx-auto"
            width={90}
            height={40}
            uncheckedIcon={
              <Icon
                className="ml-5 h-full text-end text-[25px] text-gray-dark"
                icon="twemoji:owl"
              />
            }
            checkedIcon={
              <Icon
                className="ml-5 h-full text-end text-[25px] text-gray-dark"
                icon="noto-v1:sun-with-face"
              />
            }
          />
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

          <h1 className="text-4xl font-bold text-gray-dark dark:text-white">
            {t("basic_info.name")}
          </h1>

          <TypeAnimation
            sequence={t("basic_info.titles", { returnObjects: true }).flatMap(
              (title: string) => [title, 1000],
            )}
            wrapper="span"
            speed={50}
            className="text-regular text-2xl text-gray-dark dark:text-white"
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
              className="rounded-3xl border p-2"
              onClick={() => {
                window.open(
                  "https://drive.usercontent.google.com/download?id=1_Jnbgrso0NwbgJQjpioBEcSkx61-tGY_&export=download&authuser=0&confirm=t&uuid=78316ec9-9f81-4e90-8f8f-8a73bc421657&at=APZUnTWlM-9nURsrWHqP3fXjMu7-:1701369568658",
                  "_blank",
                );
              }}
            >
              {t("about_me.cv")}
            </button>
          </div>
        </div>

        <button
          onClick={() => {
            document
              .getElementById("about-me")
              ?.scrollIntoView({ behavior: "smooth" });
          }}
          className=" flex w-full animate-bounce items-center justify-center"
        >
          <Icon className=" h-14 w-14 " icon="formkit:arrowdown" />
        </button>
      </header>
    </>
  );
};

export default Header;
