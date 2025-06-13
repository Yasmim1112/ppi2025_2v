import "./styles/theme.css";
import "./styles/global.css";
import { MyText } from "./components/MyText";
import { MyTextList } from "./components/MyTextList";
import { Desafio} from "./components/Desafio";
import {Hearder} from "./components/Hearder";
import {Main} from "./components/Main";
import {Footer} from "./components/Footer";


export default function App() {
  return (
    <>
    <div className="container">
      <Hearder/>
      <Main/>
      <Footer/>
      </div>
    </>
  );
}
