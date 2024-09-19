import React from "react";
import BackButton from "../BackButton/BackButton";

const BackgroundCard = ( props ) => {
  const { title , children} = props;
  return (
    <div className="w-full h-[100vh] flex items-center justify-center">
      <section className="bg-white w-full max-w-[25%] p-5 rounded-lg shadow-lg">
        <nav className="w-fit">
          <BackButton route={"/menu"} />
        </nav>
        <article className="mb-2 font-bold">{ title }</article>
        <div>{ children }</div>
      </section>
    </div>
  );
};

export default BackgroundCard;
