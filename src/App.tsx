import './App.css'
import {BestSellers} from "./BestSellers.tsx";
import {Header} from "./Header.tsx";

function App() {
 
	return (
		<div className='appContainer'>
      <Header/>
			<BestSellers/>
		</div>
	)
}

export default App
