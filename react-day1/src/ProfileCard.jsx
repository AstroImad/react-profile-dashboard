import { useState } from 'react';

function ProfileCard({ name, role, skills }) {

    const [isFollowing, setIsFollowing] = useState(false);
    const hasSkills = skills.length > 0;
    return (
      <div className="profile-card">
        <h2>{name}</h2>
        <p>{role}</p>

        {hasSkills ? (
        <ul>
            {skills.map((skill, index) => (
                <li key={index}>{skill}</li>
            ))}
            </ul>
        ) : (
            <p>No skills listed.</p>
        )}

        {/* 3. The Button with logic */}
        <button onClick={() => setIsFollowing(prev => !prev)}>
            {isFollowing ? "Unfollow" : "Follow"}
        </button>
        </div>
    );
}

export default ProfileCard;