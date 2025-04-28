"use client";

import React, { useEffect, useState } from "react";

interface User {
  id: string;
  name: string;
  username: string;
  password: string;
  phone: number;
  email: string;
}

const UserList = () => {
  const [users, setUsers] = useState<User[]>([]);

  const [loading, setLoading] = useState<boolean>(true);

  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchUser = async () => {
      try {
        const response = await fetch(" ");

        if (!response.ok) {
          throw new Error("Network response was not OK");
        }

        const data: User[] = await response.json();

        setUsers(data);
      } catch (error) {
        setError(error instanceof Error ? error.message : "An Error occoured");
      } finally {
        setLoading(false);
      }
    };

    fetchUser();
  }, []);

  if (loading) {
    return <h1> loading...</h1>;
  }

  if (error) {
    return <h1> Error: {error}</h1>;
  }

  return (
    <table>
      <thead>
        <tr>
          <th>Name</th>
        </tr>
      </thead>
      <tbody>
        {users.map((user) => (
          <tr key={user.id}>
            <td>{user.name}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default UserList;
