import React from 'react';

const MyInfoComponent = (props) => {
  return (
    <div>
      <p>Мои ФИО: {props.fullName}</p>
      <p>Мой возраст: {props.age} лет</p>
    </div>
  );
}

const App = () => {
  const myFullName = "Болатбекулы Елдар";
  const myAge = 16;
  return (
    <div>
      <h1>Моя информация</h1>
      <MyInfoComponent fullName={myFullName} age={myAge} />
    </div>
  );
}

export default App;
