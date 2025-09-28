import StarRating from "./components/StarRating";
import "./styles.css";

export default function App() {
  return (
    <div className="App">
      <h1>Star Rating</h1>
      <StarRating starCount={10} />
    </div>
  );
}
