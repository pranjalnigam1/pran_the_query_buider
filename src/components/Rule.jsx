import React from "react";

const Rule = ({ rule, fields }) => {
  return (
    <div className="flex items-center space-x-2 mb-2">
      <select className="border p-1">
        {fields.map(f => (
          <option key={f.value} value={f.value}>
            {f.label}
          </option>
        ))}
      </select>
      <select className="border p-1">
        <option value="=">=</option>
        <option value="!=">!=</option>
      </select>
      <input className="border p-1" placeholder="Value" />
    </div>
  );
};

export default Rule;
