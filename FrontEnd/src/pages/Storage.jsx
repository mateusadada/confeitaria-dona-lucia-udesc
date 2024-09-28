import React from 'react'
import BackButton from "../components/BackButton/BackButton";
import ContrastButton from '../components/ContrastButton/ContrastButton';
import { useNavigate } from 'react-router-dom';

const Storage = () => {
  const navigate = useNavigate();
  const goToAddIngredientForm = () => {
    navigate('/storage/createIngredient')
  }
  const goToStoredItems = () => {
    navigate('/storage/items');
  };

  return (
    <div className="w-full h-[100vh] flex items-center justify-center">
      <section className="bg-white w-full max-w-[25%] p-5 rounded-lg shadow-lg">
        <nav>
          <BackButton route={"/menu"} />
        </nav>
        <article>Estoque</article>
        <article className='flex items-center justify-center flex-col gap-2'>
        <ContrastButton
              onClickFunction={goToStoredItems}
              text={"Consultar Estoque"}
              key={"Storage__consultStorage"}
        />

        <ContrastButton
              onClickFunction={null}
              text={"Criar Produto"}
              key={"Storage__createProductBtn"}
        />

        <ContrastButton
              onClickFunction={goToAddIngredientForm}
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
