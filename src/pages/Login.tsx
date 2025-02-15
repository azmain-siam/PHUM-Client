import { Button } from "antd";
import { useForm } from "react-hook-form";
import { useLoginMutation } from "../redux/features/auth/authApi";

const Login = () => {
  const { register, handleSubmit } = useForm();
  const [login, { data, error }] = useLoginMutation();

  const onSubmit = (data) => {
    const userInfo = {
      ...data,
    };

    login(userInfo);
  };

  console.log("Data =>", data);
  console.log("Error =>", error);

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <div>
        <label htmlFor="id">ID:</label>
        <input type="text" id="id" placeholder="Name" {...register("id")} />
      </div>
      <div>
        <label htmlFor="password">Password:</label>
        <input
          type="text"
          id="password"
          {...register("password")}
          placeholder="Password"
        />
      </div>

      <Button htmlType="submit">Login</Button>
    </form>
  );
};

export default Login;
