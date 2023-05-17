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

import { ModalOverlay, ModalContainer, FormContainer } from "./styles";

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
  } = hook();

  return (
    <>
      <ModalOverlay onClick={() => setIsModal({ isOpen: false })} />

      <ModalContainer>
        {isModal.type === "PRODUCT" && (
          <>
            <h1>{"Creation d'un produit"}</h1>
            <FormContainer onSubmit={handleSubmit(onSubmit)}>
              <TextField
                label="Libellé"
                {...register("wording", { required: true })}
                error={errors.wording}
              />
              <TextField
                label="Description"
                {...register("describe", { required: true })}
                error={errors.describe}
              />
              <TextField
                label="Prix"
                {...register("price", { required: true })}
                error={errors.price}
              />
              <FormControl>
                <InputLabel>Category</InputLabel>
                <Select
                  value={category}
                  label="Category"
                  {...register("category", { required: true })}
                  error={errors.category}
                  onChange={handleChange}
                >
                  {categoryList.map((cat, index) => (
                    <MenuItem key={index} value={cat.id}>
                      {cat.name}
                    </MenuItem>
                  ))}
                </Select>
              </FormControl>

              <Button variant="contained" type="submit" disabled={false}>
                Creer produit
              </Button>
            </FormContainer>
          </>
        )}
        {isModal.type === "PROMO" && (
          <>
            <h1>{"Creation d'une promotion"}</h1>
            <FormContainer onSubmit={handleSubmit(onSubmit)}>
              <label htmlFor="productId">{isModal.wording}</label>
              <input
                value={isModal.id}
                type="hidden"
                {...register("productId", { required: true })}
              />
              <TextField
                label="Pourcentage"
                {...register("percent", { required: true })}
                error={errors.percent}
              />
              <TextField
                label="startDate"
                type="date"
                InputProps={{
                  startAdornment: <InputAdornment position="start" />,
                }}
                {...register("startDate", { required: true })}
                error={errors.startDate}
              />
              <TextField
                label="endDate"
                type="date"
                InputProps={{
                  startAdornment: <InputAdornment position="start" />,
                }}
                {...register("endDate", { required: true })}
                error={errors.endDate}
              />
              <Button variant="contained" type="submit" disabled={false}>
                Creer promotion
              </Button>
            </FormContainer>
          </>
        )}
      </ModalContainer>
    </>
  );
}

export default modal;
