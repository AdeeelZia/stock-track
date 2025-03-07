interface InputProps {
  type: "text" | "password" | "email" | "number" | "tel" | "url";
  placeholder: string;
  customStyleInput?: string;
}

const InputField: React.FC<InputProps> = ({
  type,
  placeholder,
  customStyleInput = "",
}) => {
  return (
    <input
      type={type}
      placeholder={placeholder}
      className={`px-4 py-0.5 rounded-md text-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500 transition duration-300 ease-in-out ${customStyleInput}`}
    />
  );
};

export default InputField;
