import React from "react";

const ListGroup = (props) => {
  const { items, onItemSelect } = props;

  return (
    <ul className="list-group">
      {items.map((item) => (
        <li key={item._id} className="list-group-item">{item.name}</li>
      ))}
    </ul>
  );
};

export default ListGroup;
