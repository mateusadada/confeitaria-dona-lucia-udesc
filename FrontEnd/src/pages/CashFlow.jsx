import React, { useEffect, useState } from "react";
import BackButton from "../components/BackButton/BackButton";
import ContrastButton from "../components/ContrastButton/ContrastButton";
import IncomeForm from "./IncomeForm";
import OutflowForm from "./OutflowForm";
import Consult from "./Consult";

const CashFlow = () => {
  const [inCashFlowMenu, setInCashFlowMenu] = useState(true);
  const [optionSelected, setOptionSelected] = useState("");

  const handleIncome = (ev) => {
    ev.preventDefault();
    setOptionSelected("Income");
  };

  const handleOutflow = (ev) => {
    ev.preventDefault();
    setOptionSelected("Outflow");
  };

  const handleConsult = (ev) => {
    ev.preventDefault();
    setOptionSelected("Consult");
  };

  useEffect(() => {
    if (optionSelected === "Income") {
      // Ação para "Income"
      setInCashFlowMenu(false);
    } else if (optionSelected === "Outflow") {
      // Ação para "Outflow"
      setInCashFlowMenu(false);
    } else if (optionSelected === "Consult") {
      // Ação para "Consult"
      setInCashFlowMenu(false);
    } else if (optionSelected !== "") {
      alert("Error");
    }
  }, [optionSelected]); // Esse `useEffect` reage a mudanças em `optionSelected`

  return (
    <div className="w-full h-[100vh] flex items-center justify-center">
      <section className="bg-white w-full max-w-[25%] p-5 rounded-lg shadow-lg">
        {inCashFlowMenu ? (
          <article>
            <nav>
              <BackButton route={"/menu"} />
            </nav>
            <article>FLUXO DE CAIXA</article>
            <ContrastButton
              onClickFunction={handleIncome}
              text={"Entrada"}
              key={"CashFlow__incomeAmount"}
            />
            <ContrastButton
              onClickFunction={handleOutflow}
              text={"Saida"}
              key={"CashFlow__outflowAmount"}
            />
            <ContrastButton
              onClickFunction={handleConsult}
              text={"Consultar"}
              key={"CashFlow__consultAmount"}
            />
          </article>
        ) : (
          <article>
            <nav>
              <BackButton route={"/menu"} />
            </nav>
            {optionSelected == "Income" ? (
              <IncomeForm  />
            ) : optionSelected == "Outflow" ? (
              <OutflowForm />
            ) : optionSelected ? (
              <Consult />
            ) : (
              setInCashFlowMenu(true)
            )}
            {/*<p>Você selecionou: {optionSelected}</p>*/}
          </article>
        )}
      </section>
    </div>
  );
};

export default CashFlow;
