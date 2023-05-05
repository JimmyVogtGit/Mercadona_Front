import hook from "./hook";

function login() {
  const {
    register,
    handleSubmit,
    errors,
    onSubmit,
    isLog,

    username,
  } = hook();

  return (
    <div>
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
        <div>
          <h1>Bienvenue {username}</h1>
        </div>
      )}
    </div>
  );
}

export default login;
