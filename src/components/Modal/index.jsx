import hook from "./hook";
import {
  ModalOverlay,
  ModalContainer,
  FormContainer,
  CloseModal,
} from "./styles";

function modal({ setModalIsOpen, setIsPromoModal, type, id, wording }) {
  const { register, handleSubmit, reset, errors, onSubmit, categoryList } =
    hook(type);

  return (
    <ModalOverlay>
      <ModalContainer>
        <CloseModal
          onClick={() =>
            type === "PRODUCT" ? setModalIsOpen(false) : setIsPromoModal(false)
          }
        ></CloseModal>
        {type === "PRODUCT" && (
          <>
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
          </>
        )}
        {type === "PROMO" && (
          <>
            <h1>{"Creation d'une promotion"}</h1>
            <FormContainer onSubmit={handleSubmit(onSubmit)}>
              <label htmlFor="productId">{wording}</label>
              <input
                value={id}
                type="hidden"
                {...register("productId", { required: true })}
              />
              <label htmlFor="percent">Pourcentage</label>
              <input {...register("percent", { required: true })} />
              <label htmlFor="startDate">Date de debut</label>
              <input {...register("startDate", { required: true })} />
              <label htmlFor="endDate">Date de fin</label>
              <input {...register("endDate", { required: true })} />
              <input type="submit" disabled={false} />
            </FormContainer>
          </>
        )}
      </ModalContainer>
    </ModalOverlay>
  );
}

export default modal;
