import { Link } from "react-router-dom";
import hook from "./hook";

function Browse() {
  const { isLog, deleteStorage } = hook();
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
          {isLog && (
            <li>
              {" "}
              <Link to="/login" onClick={() => deleteStorage()}>
                Deconnexion
              </Link>
            </li>
          )}
        </ul>
      </nav>
    </>
  );
}

export default Browse;
