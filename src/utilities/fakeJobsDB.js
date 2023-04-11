// use local storage to manage cart data
const addToDb = (id) => {
  let jobsBoard = getJobsBoard();
  // add jobCount
  const jobCount = jobsBoard[id];
  if (!jobCount) {
    jobsBoard[id] = 1;
  } else {
    alert("You have already applied on this job!");
  }
  localStorage.setItem("job-board", JSON.stringify(jobsBoard));
};

const removeFromDb = (id) => {
  const jobsBoard = getJobsBoard();
  if (id in jobsBoard) {
    delete jobsBoard[id];
    localStorage.setItem("job-board", JSON.stringify(jobsBoard));
  }
};

const getJobsBoard = () => {
  let jobsBoard = {};

  //get the Jobs Board from local storage
  const appliedJobs = localStorage.getItem("job-board");
  if (appliedJobs) {
    jobsBoard = JSON.parse(appliedJobs);
  }
  return jobsBoard;
};

const deleteJobsBoard = () => {
  localStorage.removeItem("job-board");
};

export { addToDb, removeFromDb, getJobsBoard, deleteJobsBoard };
