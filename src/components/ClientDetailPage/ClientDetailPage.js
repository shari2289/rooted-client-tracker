import React from "react";
import ClientCard from "../../components/ClientCard/ClientCard";

function ClientDetailPage(props) {
  const client = props.location.state.client;
  return (
    <>
      <h1>Client Info</h1>
      <ClientCard key={props.client._id} client={props.client} />
    </>
  );
}
export default ClientDetailPage;