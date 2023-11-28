// src/App.js

import React from "react";


function App() {

  return <GrandFather />;
}

function GrandFather() {

  const name = "김할아버지"
  return <Mother gfName={name} />;
}

function Mother(props) {
  const grandFatherName = props.gfName ;
  const name = "김엄마";
  
  return <Son />;
}

function Son() {
  return <div>나는 {}의 아들입니다.</div>
}

export default App;
