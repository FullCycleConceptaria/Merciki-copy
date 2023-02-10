import { useState } from "react";

export function useModale(){
  const [modale, setModale] = useState(false);
  function handleClick(state){
    setModale(state);
  }
  return [modale, handleClick];
}