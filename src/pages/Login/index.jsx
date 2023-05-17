import hook from "./hook";
import Modal from "../../components/Modal";
import Product from "../../components/Product";
import {
  TextField,
  Button,
  FormControl,
  InputLabel,
  OutlinedInput,
  InputAdornment,
  IconButton,
} from "@mui/material";
import Visibility from "@mui/icons-material/Visibility";
import VisibilityOff from "@mui/icons-material/VisibilityOff";
import { ProductContainer, LoginContainer, FormContainer } from "./styles";
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
    showPassword,
    setShowPassword,
  } = hook();

  return (
    <>
      {!isLog ? (
        <FormContainer>
          <form onSubmit={handleSubmit(onSubmit)}>
            <TextField
              id="test"
              label="Nom d'utilisateur"
              {...register("username", { required: true })}
              error={errors.username}
            />
            <FormControl variant="outlined" id="test">
              <InputLabel htmlFor="outlined-adornment-password">
                Mot de Passe
              </InputLabel>
              <OutlinedInput
                id="outlined-adornment-password"
                type={showPassword ? "text" : "password"}
                {...register("password", { required: true })}
                error={errors.username}
                endAdornment={
                  <InputAdornment position="end">
                    <IconButton
                      aria-label="toggle password visibility"
                      onClick={() => setShowPassword(!showPassword)}
                      // onMouseDown={handleMouseDownPassword}
                      edge="end"
                    >
                      {showPassword ? <VisibilityOff /> : <Visibility />}
                    </IconButton>
                  </InputAdornment>
                }
                label="Password"
              />
            </FormControl>
            <Button
              id="test"
              variant="contained"
              type="submit"
              disabled={false}
            >
              Soumettre
            </Button>
          </form>
        </FormContainer>
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
