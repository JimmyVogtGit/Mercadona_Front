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
    language,
    theme,
  } = hook();

  return (
    <>
      {!isLog ? (
        <FormContainer>
          <h1>{theme.themeForm[language].connection}</h1>
          <form onSubmit={handleSubmit(onSubmit)}>
            <TextField
              label={theme.themeForm[language].userName}
              {...register("username", { required: true })}
              error={errors.username}
            />
            <FormControl variant="outlined">
              <InputLabel htmlFor="outlined-adornment-password">
                {theme.themeForm[language].password}
              </InputLabel>
              <OutlinedInput
                id="outlined-adornment-password"
                type={showPassword ? "text" : "password"}
                {...register("password", { required: true })}
                error={errors.password}
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
              {theme.themeForm[language].submit}
            </Button>
          </form>
        </FormContainer>
      ) : (
        <LoginContainer>
          <h1>
            {theme.themeText[language].welcomeAdmin} {username}
          </h1>
          <Button
            variant="contained"
            color="success"
            onClick={() => setIsModal({ isOpen: true, type: "PRODUCT" })}
          >
            {theme.themeButton[language].createProduct}
          </Button>
          <Button
            variant="contained"
            color="success"
            onClick={() => setIsModal({ isOpen: true, type: "PRODUCT" })}
          >
            {theme.themeButton[language].exportPdf}
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
                  category={product.category}
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
