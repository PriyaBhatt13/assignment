import { useState, useEffect } from "react";
import List from "../../components/list/List";
import { fetchAllRepos } from "../../api/api";
import "./repolist.css";

const RepoList = () => {
  const [repos, setRepos] = useState();

  useEffect(() => {
    fetchAllRepos().then((data) => {
      setRepos(data);
    });
  }, []);

  return (
    <div className="list-container">
      <div className="list-header">GoDaddy Public Repositories</div>
      {repos ? (
        <div>
          <List data={repos} />
        </div>
      ) : (
        <div role="loading">Loading...</div>
      )}
    </div>
  );
};

export default RepoList;
