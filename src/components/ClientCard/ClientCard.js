import React from "react";
import { Link } from "react-router-dom";

function ClientCard({ client }) {
  return (
    <div className="panel panel-default">
      <div className="panel-heading">
        <h3 className="panel-title">{client.name}</h3>
      </div>
      <div className="panel-body">
        <dl>
          <dt>Next Appointment</dt>
          <dd>{client.nextAppointment}</dd>
          <dt>Style Requested</dt>
          <dd>{client.styleRequested}</dd>
          <dt>Comments</dt>
          <dd>{client.comments}</dd>
        </dl>
      </div>
      <div className="panel-footer">
        <Link to="/">RETURN TO CLIENTS LIST</Link>
      </div>
    </div>
  );
}

export default ClientCard;