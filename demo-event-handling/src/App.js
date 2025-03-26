import './App.css';
import EventHandlingDemo from './components/EventHandlingDemo';
import MyAlert from './components/MyAlert';
import MyDropdown from './components/MyDropdown';
import MyModal from './components/MyModal';
import MyRadioButton from './components/MyRadioButton';


function App() {
  return (
    <div>
    <h1>Vi du 1</h1>
    <EventHandlingDemo/>
    <h1>Vi du 2</h1>
    <MyAlert/>
    <h1>Vi du 3</h1>
    <MyDropdown/>;
    <h1>Vi du 4</h1>
    <MyModal/>
    <h1>Vi du 5</h1>
    <MyRadioButton/>
    </div>
  );
}
export default App;
