import { Icon } from "@iconify/react";
import { useTranslation } from "react-i18next";

const AboutMe = () => {
  const { t } = useTranslation();

  return (
    <section className="py-10 md:py-10" id="about-me">
      <h2 className="mb-10 text-center text-2xl font-medium uppercase tracking-widest">
        {t("about_me.title")}
      </h2>

      <div className="flex flex-col items-center justify-center gap-10 px-4 md:flex-row md:pb-0">
        <div className="md:w-2/3">
          <div className="rounded-sm border border-[rgba(0,0,0,.125)]">
            <div className="flex items-center gap-3 border-b border-[rgba(0,0,0,.125)] bg-[rgba(0,0,0,0.1)] px-4 py-2">
              <Icon icon="emojione:red-circle" width={10} />
              <Icon icon="twemoji:yellow-circle" width={10} />
              <Icon icon="twemoji:green-circle" width={10} />
            </div>
            <div
              className="p-4 text-justify"
              style={{
                height: "auto",
                fontSize: "132%",
                lineHeight: "200%",
              }}
            >
              <br />
              <span className="text-xl font-medium">
                {t("about_me.greeting")} :){" "}
              </span>
              <br />
              <p className="text-lg font-medium">{t("about_me.content")}</p>
              <br />
              <p className="text-lg font-medium">{t("about_me.place")}</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutMe;
