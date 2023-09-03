import React, { useState } from "react";
import "./index.css";

const MemberForm = ({ onSubmit }) => {
  const [data, setData] = useState({});

  const handleInputChange = (event) => {
    setData({ ...data, [event.target.name]: event.target.value });
  };

  const handleOnSubmit = (event) => {
    event.preventDefault();
    onSubmit(data);
    setData({}); // Reset the data state to clear the input fields
  };

  return (
    <form className="member-form" onSubmit={handleOnSubmit}>
      <h2>Agrega a un miembro </h2>
      <label htmlFor="name">Nombre</label>
      <input
        placeholder="Ingresa nombre"
        name="name"
        className="member-form__input"
        value={data.name || ""}
        onChange={handleInputChange}
      />
      <label htmlFor="username">Usuario</label>
      <input
        placeholder="Ingresa usuario"
        name="username"
        className="member-form__input"
        value={data.username || ""}
        onChange={handleInputChange}
      />
      <button className="member-form__submit" type="submit">
        Agregar
      </button>
    </form>
  );
};

MemberForm.defaultProps = {
  onSubmit: () => {}
};

export default MemberForm;
