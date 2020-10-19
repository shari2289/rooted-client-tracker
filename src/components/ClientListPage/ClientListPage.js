
import React from "react";
import "./ClientListPage.css";
import ClientListItem from "../ClientListItem/ClientListItem";

function ClientListPage(props) {
  return (
    <>
      <h1>Rooted's Client List</h1>
      <div className="Client-ListPage-grid">
        {props.clients.map(client => (
          <ClientListItem
            client={client}
            key={client._id}
            handleDeleteClient={props.handleDeleteClient}
          />
        ))}
      </div>
    </>
  );
}
export default ClientListPage;