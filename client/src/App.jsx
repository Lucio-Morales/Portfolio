import Nav from './components/nav/Nav';
import Home from './components/home/Home';
import About from './components/about/About';
import Projects from './components/projects/Projects';
import Contact from './components/contact/Contact';
import styles from './App.module.css';
import { Routes, Route } from 'react-router-dom';

function App() {
	return (
		<div className={styles.appContainer}>
			<Nav />
			<Routes>
				<Route path='/' element={<Home />} />
				<Route path='/about' element={<About />} />
				<Route path='/projects' element={<Projects />} />
				<Route path='/contact' element={<Contact />} />
			</Routes>
		</div>
	);
}

export default App;
