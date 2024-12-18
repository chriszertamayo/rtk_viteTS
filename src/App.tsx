import Counter from "./components/Counter";
import "./App.css";
import PostList from "./components/PostList";

//Store
// interface CounterState {
//   value: number;
// }

// interface UserState {
//   isSignedIn: boolean;
// }

// //Actions
// const increment = { type: "INCREMENT", payload: 1 };
// const decrement = { type: "DECREMENT", payload: 1 };

function App() {
  return (
    <div>
      <h2>Redux Complete Tutorial</h2>
      <Counter />
      <PostList />
    </div>
  );
}

export default App;
