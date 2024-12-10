import { useState } from "react";
export default function Advice() {
  const [name, setName] = useState();
  // let name='ram';

  async function handler() {
    const ram = await fetch("https://api.adviceslip.com/advice");
    const data = await ram.json();
    setName(data.slip.advice);
    console.log(data.slip.advice);
  }
  return (
    <>
      <p className="ram1">see something good here:- {name}</p>
      <button className="ram" onClick={handler}>
        if you want to see something good above then click here once ❤️
      </button>
    </>
  );
}
