import "./App.css";
import Sidebar from "./components/Sidebar";
import Stories from "./components/Stories";
import Feed from "./components/Feed";
import Suggestions from "./components/Suggestions";

function App() {
  return (
    <div className="app">
      <Sidebar />

      <main className="main-content">
        <div className="feed-wrapper">
          <Stories />
          <Feed />
        </div>

        <Suggestions />
      </main>
    </div>
  );
}

export default App;