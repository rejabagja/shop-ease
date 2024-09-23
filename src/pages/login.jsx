const InputForm = (props) => {
  const {label, type, name, placeholder} = props;
  return (
    <div className="mb-6">
      <label 
        htmlFor={name} 
        className="block text-slate-700 text-sm mb-2 font-bold"
      >
        {label}
      </label>
      <input 
        type={type} 
        name={name} 
        id={name} 
        placeholder={placeholder}
        className="text-sm border w-full px-3 py-2 rounded text-slate-700"
      />
    </div>
  );
}

const LoginPage = () => {

  const handleLogin = (event) => {
    event.preventDefault();
  }

  return (
    <div className="min-h-screen flex justify-center items-center">
      <div className="w-full max-w-xs">
        <h1 className="text-3xl font-bold mb-2 text-blue-900 text-center">ShopEase Login</h1>
        <p className="font-medium text-slate-600 mb-2 text-center">Welcome, Please enter you details</p>
        <img src="/images/login-ilustrate.svg" alt="login ilustrate" className="max-w-60 block mx-auto mb-2" />
        <form onSubmit={handleLogin} method="post">
          <InputForm
            label="Email"
            type="email"
            name="email"
            placeholder="example@mail.com"
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