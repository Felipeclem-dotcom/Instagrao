import { suggestions } from "../data/suggestions";

function Suggestions() {
  return (
    <aside className="suggestions">
      <div className="profile-box">
        <div className="profile-avatar"></div>
        <div>
          <strong>_felipe</strong>
          <p>Felipe</p>
        </div>
        <span>Switch</span>
      </div>

      <div className="suggestions-title">
        <strong>Suggested for you</strong>
        <span>See all</span>
      </div>

      <div className="suggestions-list">
        {suggestions.map((item) => (
          <div className="suggestion" key={item.name}>
            <img src={item.image} alt={item.name} />
            <div>
              <strong>{item.name}</strong>
              <p>{item.info}</p>
            </div>
            <span>Follow</span>
          </div>
        ))}
      </div>
    </aside>
  );
}

export default Suggestions;