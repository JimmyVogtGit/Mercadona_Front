import { Link } from "react-router-dom";
import hook from "./hook";
import { ListContainer } from "./styles";

function Browse() {
  const { isLog, deleteStorage } = hook();
  return (
    <nav>
      <ListContainer>
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
      </ListContainer>
    </nav>
  );
}

export default Browse;
