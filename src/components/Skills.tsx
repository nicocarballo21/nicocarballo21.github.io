import { Icon } from "@iconify/react";
import { useTranslation } from "react-i18next";

const Skills = () => {
  const { t } = useTranslation();

  return (
    <section className="bg-[#1f1f1f] px-3 py-5 pb-20 md:px-0">
      <h2 className="py-10 text-center text-2xl font-medium uppercase tracking-widest text-white">
        {t("skills.title")}
      </h2>

      <ul className="flex flex-wrap justify-center gap-4">
        {t("skills.icons", { returnObjects: true }).map((skill) => (
          <li
            key={skill.name}
            className="flex h-[100px] w-full max-w-[150px] cursor-pointer flex-col items-center justify-center rounded-md bg-[#827f7f] p-2.5 text-white transition-all hover:scale-150 "
          >
            <Icon
              icon={skill.class}
              className="mx-auto"
              width="100%"
              height="100%"
            />
            <p className="mt-3 text-center text-sm">{skill.name}</p>
          </li>
        ))}
      </ul>
    </section>
  );
};

export default Skills;
