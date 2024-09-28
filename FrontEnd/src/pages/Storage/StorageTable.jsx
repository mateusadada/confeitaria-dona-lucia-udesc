import React, { useEffect, useState } from "react";

import supabase from "../../utils/supabase";
import BackButton from "../../components/BackButton/BackButton";

const StorageTable = () => {
  const [data, setData] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  //Fetch data
  useEffect(() => {
    async function fetchData() {
      try {
        let { data: Items, error } = await supabase.from("Item").select("*");
        setData(Items);
        setIsLoading(false);
        console.log(data);
      } catch (err) {
        console.error(
          "StorageTable.jsx: Erro ao buscar dados para o estoque: " + err
        );
      }
    }
    fetchData();
  }, []);

  if (isLoading) {
    return (
    <div className="bg-primary h-[100vh] w-full flex items-center justify-center">
      <span className="loading loading-dots loading-lg loading-contrastColor"></span>
    </div>
  );
  }
  return (
    <div className="w-full h-[100vh] flex items-center justify-center">
      <section className="bg-white w-full max-w-[75%] p-5 rounded-lg shadow-lg">
        <nav className="w-fit flex gap-5 items-center">
          <BackButton route={"/menu"} />
        <article className="mb-2 font-bold text-[2rem]">Items em Estoque</article>
        </nav>
        <div className="overflow-x-auto">
          <table className="table">
            {/* head */}
            <thead>
              <tr className="text-contrastColor text-lg text-center">
                <th>Id</th>
                <th>Nome</th>
                <th>Valor unitário (R$)</th>
                <th>Quantidade estoque</th>
                <th>Observação</th>
              </tr>
            </thead>
            <tbody>
              { data.map((item, idx) => (
                <tr key={idx} className="text-[1rem] text-center">
                  <th>{item.cod_item}</th>
                  <td>{item.nome}</td>
                  <td>R$ {item.valor_unitario.toFixed(2)}</td>
                  <td>{item.qtd_estoque}</td>
                  <td>{item.observacao}</td>
              </tr>
              )) }
            </tbody>
          </table>
        </div>
      </section>
    </div>
  );
};

export default StorageTable;
