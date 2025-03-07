import InputField from "./common/Input";
const Form = () => {
  return (
    <form>
      <div className="mb-6">
        <label
          htmlFor="email"
          className="block text-lg font-medium text-gray-700 mb-2"
        >
          Email
        </label>
        <InputField type="text" placeholder="Enter your Email Address" />
      </div>
      <div className="mb-6">
        <label
          htmlFor="password"
          className="block text-lg font-medium text-gray-700 mb-2"
        >
          Password
        </label>
        <InputField type="text" placeholder="Enter your Password" />
      </div>

      <button
        type="submit"
        className="w-full py-3 bg-blue-500 text-white font-semibold rounded-md hover:bg-blue-600 transition"
      >
        Log In
      </button>
    </form>
  );
};

export default Form;
