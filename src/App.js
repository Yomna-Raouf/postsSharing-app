import "./App.css";
import PostsList from "./components/postsList/PostsList";
import PostContextProvider from "./providers/PostContextProvider";

function App() {
  return (
    <div className="App">
      <PostContextProvider>
        <PostsList />
      </PostContextProvider>
    </div>
  );
}

export default App;
