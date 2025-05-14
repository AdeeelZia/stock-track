import { JSX } from "react";

interface HeadingProps {
  text: string;
  level: 1 | 2 | 3 | 4 | 5 | 6;
  customStyleText?: string;
}

const Heading: React.FC<HeadingProps> = ({
  text,
  level = 2,
  customStyleText = "",
}) => {
  const Tag = `h${level}` as keyof JSX.IntrinsicElements;

  return (
    <Tag className={`text-xl font-bold text-center ${customStyleText}`}>
      {text}
    </Tag>
  );
};

export default Heading;
