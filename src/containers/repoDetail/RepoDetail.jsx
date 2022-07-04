import { useState, useEffect } from "react";
import { useParams, useLocation } from "react-router-dom";
import Card from "../../components/card/Card";
import { fetchRepo } from "../../api/api";

import "./repodetail.css";

const RepoDetail = () => {
  const [repo, setRepo] = useState();
  const { name } = useParams();
  const { state } = useLocation();

  useEffect(() => {
    if (!state?.[0]) {
      fetchRepo(name).then(setRepo);
    } else {
      setRepo(state?.[0]);
    }
  }, [name, state]);

  return (
    <div className="detail-container">
      {repo ? <Card repo={repo} /> : <div role="loading">Loading....</div>}
    </div>
  );
};

export default RepoDetail;
