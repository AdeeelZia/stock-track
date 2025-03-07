import Heading from "../../components/common/Heading";
import Form from "../../components/Form";

export default function Login() {
  return (
    <div className="m-4 flex h-screen">
      <div className="w-[50%]">
        <img src={"/image/login.avif"} alt="image" className="min-h-screen" />
      </div>
      <div className="w-[50%]">
        <Heading level={1} text="Welcome Back" />
        <p>Enter your email and password to access your account</p>
        <Form />
      </div>
    </div>
  );
}
