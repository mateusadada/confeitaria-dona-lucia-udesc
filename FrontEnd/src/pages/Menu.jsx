import React from "react";
import "../../src/index.css";
import { Link } from "react-router-dom";

const Menu = () => {
  return (
    <section className="w-full h-[100vh] flex items-center justify-center">
      <article
        className="bg-white sm:w-fit lg:w-[25%] flex flex-col p-5 rounded-lg shadow-lg"
        id="Menu_Article__menuCard"
      >
        <h1 className="text-lightGray mb-5 text-center">Central de controle</h1>
        <Link to="/cashflow" className="Menu_LinkButton">
          Fluxo de caixa
        </Link>

        <Link to="/recipes" className="Menu_LinkButton">
          Receitas
        </Link>

        <Link to="/orders" className="Menu_LinkButton">
          Pedidos
        </Link>

        <Link to="/pricing" className="Menu_LinkButton">
          Precificação
        </Link>

        <Link to="/storage" className="Menu_LinkButton">
          Estoque
        </Link>

        <p className="text-[.85rem]">
          Precisa de ajuda? Clique{" "}
          <a className="underline text-[.85rem] hover:cursor-pointer hover:text-blue-500">
            aqui
          </a>
          .
        </p>
      </article>
    </section>
  );
};

export default Menu;
