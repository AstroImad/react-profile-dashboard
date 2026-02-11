import ProfileCard from "./ProfileCard";
import Counter from './Counter';

function App() {
  return (
    <div>

      {/* Card 1 */}
      <ProfileCard
        name="Imad"
        role="Data Scientist"
        skills={["Python", "ML", "React"]}
      />

      {/* Card 2 */}
      <ProfileCard
        name="Eiya"
        role="Engineer"
        skills={["Excel", "Powerpoint", "Communication"]}
      />

      <Counter />
      
      </div>
  );
}

export default App;
