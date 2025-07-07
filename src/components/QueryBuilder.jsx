import React, { useState } from "react";
import RuleGroup from "./RuleGroup";

const QueryBuilder = ({ fields }) => {
  const [query, setQuery] = useState({
    combinator: "and",
    rules: []
  });

  return (
    <div className="p-4 bg-white dark:bg-gray-800 rounded shadow">
      <RuleGroup
        group={query}
        fields={fields}
        onChange={setQuery}
      />
      <pre className="mt-4 text-xs bg-gray-100 p-2 rounded">
        {JSON.stringify(query, null, 2)}
      </pre>
    </div>
  );
};

export default QueryBuilder;
