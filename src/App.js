import JobBoardComponent from "./components/JobBoardComponent";
import React, { useState, useEffect } from "react";
import data from "./assets/data.json";

function App() {
  const [jobs, setJobs] = useState([]);
  const [filters, setFilters] = useState(["CSS"]);

  useEffect(() => {
    setJobs(data);
  }, []);

  const filterFunc = ({ role, level, tools, languages }) => {
    if (filters.length === 0) {
      return true;
    }

    const tags = [role, level];

    if (tools) {
      tags.push(...tools);
    }

    if (languages) {
      tags.push(...languages);
    }

    return filters.every((filter) => tags.includes(filter));
  };

  const handleTagClick = (tag) => {
    if (filters.includes(tag)) {
      return;
    }
    setFilters([...filters, tag]);
  };

  const handleFilterClick = (passedFilter) => {
    setFilters(filters.filter((f) => f !== passedFilter));
  };

  const clearFilters = () => {
    setFilters([]);
  };

  const filteredJobs = jobs.filter(filterFunc);

  return (
    <div className="App">
      <header className="bg-green-500 mb-12">
        <img className="w-full" src="./images/bg-header-desktop.svg" />
      </header>

      <div className="container m-auto">
        {filters.length > 0 && (
          <div
            className={
              "flex  flex-wrap bg-white shadow-md -my-20 mb-16 mx-10 p-6 rounded  lg:flex-row z-10 relative"
            }
          >
            {filters.map((filter) => (
              <span
                className="cursor-pointer mr-4 mb-4  rounded font-bold lg:mb-0 text-green-400 bg-green-100 p-2 lg:mb-0"
                onClick={() => handleFilterClick(filter)}
              >
                ✕ {filter}
              </span>
            ))}
            <button
              onClick={clearFilters}
              className="font-bold text-gray-700 ml-auto"
            >
              Clear
            </button>
          </div>
        )}

        {jobs.length === 0 ? (
          <p>Jobs are fetching...</p>
        ) : (
          filteredJobs.map((job) => {
            return (
              <JobBoardComponent
                job={job}
                key={job.id}
                handleTagClick={handleTagClick}
              />
            );
          })
        )}
      </div>
    </div>
  );
}

export default App;
