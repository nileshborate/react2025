import Card from './components/Card';

function App() {
  return (
    <>
      <Card
        title="Primary Card"
        description="This card has a blue left border"
        type="primary"
      />

      <Card
        title="Success Card"
        description="This card has a green left border"
        type="success"
      />
      <Card
        title="Danger Card"
        description="This card has a red left border"
        type="danger"
      />
    </>
  );
}

export default App;
