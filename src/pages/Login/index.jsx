import hook from "./hook";
import Modal from "../../components/Modal";
import Product from "../../components/Product";
import { ProductContainer, LoginContainer } from "./styles";
function login() {
  const {
    register,
    handleSubmit,
    errors,
    onSubmit,
    isLog,
    modalIsOpen,
    setModalIsOpen,
    username,
    productList,
  } = hook();

  return (
    <>
      {!isLog ? (
        <form onSubmit={handleSubmit(onSubmit)}>
          <label htmlFor="name">Nom d&apos;utilisateur</label>
          <input {...register("name", { required: true })} />
          {errors.userName && <span>Le champ nom utilisateur est requis</span>}
          <label htmlFor="password">Password :</label>
          <input {...register("password", { required: true })} />
          {errors.password && <span>Le champ password est requis</span>}
          <input type="submit" disabled={false} />
        </form>
      ) : (
        <LoginContainer>
          <h1>Bienvenue {username}</h1>
          <button onClick={() => setModalIsOpen(true)}>Creer un produit</button>
          {modalIsOpen && (
            <Modal type="PRODUCT" setModalIsOpen={setModalIsOpen} />
          )}
          <ProductContainer>
            {productList.map((product, index) => {
              return (
                <Product
                  key={index}
                  id={product.id}
                  wording={product.wording}
                  describe={product.describe}
                  price={product.price}
                  isLog={isLog}
                  promotion={product.promotion}
                />
              );
            })}
          </ProductContainer>
        </LoginContainer>
      )}
    </>
  );
}

export default login;
