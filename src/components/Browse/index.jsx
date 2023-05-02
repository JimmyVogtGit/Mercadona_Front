import { Link } from "react-router-dom";

function Browse() {
  return (
    <>
      <nav>
        <ul>
          <li>
            <Link to="/catalog">Catalogue</Link>
          </li>
          <li>
            {" "}
            <Link to="/login">Espace Admin</Link>
          </li>
        </ul>
      </nav>
    </>
  );
}

export default Browse;
