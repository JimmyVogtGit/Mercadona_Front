import hook from "./hook";

function register() {
  const { register, handleSubmit, errors, onSubmit, userList } = hook();

  return (
    <div>
      <form onSubmit={handleSubmit(onSubmit)}>
        <label htmlFor="name">Nom d&apos;utilisateur</label>
        <input {...register("name", { required: true })} />
        {errors.name && <span>Le champ nom utilisateur est requis</span>}
        <label htmlFor="email">Email :</label>
        <input
          id="email"
          {...register("email", { required: true, pattern: /^\S+@\S+$/i })}
        />
        {errors.email && (
          <span>
            Le champ email est requis et doit être une adresse email valide
          </span>
        )}
        <label htmlFor="password">Password :</label>
        <input {...register("password", { required: true })} />
        {errors.password && <span>Le champ password est requis</span>}
        <input type="submit" disabled={false} />
      </form>
      <ul>
        {userList.map((user, index) => (
          <li
            key={index}
          >{`utilisateur : ${user.name}. adresse mail : ${user.email}`}</li>
        ))}
      </ul>
    </div>
  );
}

export default register;
