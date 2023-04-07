import React, { useState, useEffect } from "react";

const Messaging = ({ title, description, github, live, convo }) => {
  return (
    <div>
      <div className="sticky">
        <p>{title}</p>
        <p>{github}</p>
        <p>{live}</p>
      </div>
      <div>
      {convo.map((item, index) => (
          <p key={index} className="convo-item">{item}</p>
        ))}
      </div>
      <p>{description}</p>
    </div>
  );
};

export default Messaging;
