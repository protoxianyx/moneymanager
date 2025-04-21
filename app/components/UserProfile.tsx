"use client";

import React, { useState } from "react";

interface UserProfile {
  name: string;
  age: number;
  email: string;
}

const UserProfile = () => {
  const [profile, setProfile] = useState<UserProfile>({
    name: "",
    age: 0,
    email: "",
  });

  const updateName = (name: string) => {
    setProfile((previousProfile) => ({ ...previousProfile, name: name }));
  };

  const updateAge = (age: string) => {
    setProfile((previousProfile) => ({ ...previousProfile, age: Number(age) }));
  };

  const updateEmail = (email: string) => {
    setProfile((previousProfile) => ({ ...previousProfile, email }));
  };

  return (
    <div>
      <h2>User Profile</h2>

      <input
        type="text"
        placeholder="Name"
        value={profile.name}
        onChange={(e) => updateName(e.target.value)}
        className="newborder"
      />

      <input
        type="number"
        placeholder="Age"
        value={profile.age > 0 ? profile.age : ""}
        onChange={(e) => updateAge(e.target.value)}
        className="newborder"
      />

      <input
        type="email"
        placeholder="email"
        value={profile.email}
        onChange={(e) => updateEmail(e.target.value)}
        className="newborder"
      />

      <br />
      <hr />
      <h2 className="m-2">Entered Details:</h2>
      <p>Name: {profile.name}</p>
      <p>Age:{profile.age}</p>
      <p>Email:{profile.email}</p>
    </div>
  );
};

export default UserProfile;
