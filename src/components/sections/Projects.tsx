import { t } from "i18next";

const Projects = () => {
  return (
    <section className="bg-yellow px-3 py-5 dark:bg-[#494949] md:px-0 md:py-10">
      <h2 className="py-10 text-center text-xl font-medium uppercase tracking-widest text-black">
        {t("projects.title")}
      </h2>
      <div className="flex flex-wrap justify-center gap-10"></div>
    </section>
  );
};

export default Projects;
