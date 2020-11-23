import React, { useState } from "react";

export const AccountCreation: React.FC = () => {
  const [newUser, setNewUser] = useState(true);
  const [createData, setCreateData] = useState({ username: "", password: "" });
  const [logData, setLogData] = useState({ username: "", password: "" });

  if (newUser) {
    return (
      <div id="account_creation">
        <form>
          <label className="form_block_view">Create a free account</label>
          <input
            className="input_box form_block_view"
            type="text"
            placeholder="username"
            value={createData.username}
            onChange={(e) =>
              setCreateData({
                username: e.target.value,
                password: createData.password,
              })
            }
          />
          <input
            className="input_box form_block_view"
            type="text"
            placeholder="password"
            value={createData.password}
            onChange={(e) =>
              setCreateData({
                username: createData.username,
                password: e.target.value,
              })
            }
          />
          <button className="form_block_view">Create account</button>
        </form>
        <button onClick={() => setNewUser(!newUser)}>
          I already have an account
        </button>
      </div>
    );
  } else {
    return (
      <div id="account_creation">
        <form>
          <label className="form_block_view">Sign in</label>
          <input
            className="input_box form_block_view"
            type="text"
            placeholder="username"
            value={logData.username}
            onChange={(e) =>
              setLogData({
                username: e.target.value,
                password: logData.password,
              })
            }
          />
          <input
            className="input_box form_block_view"
            type="text"
            placeholder="password"
            value={logData.password}
            onChange={(e) =>
              setLogData({
                username: logData.username,
                password: e.target.value,
              })
            }
          />
          <button className="form_block_view">Sign in</button>
        </form>
        <button onClick={() => setNewUser(!newUser)}>
          I need to make an account
        </button>
      </div>
    );
  }
};
