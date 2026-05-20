import { Link } from "react-router-dom";

export default function Fibonacci() {
  return (
    <div>
      Fibonacci
      <button>
        <Link to="/">Retornar</Link>{" "}
      </button>
    </div>
  );
}
