import { atom, useAtom } from "jotai";

const currentAiAtom = atom<string>("aiA");

export const useChangeAi = () => {
  const [currentAi, setCurrentAi] = useAtom(currentAiAtom);

  const apiUrl = currentAi === "aiA" ? import.meta.env.VITE_BEDROCK_API_AiA : import.meta.env.VITE_BEDROCK_API_AiB;

  const switchAi = () => {
    setCurrentAi(currentAi === "aiA" ? "aiB" : "aiA");
  };

  return { currentAi, apiUrl, switchAi };
};
