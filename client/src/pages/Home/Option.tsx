import { OptionParagraph } from './styles/Home';
const Option = ({ number, text }) => {
  return (
    <OptionParagraph>
      <span>{number}</span>
      {text}
    </OptionParagraph>
  );
};

export default Option;
