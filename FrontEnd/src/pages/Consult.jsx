import React from "react";
import BackButton from "../components/BackButton/BackButton";

const Consult = ( setInMenu ) => {
  return (
    <div>
      <nav>
        <BackButton route={"/cashFlow"} />
      </nav>
      Consult
    </div>
  );
};

export default Consult;
