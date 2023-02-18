import { useState } from "react";

export function useModale(){
  const [modale, setModale] = useState(false);
  const [modaleVariant, setModaleVariant] = useState('');
  function handleClick(state, modaleState){
    setModale(state);
    setModaleVariant(modaleState);
  }
  return [modale, modaleVariant, handleClick];
}