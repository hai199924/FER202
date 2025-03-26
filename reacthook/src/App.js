import './App.css';
import SearchFilter from './components/Search';

function App() {
  const data = ['Apple', 'Banana', 'Orange', 'Pear', 'Pineapple'];
  return (
    <div>
            <>
              <h1>Search Filter Example</h1>
              <SearchFilter data={data} />
            </>
           
      
    </div>
  );
}
export default App;
