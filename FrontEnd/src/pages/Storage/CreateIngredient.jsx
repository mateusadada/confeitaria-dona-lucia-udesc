import React, { useEffect, useState } from "react";
import BackgroundCard from "../../components/BackgroundCard/BackgroundCard";
import InputWithLabel from "../../components/InputWithLabel/InputWithLabel";
import supabase from "../../utils/supabase";
import SelectInputWithLabel from "../../components/SelectInputWithLabel/SelectInputWithLabel";

const CreateIngredient = () => {
  const [ingredientName, setIngredientName] = useState("");
  const [ingredientBrand, setIngredientBrand] = useState("");
  const [unities, setUnities] = useState([]);
  const [selected, setSelected] = useState("");

  const handleInsert = (ev) => {
    ev.preventDefault();
    
    useEffect(() => {
      async function insert() {
        try {
          const { data, error } = await supabase
            .from("Ingrediente")
            .insert([{ marca: ingredientBrand, cod_item: null, cod_unidade_medida: selected }])
            .select();
        } catch (err) {
          console.log("Error inserting data in Ingredient table.");
        }
      }

      insert();
    });
  };

  useEffect(() => {
    async function fetchUnities() {
      try {
        let { data: Unidade_Medida, error } = await supabase
          .from("Unidade_Medida")
          .select("*");
        setUnities(Unidade_Medida);
        console.log("uni", unities);
      } catch (error) {
        console.log(error);
      }
    }
    fetchUnities();
  }, []);

  return (
    <div>
      <BackgroundCard title={"Adicionar Novo Ingrediente:"}>
        <p className="text-sm">
          Preencha o formulário abaixo para cadastro de um novo ingrediente no
          seu estoque
        </p>
        
        <form action="submit" onSubmit={handleInsert}>
          <InputWithLabel
            label="Nome do Produto"
            inputType="text"
            inputValue={ingredientName}
            onChangeFunction={(ev) => setIngredientName(ev.target.value)}
          />

          <InputWithLabel
            label="Marca"
            inputType="text"
            inputValue={ingredientBrand}
            onChangeFunction={(ev) => setIngredientBrand(ev.target.value)}
          />
        
          <SelectInputWithLabel
            options={unities}
            handleChange={(ev) => setSelected(ev.target.value)}
            label={"Unidade de Medida"}
          />
          <button
            type="submit"
            className="mt-5 bg-contrastColor text-white font-bold text-center p-1 rounded-lg w-full text-sm hover:bg-contrastColorHover hover:cursor-pointer"
          >
            Adicionar
          </button>
        </form>
      </BackgroundCard>
    </div>
  );
};

export default CreateIngredient;
