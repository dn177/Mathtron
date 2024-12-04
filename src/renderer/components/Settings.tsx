import * as React from 'react';
import { MemoryRouter as Router, Routes, Route, Link } from 'react-router-dom';

function Settings() {
  return (
    <div>
      <Link to="/">&lt; Back</Link>
      <p>Set Macros:</p>
      <input
        type="text"
        name="macrosettings"
        id="macrosetting"
        placeholder="Default is '\\f': '#1f(#2)'"
      />
    </div>
  );
}

export default Settings;
