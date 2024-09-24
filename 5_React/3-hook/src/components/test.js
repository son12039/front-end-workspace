import { useEffect, useState } from "react";

function Example() {
  const [count, setCount] = useState(0);

  useEffect(() => {
    document.title = `카운트: ${count}`; // 카운트가 변경될 때마다 문서 제목 업데이트
  }, [count]); // count가 변경될 때만 실행

  return (
    <div>
      <p>현재 카운트: {count}</p>
      <button onClick={() => setCount(count + 1)}>카운트 증가</button>
    </div>
  );
}
export default Example;
