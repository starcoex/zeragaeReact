import React, { useState } from "react";

function App() {
  const [value, setValue] = useState("");
  function onChange(event: React.FormEvent<HTMLInputElement>) {
    const { value } = event.currentTarget;
    setValue(value);
    // console.log(value);
  }
  const onSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    console.log("Send", value);
  };
  return (
    <div>
      <form action='' onSubmit={onSubmit}>
        <input
          type='text'
          placeholder='username'
          value={value}
          onChange={onChange}
        />
        <button>Send</button>
      </form>
    </div>
  );
}

export default App;
