import React from "react";

const Overview = (props) => {
  const { listofinfo } = props;

  return (
    <ul>
      {listofinfo.map((name) => {
        return <li>{name}</li>;
      })}
      
    </ul>
  );
};

export default Overview;