import React from "react";
import { Link } from "react-router-dom";
import "./ClientListItem.css";

function ClientListItem(props) {
  return (
    <div className="panel panel-default">
      <div className="panel-heading">
        <h3 className="panel-title">{props.client.name}</h3>
      </div>
      <div className="panel-footer ClientListItem-action-panel">
        <Link
          className="btn btn-xs btn-info"
          to={{
            pathname: "/details",
            state: { client: props.client },
          }}
        >
          CLIENT INFO
        </Link>
        <Link
          className="btn btn-xs btn-warning"
          to={{
            pathname: "/edit",
            state: { client: props.client },
          }}
        >
          EDIT CLIENT
        </Link>
        <button
          className="btn btn-xs btn-danger margin-left-10"
          onClick={() => props.handleDeletePuppy(props.puppy._id)}
        >
          DELETE CLIENT
        </button>
      </div>
    </div>
  );
}

export default ClientListItem;