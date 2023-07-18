import { useState } from "react";
import Button from "./Button";

import "./App.css";
import Step2 from "./Step2";

const Conteiner = (props) => {
  const [isDivShow, setIsDivShow] = useState(true);
  const [isStep1Show, setIsStep1Show] = useState(true);
  const [input, setInput] = useState("");
  const [input2, setInput2] = useState("");

  const divShow = () => {
    setIsDivShow((prevIsdivShow) => !prevIsdivShow);
  };

  const step1Show = () => {
    setIsStep1Show((prevIsStep1Show) => !prevIsStep1Show);
  };

  const inputChangHandler = (event) => {
    setInput(event.target.value);
  };

  const submitHandler = (event) => {
    event.preventDefault();
    setInput(input);
  };

  const input2ChangHandler = (event) => {
    setInput2(event.target.value);
  };

  const submit2Handler = (event) => {
    event.preventDefault();
    setInput2(input2);
  };

  return (
    <div>
      {isDivShow && (
        <div className="div" onSubmit={submitHandler}>
          <p>Email</p>
          <input onChange={inputChangHandler} value={input} />
          <Button onClick={divShow}>Дальше</Button>
        </div>
      )}
      {!isDivShow && isStep1Show && (
        <div className="step1" onSubmit={submit2Handler}>
          <p>Step1</p>
          <p>Name</p>
          <input onChange={input2ChangHandler} value={input2} />
          <Button onClick={divShow}>Обратно</Button>
          <Button onClick={step1Show}>Дальше</Button>
        </div>
      )}
      {!isStep1Show && <Step2 isShow={step1Show}/>}
    </div>
  );
};

export default Conteiner;
