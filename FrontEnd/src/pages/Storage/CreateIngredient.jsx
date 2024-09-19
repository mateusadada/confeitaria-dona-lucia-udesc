import React, { useEffect, useState } from 'react'
import BackgroundCard from '../../components/BackgroundCard/BackgroundCard'
import InputWithLabel from '../../components/InputWithLabel/InputWithLabel'
import supabase from '../../utils/supabase';

const CreateIngredient = () => {
  const [ingredientName, setIngredientName] = useState('');
  const [ingredientQuantity, setIngredientQuantity] = useState('');
  const [unities, setUnities] = useState([]);

  useEffect(() => {    
    async function fetchUnities(){
      try{
        let { data: Unidade_Medida, error } = await supabase
        .from('Unidade_Medida')
        .select('*')
        setUnities(Unidade_Medida);
        console.log("uni", unities)
      } catch (error){
        console.log(error);
      }
    }
    fetchUnities();
  }, [])

  return (
    <div>
      <BackgroundCard
        title={"Adicionar Novo Ingrediente:"}
      >
        <p className='text-sm'>Preencha o formulário abaixo para cadastro de um novo ingrediente no seu estoque</p>
{/*label, placeholder, inputType, inputValue, onChangeFunction*/}
        <form action="submit">
        <InputWithLabel 
          label="Nome do Produto"
          inputType="text"
          inputValue={ingredientName}
          onChangeFunction={(ev) => setIngredientName(ev.target.value)}
        />

        <InputWithLabel 
          label="Quantidade"
          inputType="number"
          inputValue={ingredientQuantity}
          onChangeFunction={(ev) => setIngredientQuantity(ev.target.value)}
        />

        </form>
      </BackgroundCard>
    </div>
  )
}

export default CreateIngredient
