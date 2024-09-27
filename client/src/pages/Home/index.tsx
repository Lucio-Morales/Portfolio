import { useNavigate } from 'react-router-dom';
import Option from './Option';
import { HomeBox } from './styles/Home';

const Home = () => {
  const navigate = useNavigate();

  return (
    <HomeBox>
      <h1>Welcome! 🌟</h1>
      <h2>I'm Lucio😄 how can I help you?❤️</h2>
      <Option
        onClick={() => navigate('/projects')}
        number={'1.'}
        text={'I want to see your projects 📁'}
      />
      <Option
        onClick={() => navigate('/about')}
        number={'2.'}
        text={'I want to know more about you 😊'}
      />
      <Option
        onClick={() => navigate('/contact')}
        number={'3.'}
        text={'I want to talk to you 👋'}
      />
    </HomeBox>
  );
};

export default Home;
