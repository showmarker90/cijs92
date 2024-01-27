import React, { useState } from "react";
import A from "./components/A";
import B from "./components/B";

export const LiftingStateUp = () => {
  const [value, setValue] = useState("");

  return (
    <div>
      <A value={value} setValue={setValue} />
      <B value={value} />
    </div>
  );
};
