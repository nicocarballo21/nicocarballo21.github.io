/* eslint-disable @typescript-eslint/no-explicit-any */
import { t } from "i18next";
import { useCallback, useEffect, useState } from "react";
import { MdInsertLink } from "react-icons/md";

const Projects = () => {
  const [repo, setRepo] = useState<any>(null);

  const loadData = useCallback(async () => {
    let excludeRepo = ``;

    ["nicocarballo21"].forEach((project) => {
      excludeRepo += `+-repo:nicocarballo21/${project}`;
    });

    const query = `user:nicocarballo21+fork:false${excludeRepo}`;

    const url = `https://api.github.com/search/repositories?q=${query}&sort=stars&exclude=${[
      "nicocarballo21",
    ]}&per_page=10&type=Repositories`;

    fetch(url, {
      headers: {
        "Content-Type": "application/vnd.github.v3+json",
      },
    })
      .then(async (response) => {
        const data = await response.json();

        setRepo(data.items);
      })
      .catch((error) => {
        console.log(error, "error");
      });
  }, []);

  useEffect(() => {
    loadData();
  }, [loadData]);

  return (
    <section className="bg-yellow px-3 py-5 md:px-0 md:py-10">
      <h2 className="py-10 text-center text-xl font-medium uppercase tracking-widest text-black ">
        {t("projects.title")}
      </h2>
      <div className="grid w-full grid-cols-1 place-content-center place-items-center gap-4 md:grid-cols-2 md:px-4">
        {repo?.map((item: any) => (
          <a
            className=" w-full max-w-md cursor-pointer rounded-md bg-[#ffff] shadow-lg transition-all hover:scale-110"
            href={item.html_url}
            key={item.id}
            target="_blank"
          >
            <div className="flex h-full w-full flex-col justify-between gap-5 p-4">
              <div className="flex items-center">
                <div className="flex items-center gap-1 text-base lg:text-lg">
                  <MdInsertLink className="my-auto" />
                  <span className="text-gray-dark ">{item.name}</span>
                </div>
              </div>
              <p className="mt-1 text-sm text-gray-dark ">{item.description}</p>
            </div>
          </a>
        ))}
      </div>
    </section>
  );
};

export default Projects;
