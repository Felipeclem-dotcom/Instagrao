import { stories } from "../data/stories";

function Stories() {
  return (
    <section className="stories">
      {stories.map((story) => (
        <div className="story" key={story.name}>
          <div className="story-border">
            <div className="story-image-box">
              <img src={story.image} alt={story.name} className="story-image" />
            </div>
          </div>
          <p>{story.name.toLowerCase()}</p>
        </div>
      ))}
    </section>
  );
}

export default Stories;
