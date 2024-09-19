import React from 'react'
import BackButton from "../components/BackButton/BackButton";
import ContrastButton from '../components/ContrastButton/ContrastButton';

const Storage = () => {
  return (
    <div className="w-full h-[100vh] flex items-center justify-center">
      <section className="bg-white w-full max-w-[25%] p-5 rounded-lg shadow-lg">
        <nav>
          <BackButton route={"/menu"} />
        </nav>
        <article>Estoque</article>
        <article className='flex items-center justify-center flex-col gap-2'>
        <ContrastButton
              onClickFunction={null}
              text={"Consultar Estoque"}
              key={"Storage__consultStorage"}
        />

        <ContrastButton
              onClickFunction={null}
              text={"Criar Produto"}
              key={"Storage__createProductBtn"}
        />

        <ContrastButton
              onClickFunction={null}
              text={"Novo Ingrediente"}
              key={"Storage__newIngredient"}
        />

        <ContrastButton
              onClickFunction={null}
              text={"Consultar Ingredientes"}
              key={"Storage__consultIngredients"}
        />
        </article>
      </section>
    </div>
  )
}

export default Storage;
