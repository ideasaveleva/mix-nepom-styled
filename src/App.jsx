import {Controls} from './components/Controls';
import  {Header}  from './components/Header';
import  {Main} from './components/Main';


export const App = function() {
  return (
    <>
      <Header />
      <Main>
        <Controls />
      </Main>
    </>
  );
}


