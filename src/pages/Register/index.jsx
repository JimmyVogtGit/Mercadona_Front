import hook from "./hook";
import { FormContainer } from "./styles";
import {
  TextField,
  Button,
  OutlinedInput,
  InputAdornment,
  IconButton,
  FormControl,
  InputLabel,
} from "@mui/material";
import Visibility from "@mui/icons-material/Visibility";
import VisibilityOff from "@mui/icons-material/VisibilityOff";

function register() {
  const {
    register,
    handleSubmit,
    errors,
    onSubmit,
    userList,
    isLog,
    showPassword,
    setShowPassword,
    language,
    theme,
  } = hook();

  return (
    <div>
      {isLog ? (
        <FormContainer>
          <h1>{theme.themeForm[language].registerWelcome}</h1>
          <form onSubmit={handleSubmit(onSubmit)}>
            <TextField
              label={theme.themeForm[language].userName}
              {...register("username", { required: true })}
              error={errors.username}
            />
            <TextField
              label={theme.themeForm[language].email}
              type="email"
              {...register("email", { required: true })}
              error={errors.email}
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
          <ul>
            {userList.map((user, index) => (
              <li key={index}>
                {theme.themeForm[language].userName} : {user.name}.{" "}
                {theme.themeForm[language].email}: {user.email}
              </li>
            ))}
          </ul>
        </FormContainer>
      ) : (
        <FormContainer>
          <h1>{theme.themeText[language].nothing}</h1>
        </FormContainer>
      )}
    </div>
  );
}

export default register;
