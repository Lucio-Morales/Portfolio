import Option from './Option';
import { HomeBox } from './styles/Home';

const Home = () => {
  return (
    <HomeBox>
      <h1>Welcome!</h1>
      <h2>¿How can I help you?</h2>
      <Option text={'1. I wanto to see your projects!'} />
      <Option text={'2. I wanto to know you!'} />
      <Option text={'3. Just I want to see :)!'} />
    </HomeBox>
  );
};

export default Home;
