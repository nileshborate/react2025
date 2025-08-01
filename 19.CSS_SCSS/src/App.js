import Badge from './components/Badge';
import Button from './components/Button';
import Card from './components/Card';
import DynamicBox from './components/DynamicBox';
import ToggleButton from './components/ToggleButton';

function App() {
  return (
    <>
      <Card />
      <Button />
      <ToggleButton />
      <DynamicBox />
      <Badge text="Completed" type="success" />
      <Badge text="Failed" type="error" />
    </>
  );
}

export default App;
