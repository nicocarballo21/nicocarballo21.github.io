import { Icon } from "@iconify/react";
import { useTranslation } from "react-i18next";

const AboutMe = () => {
  const { t } = useTranslation();

  return (
    <section className="py-5 dark:bg-[#7f7f7f] md:py-10">
      <h2 className="text-center text-xl font-medium uppercase tracking-widest ">
        {t("about_me.title")}
      </h2>

      <div className="flex flex-col items-center justify-center gap-10 pb-10 md:flex-row md:pb-0">
        <div className="md:w-2/3">
          <div className="rounded-sm border border-[rgba(0,0,0,.125)]">
            <div className="flex items-center gap-3 border-b border-[rgba(0,0,0,.125)] bg-[rgba(0,0,0,0.03)] px-3 py-2">
              <Icon icon="emojione:red-circle" width={10} />
              <Icon icon="twemoji:yellow-circle" width={10} />
              <Icon icon="twemoji:green-circle" width={10} />
            </div>
            <div
              className="p-3 text-justify"
              style={{
                height: "auto",
                fontSize: "132%",
                lineHeight: "200%",
              }}
            >
              <br />
              <span className="text-xl font-medium dark:text-white">
                {t("about_me.greeting")} :){" "}
              </span>
              <br />
              <p className="text-lg font-medium dark:text-white">
                {t("about_me.content")}
              </p>
              <br />
              <p className="text-lg font-medium dark:text-white">
                {t("about_me.place")}
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutMe;
