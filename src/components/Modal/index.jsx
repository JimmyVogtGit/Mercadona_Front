import hook from "./hook";
import { ModalOverlay, ModalContainer, FormContainer } from "./styles";

function modal({ setModalIsOpen }) {
  const { register, handleSubmit, reset, errors, onSubmit, categoryList } =
    hook();

  return (
    <ModalOverlay>
      <ModalContainer>
        <button onClick={() => setModalIsOpen(false)}>click</button>
        <h1>{"Creation d'un produit"}</h1>
        <FormContainer onSubmit={handleSubmit(onSubmit)}>
          <label htmlFor="wording">Libellé</label>
          <input {...register("wording", { required: true })} />
          <label htmlFor="describe">Description</label>
          <input {...register("describe", { required: true })} />
          <label htmlFor="price">Prix</label>
          <input
            type="number"
            min="0"
            max="100"
            {...register("price", { required: true })}
          />
          <label htmlFor="category">Category</label>
          <select {...register("category", { required: true })}>
            {categoryList.map((cat) => (
              <option key={cat.id} value={cat.id}>
                {cat.name}
              </option>
            ))}
          </select>

          {/* <label htmlFor="image">Ajouter une image :</label>
          <input type="file" {...register("image", { required: true })} /> */}

          <input type="submit" disabled={false} />
        </FormContainer>
      </ModalContainer>
    </ModalOverlay>
  );
}

export default modal;
