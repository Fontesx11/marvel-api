import { HomePage } from './pages/HomePage/page';
import {BrowserRouter} from 'react-router-dom';
import {Routes,Route} from 'react-router-dom'
import { CharacterPage } from './pages/CharacterPage/page';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<HomePage/>}/>
        <Route path='/:id' element={<CharacterPage/>}/>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
