import { useState } from 'react';

function ProfileCard({ name, role, skills }) {

    const [isFollowing, setIsFollowing] = useState(false);

    return (
      <div className="card">
        <h2>{name}</h2>
        <p>{role}</p>
        <ul>
            {skills.map((skill, index) => (
                <li key={index}>{skill}</li>
            ))}
            </ul>
        {/* 3. The Button with logic */}
        <button onClick={() => setIsFollowing(!isFollowing)}>
            {isFollowing ? "Unfollow" : "Follow"}
        </button>
        </div>
    );
}

export default ProfileCard;