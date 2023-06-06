import Layout from "@/components/Layout";
import LoginSesion from "@/components/LoginSesion";

const Login = () => {
  return (
        <Layout
          pagina="Login"
        >
          Desde Login
          <div className="flex flex-col justify-center items-center h-100% md:grid grid-cols-2 gap-4 ">
            <LoginSesion/>
          </div>
        </Layout>

  );
}

export default Login;