import "./styles/theme.css";
import "./styles/global.css";
import { Hearder} from "./components/Etapa-1/Hearder";
import { LuckyNumber } from "./components/Etapa-2/LuckyNumber";

export default function App() {
  return (
    // React Fragment
    <>
      <Hearder />
      <LuckyNumber />
    </>
  );
}

