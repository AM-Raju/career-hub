const dataLoader = async () => {
  const loadedJobs = await fetch("Jobs.json");
  const jobs = await loadedJobs.json();

  const loadedCategories = await fetch("category.json");
  const categories = await loadedCategories.json();

  return { jobs, categories };
};

export default dataLoader;
