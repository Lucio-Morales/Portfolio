import Option from './Option';
import { HomeBox } from './styles/Home';

const Home = () => {
  return (
    <HomeBox>
      <h1>Welcome! 🌟</h1>
      <h2>I'm Lucio 😄 how can I help you? ❤️</h2>
      <Option number={'1.'} text={'I want to see your projects 📁'} />
      <Option number={'2.'} text={'I want to know more about you. 😊'} />
      <Option number={'3.'} text={'I’m just visiting.👋'} />
    </HomeBox>
  );
};

export default Home;
