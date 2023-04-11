import { getJobsBoard } from "../utilities/fakeJobsDB";

const dataLoader = async () => {
  const loadedJobs = await fetch("/jobs.json");
  const jobs = await loadedJobs.json();

  const loadedCategories = await fetch("/category.json");
  const categories = await loadedCategories.json();

  const appliedJobs = getJobsBoard();
  const savedJobs = [];
  for (const id in appliedJobs) {
    const addedJob = jobs.find((job) => job.id === id);
    if (addedJob) {
      savedJobs.push(addedJob);
    }
  }

  return { jobs, categories, savedJobs };
};

export default dataLoader;
