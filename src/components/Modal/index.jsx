import hook from "./hook";
import {
  TextField,
  Button,
  Select,
  FormControl,
  InputLabel,
  MenuItem,
  InputAdornment,
} from "@mui/material";

import {
  ModalOverlay,
  ModalContainer,
  FormContainer,
  Container,
  ErrorTextForm,
} from "./styles";

function modal() {
  const {
    register,
    handleSubmit,
    errors,
    onSubmit,
    categoryList,
    handleChange,
    category,
    setIsModal,
    isModal,
    language,
    theme,
  } = hook();

  return (
    <Container>
      <ModalOverlay onClick={() => setIsModal({ isOpen: false })} />
      <ModalContainer>
        {isModal.type === "PRODUCT" && (
          <>
            <h1>{theme.themeForm[language].createProductTitle}</h1>
            <FormContainer onSubmit={handleSubmit(onSubmit)}>
              <TextField
                label={theme.themeForm[language].wording}
                {...register("wording", { required: true })}
                error={errors?.wording?.message}
              />
              <ErrorTextForm>{errors?.wording?.message}</ErrorTextForm>
              <TextField
                label={theme.themeForm[language].describe}
                {...register("describe", { required: true })}
                error={errors?.describe?.message}
              />
              <ErrorTextForm>{errors?.describe?.message}</ErrorTextForm>
              <TextField
                label={theme.themeForm[language].price}
                {...register("price", { required: true })}
                error={errors?.price?.message}
              />
              <ErrorTextForm>{errors?.price?.message}</ErrorTextForm>
              <FormControl>
                <InputLabel>{theme.themeForm[language].category}</InputLabel>
                <Select
                  value={category}
                  label={theme.themeForm[language].category}
                  {...register("category", { required: true })}
                  error={errors?.category?.message}
                  onChange={handleChange}
                >
                  {categoryList.map((cat, index) => (
                    <MenuItem key={index} value={cat.id}>
                      {cat.name}
                    </MenuItem>
                  ))}
                </Select>
              </FormControl>
              <ErrorTextForm>{errors?.category?.message}</ErrorTextForm>
              <Button variant="contained" type="submit" disabled={false}>
                {theme.themeButton[language].createProduct}
              </Button>
            </FormContainer>
          </>
        )}
        {isModal.type === "PROMO" && (
          <>
            <h1>{theme.themeForm[language].createPromoTitle}</h1>
            <FormContainer onSubmit={handleSubmit(onSubmit)}>
              <label htmlFor="productId">{isModal.wording}</label>
              <input
                value={isModal.id}
                type="hidden"
                {...register("productId", { required: true })}
              />
              <TextField
                label={theme.themeForm[language].percentage}
                type="number"
                inputProps={{
                  min: 0,
                  max: 100,
                }}
                {...register("percent", { required: true })}
                error={errors?.percent?.message}
              />
              <ErrorTextForm>{errors?.percent?.message}</ErrorTextForm>
              <TextField
                label={theme.themeForm[language].startDate}
                type="date"
                InputProps={{
                  startAdornment: <InputAdornment position="start" />,
                }}
                {...register("startDate", { required: true })}
                error={errors?.startDate?.message}
              />
              <ErrorTextForm>{errors?.startDate?.message}</ErrorTextForm>
              <TextField
                label={theme.themeForm[language].endDate}
                type="date"
                InputProps={{
                  startAdornment: <InputAdornment position="start" />,
                }}
                {...register("endDate", { required: true })}
                error={errors?.endDate?.message}
              />
              <ErrorTextForm>{errors?.endDate?.message}</ErrorTextForm>
              <Button variant="contained" type="submit" disabled={false}>
                {theme.themeButton[language].createPromo}
              </Button>
            </FormContainer>
          </>
        )}
      </ModalContainer>
    </Container>
  );
}

export default modal;
