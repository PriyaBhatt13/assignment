import { useHistory } from "react-router-dom";

import "./card.css";

const Field = ({ name, data }) => {
  return (
    <div className="field-container">
      <span>
        <span className="field-name">{name}:</span>
        <span className="field-data">{data}</span>
      </span>
    </div>
  );
};

const Card = ({ repo }) => {
  const history = useHistory();

  return (
    <div className="card-container">
      <div className="content">
        <Field name="Name" data={repo.name} />
        <Field name="Description" data={repo.description} />
        <Field name="ID" data={repo.id} />
        <Field name="URL" data={repo.url} />
        <Field name="Language" data={repo.language} />
        <Field name="Forks" data={repo.forks} />
        <Field name="Open Issues" data={repo.open_issues} />
        <Field name="Watchers" data={repo.watchers} />
        <Field name="Subscribers Count" data={repo.subscribers_count} />
        <Field name="Private" data={repo.private ? "Yes" : "No"} />
        <button className="btn" onClick={() => history.push("/")}>
          Go Back
        </button>
      </div>
    </div>
  );
};

export default Card;
