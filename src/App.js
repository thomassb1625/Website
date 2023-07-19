import './App.css';

function App() {
  const name = "Thomas Baker";

  return (
    <div>
      <h1 class="text-3xl font-serif font-bold underline text-left pt-2 pl-2">{name}</h1>
      <div class="flex flex-row text-2xl font-serif underline pl-2">
        <div class='pr-8'>projects</div>
        <div class='pr-8'>resume</div>
        <div>contact</div>
      </div>
    </div>
  );
}

export default App;
