import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
import { Icon } from "@iconify/react";
import { useTranslation } from "react-i18next";

interface BadgeProps {
  text: string;
}

const Badge = ({ text }: BadgeProps) => (
  <span className="rounded-xl bg-yellow px-[5px] py-[2px] text-sm">{text}</span>
);

const Experience = () => {
  const { t } = useTranslation();

  return (
    <section className="bg-yellow px-3 py-10 pb-20  md:px-0">
      <h2 className="pb-10 text-center text-2xl font-medium uppercase text-white">
        {t("experience.title")}
      </h2>

      <VerticalTimeline>
        {t("experience.experiences", { returnObjects: true }).map((exp) => (
          <VerticalTimelineElement
            key={exp.title}
            date={exp.years}
            iconClassName="bg-[#ffff] text-white"
            icon={<Icon icon={exp.mainTechIcon} />}
          >
            <h3 className="text-lg font-bold">{exp.company}</h3>

            <h4 className="text-md font-bold"> As: {exp.title}</h4>

            <p className="my-5 text-sm">{exp.description}</p>

            <span className="items-centers flex w-full gap-1 py-2">
              Website:
              <a
                onClick={() => window.open(exp.url, "_blank")}
                className="text-wrap text-[blue] underline"
              >
                See here
              </a>
            </span>

            <div className="mt-5 flex flex-wrap gap-2">
              {exp.technologies.map((tech) => (
                <Badge key={tech} text={tech} />
              ))}
            </div>
          </VerticalTimelineElement>
        ))}
        <VerticalTimelineElement
          iconClassName="bg-[#AE954F] text-white"
          icon={<Icon icon="eos-icons:hourglass" />}
        />
      </VerticalTimeline>
    </section>
  );
};

export default Experience;
