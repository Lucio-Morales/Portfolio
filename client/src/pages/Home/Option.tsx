import { OptionParagraph } from './styles/Home';
const Option = ({ onClick, number, text }) => {
  return (
    <OptionParagraph onClick={onClick}>
      <span>{number}</span>
      {text}
    </OptionParagraph>
  );
};

export default Option;
