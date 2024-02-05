import Card from '../../components/Card';
import './index.css';

function App() {
  return (
    <div className="App">
      <div id='draggable-zone'>
        <Card backgroundColor="lightblue" index={0} />
        <Card backgroundColor="lightgreen" index={1} />
        <Card backgroundColor="lightcoral" index={2} />
      </div>
    </div>
  );
}

export default App;
