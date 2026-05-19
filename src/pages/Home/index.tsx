import { Link } from "react-router-dom";

export default function Home() {
  return (
    <div>
      <h1>Home Page</h1>

      <nav>
        <ul>
          <li>
            <Link to="/salary">Salary Calculator</Link>
          </li>
          <li>
            <Link to="/fibonacci">Fibonacci</Link>
          </li>
          <li>
            <Link to="/sequence">Number Sequence</Link>
          </li>
        </ul>
      </nav>
    </div>
  );
}
