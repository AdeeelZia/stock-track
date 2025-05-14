import Heading from "../../../components/common/Heading";
import InputField from "../../../components/common/Input";

export default function Login() {
  return (
    <div className="flex justify-center items-center h-screen">
      <div className="flex items-center gap-[10.75rem]">
        <div>
          <img src="/image/login.jpg" alt="login_avatar" width={387} />
        </div>
        <div>
          <Heading level={1} text="Shock Track" />
          <p>Login</p>
          <InputField />
          <InputField />
        </div>
      </div>
    </div>
  );
}
