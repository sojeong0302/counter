import { useEffect } from "react";

function Even() {
  useEffect(() => {
    return () => {
      console.log("Even 컴포넌트 언마운트");
    };
  }, []);
  return (
    <div>
      <h3>현재 카운트는 짝수입니다</h3>
    </div>
  );
}

export default Even;
