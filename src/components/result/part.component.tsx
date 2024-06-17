import React from "react";
import { PartProps } from "../../models/models";

const Part: React.FC<PartProps> = ({ label, value }) => {
  return (
    <div className="part">
      <label>{label}</label>
      <input
        type="text"
        value={value}
        style={{ textAlign: "end", marginLeft: "12px" }}
      />
    </div>
  );
};

export default Part;
