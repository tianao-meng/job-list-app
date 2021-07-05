import React from "react";

// const x = {
//   id: 1,
//   company: "Photosnap",
//   logo: "./images/photosnap.svg",
//   new: true,
//   featured: true,
//   position: "Senior Frontend Developer",
//   role: "Frontend",
//   level: "Senior",
//   postedAt: "1d ago",
//   contract: "Full Time",
//   location: "USA Only",
//   languages: ["HTML", "CSS", "JavaScript"],
//   tools: [],
// };

const JobBoardComponent = ({
  job: {
    company,
    logo,
    isNew,
    featured,
    position,
    role,
    level,
    postedAt,
    contract,
    location,
    languages,
    tools,
  },
  handleTagClick,
}) => {
  const tags = [role, level];

  if (tools) {
    tags.push(...tools);
  }

  if (languages) {
    tags.push(...languages);
  }

  return (
    <div
      className={`flex flex-col bg-white shadow-md my-16 mx-10 p-6 rounded ${
        featured && `border-l-4 border-green-500 border-solid`
      } lg:flex-row lg:my-4`}
    >
      <div>
        <img
          className="-mt-16 mb-4 w-20 h-20 lg:h-24 lg:w-24 lg:my-0"
          src={logo}
          alt={company}
        />
      </div>
      <div className="flex flex-col justify-between ml-4">
        <h3 className="font-bold text-green-400">
          {company}
          {isNew && (
            <span className="bg-green-400 text-green-100 font-bold  m-2 py-1 px-2 rounded-full uppercase text-sm">
              New
            </span>
          )}

          {featured && (
            <span className="bg-gray-800 text-white font-bold  py-1 px-2 rounded-full uppercase text-sm">
              Featured
            </span>
          )}
        </h3>
        <h2 className="font-bold text-xl my-2">{position}</h2>
        <p className="text-gray-400">
          {postedAt} · {contract} · {location}
        </p>
      </div>
      <div className="flex flex-wrap items-center mt-4 mx-4 pt-4 border-t border-gray-500 border-solid lg:ml-auto lg:border-0 lg:pt-0 lg:mt-0">
        {tags
          ? tags.map((tag) => {
              return (
                <span
                  onClick={() => handleTagClick(tag)}
                  className="cursor-pointer text-green-400 bg-green-100 font-bold mr-4 mb-4 p-2 rounded lg:mb-0"
                >
                  {tag}
                </span>
              );
            })
          : ""}
      </div>
    </div>
  );
};
export default JobBoardComponent;
