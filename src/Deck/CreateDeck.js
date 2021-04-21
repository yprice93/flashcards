import React, { useState } from "react";
import { Link } from "react-router-dom";
import { createDeck } from "../utils/api/index";
import Form from "./Form";

function CreateDeck() {
  const [deck, setDeck] = useState({ name: "", description: "" });

  function handleSubmit(event) {
    event.preventDefault();
    createDeck(deck);
  }

  function changeName(e) {
    setDeck({ ...deck, name: e.target.value });
  }

  function changeDesc(e) {
    setDeck({ ...deck, description: e.target.value });
  }

  return (
    <section className="container">
      <nav arial-label="breadcrumb">
        <ol className="breadcrumb">
          <li key="0" className="breadcrumb-item">
            <Link to="/">Home</Link>
          </li>
          <li key="1" className="breadcrumb-item active" aria-current="page" s>
            Create Deck
          </li>
        </ol>
      </nav>
      <h2>Create Deck</h2>
      <Form
        handleSubmit={handleSubmit}
        deck={deck}
        changeName={changeName}
        changeDesc={changeDesc}
      />
    </section>
  );
}

export default CreateDeck;
