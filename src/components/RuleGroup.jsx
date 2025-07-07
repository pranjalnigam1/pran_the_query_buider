import React from "react";
import Rule from "./Rule";

const RuleGroup = ({ group, fields, onChange }) => {
  return (
    <div className="border-l-2 pl-2">
      {group.rules.map((rule, idx) => (
        <Rule key={idx} rule={rule} fields={fields} />
      ))}
      <button
        onClick={() =>
          onChange({
            ...group,
            rules: [...group.rules, { field: "", operator: "", value: "" }],
          })
        }
      >
        + Add Rule
      </button>
    </div>
  );
};

export default RuleGroup;
