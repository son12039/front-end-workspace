import { useEffect, useState } from "react";
import Btn from "./Btn";

const Converter = () => {
  const [time, setTime] = useState("");
  const [check, setCheck] = useState(true);
  const [text, setText] = useState("Minutes=>Hours");
  const change = () => {
    setCheck(!check);
  };
  useEffect(() => {
    if (!check) {
      setTime(Math.floor(time / 60));
      setText("Hours=>Minutes");
    } else {
      setTime(time * 60);
      setText("Minutes=>Hours");
    }
  }, [check]);
  const C = (e) => {
    setTime(e.target.value);
  };
  const reset = () => {
    setTime("");
  };

  return (
    <>
      <h1>Time Converter</h1>
      <p>
        Minutes:
        <input
          type="number"
          value={!check ? time * 60 : time}
          onChange={C}
          placeholder="Minutes"
          disabled={!check}
        />
      </p>

      <p>
        Hours:
        <input
          type="number"
          value={!check ? time : Math.floor(time / 60)}
          onChange={C}
          placeholder="Hours"
          disabled={check}
        />
      </p>

      <Btn click={reset} text="Reset" />
      <Btn click={change} text={text} />
    </>
  );
};

export default Converter;
