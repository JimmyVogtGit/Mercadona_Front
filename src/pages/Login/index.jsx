import hook from "./hook";

function login() {
  const { register, handleSubmit, errors, onSubmit } = hook();

  return (
    <div>
      <form onSubmit={handleSubmit(onSubmit)}>
        <label htmlFor="userName">Nom d&apos;utilisateur</label>
        <input {...register("userName", { required: true })} />
        {errors.userName && <span>Le champ nom utilisateur est requis</span>}
        <label htmlFor="password">Password :</label>
        <input {...register("password", { required: true })} />
        {errors.password && <span>Le champ password est requis</span>}
        <input type="submit" disabled={false} />
      </form>
    </div>
  );
}

export default login;
