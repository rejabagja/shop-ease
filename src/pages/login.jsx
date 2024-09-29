import { useNavigate } from "react-router-dom";
import InputForm from "../components/InputForm";


const LoginPage = () => {
  // block code for fetching and dispatch users data to redux store
  // -----
  // 

  const navigate = useNavigate();

  const handleLogin = (event) => {
    localStorage.setItem('username', event.target.username.value)
    navigate("/")
    event.preventDefault();
  }

  return (
    <div className="min-h-screen flex justify-center items-center">
      <div className="w-full max-w-xs">
        <h1 className="text-3xl font-bold mb-2 text-blue-900 text-center">ShopEase Login</h1>
        <p className="font-medium text-slate-600 mb-2 text-center">Welcome, Please enter you details</p>
        <img src="/images/login-ilustrate.svg" alt="login ilustration" className="max-w-60 block mx-auto mb-2" />
        <form onSubmit={handleLogin} method="post">
          <InputForm
            label="Username"
            type="text"
            name="username"
            placeholder="Johnd"
          />
          <InputForm
            label="Password"
            type="password"
            name="password"
            placeholder="******"
          />
          <button 
            type="submit" 
            className="h-10 w-full px-6 font-semibold rounded-md text-white bg-blue-900 hover:bg-blue-800"
          >
            login
          </button>
        </form>
      </div>
    </div>
  );
}

export default LoginPage;