import "./styles/theme.css";
import "./styles/global.css";
import { LuckyNumber } from "./components/Etapa-2/LuckyNumber";
import { MyText } from "./components/Etapa-1/MyText";
import { MyTextList } from "./components/Etapa-1/MyTextList";
import { Desafio} from "./components/Etapa-1/Desafio";
import {Hearder} from "./components/Etapa-1/Hearder";
import {Main} from "./components/Etapa-1/Main";
import {Footer} from "./components/Etapa-1/Footer";


export default function App() {
  return (
    <>
    <Hearder/>
   <LuckyNumber/>
   </>
  );
}
