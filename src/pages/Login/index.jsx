import hook from "./hook";
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
    username,
    productList,
    showPassword,
    setShowPassword,
    setIsModal,
  } = hook();

  return (
    <>
      {!isLog ? (
        <FormContainer>
          <form onSubmit={handleSubmit(onSubmit)}>
            <TextField
              label="Nom d'utilisateur"
              {...register("username", { required: true })}
              error={errors.username}
            />
            <FormControl variant="outlined">
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
                      edge="end"
                    >
                      {showPassword ? <VisibilityOff /> : <Visibility />}
                    </IconButton>
                  </InputAdornment>
                }
                label="Password"
              />
            </FormControl>
            <Button variant="contained" type="submit" disabled={false}>
              Soumettre
            </Button>
          </form>
        </FormContainer>
      ) : (
        <LoginContainer>
          <h1>Bienvenue {username}</h1>
          <Button
            variant="contained"
            color="success"
            onClick={() => setIsModal({ isOpen: true, type: "PRODUCT" })}
          >
            Creer un produit
          </Button>
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
