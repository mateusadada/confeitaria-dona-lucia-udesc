import React from "react";
import BackButton from "../components/BackButton/BackButton";

const Orders = () => {
  return (
    <div className="w-full h-[100vh] flex items-center justify-center">
      <section className="bg-white w-full max-w-[25%] p-5 rounded-lg shadow-lg">
        <nav>
          <BackButton route={"/menu"} />
        </nav>
        <article>Pedidos</article>
      </section>
    </div>
  );
};

export default Orders;
