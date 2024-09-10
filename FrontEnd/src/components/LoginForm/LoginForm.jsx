import React, { useState } from "react";
import '../../index.css'
import ContrastButton from "../ContrastButton/ContrastButton";
import InputWithLabel from "../InputWithLabel/InputWithLabel.jsx";
import { loginValidation } from "../../utils/functions.js";
import { useNavigate } from "react-router-dom";


const LoginForm = () => {
  const [password, setPassword] = useState('');
  const [user, setUser] = useState('');
  const navigate = useNavigate();

  const onButtonClick = () => {
    const matched = loginValidation(user, password);
    if(matched){
      alert('Logado com Sucesso...');
      navigate('/menu');
    } else{
      alert('Usuário ou Senha Incorretos...')
    }
  }

  const onChangeUser = (ev) => {
    setUser(ev.target.value)
  }

  const onChangePassword = (ev) => {
    setPassword(ev.target.value);
  }

  return(
    <article className="bg-white text-fontColor pb-10 px-10 pt-5 rounded-lg shadow-lg">
      <h1 className="text-2xl text-center font-bold">Seja Bem Vindo (a)</h1>
      <section className="flex flex-col text-[1rem]">
        <InputWithLabel label="Usuário" placeholder={""} onChangeFunction={onChangeUser} inputType={"text"} inputValue={user} />
      </section>
      <section className="flex flex-col text-[1rem] mb-5">
        <InputWithLabel label="Senha" placeholder={"********"} onChangeFunction={onChangePassword} inputType={"password"} inputValue={password} />
      </section>
      <section>
        <ContrastButton text={'Entrar'} onClickFunction={onButtonClick} />
      </section>
    </article>
  )
}

export default LoginForm;
