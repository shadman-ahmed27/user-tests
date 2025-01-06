import { useState } from "react";

function UserForm({ onUserAdd }) {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");

  const handleSumit = (e) => {
    e.preventDefault();

    onUserAdd({ name, email });
  };

  return (
    <form onSubmit={handleSumit}>
      <div>
        <label htmlFor="name">Name</label>
        <input
          id="name"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
      </div>
      <div>
        <label htmlFor="email">Email</label>
        <input
          id="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
      </div>
      <div>
        <button>Add User</button>
      </div>
    </form>
  );
}

export default UserForm;
