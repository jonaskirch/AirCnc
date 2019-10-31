import React, { useState } from "react";
import api from "../../services/api";

export default function Login({ history }) {
  const [email, setEmail] = useState("");

  async function handleSubmit(e) {
    e.preventDefault();
    const resp = await api.post("/sessions", { email });
    const { _id } = resp.data;
    localStorage.setItem("user", _id);
    history.push("/dashboard");
  }

  return (
    <>
      <p>
        Ofereça <strong>spots</strong> para programadores e encontre{" "}
        <strong>talentos</strong> para sua empresa
      </p>
      <form onSubmit={handleSubmit}>
        <label htmlFor="email">EMAIL *</label>
        <input
          type="email"
          id="email"
          placeholder="Seu melhor e-mail"
          value={email}
          onChange={e => setEmail(e.target.value)}
        ></input>

        <button className="btn" type="submit">
          Entrar
        </button>
      </form>
    </>
  );
}
