import React from "react";
import Member from "./Member";
import "./index.css";

const MemberList = ({ data }) => {
  return (
    <section>
      <h1>Lista de miembros </h1>
      {data.length > 0 ? (
        <table>
          <tr>
            <th>Nombre</th>
            <th>Usuario</th>
          </tr>
          {data.map((member) => (
            <Member key={member.name} {...member} />
          ))}
        </table>
      ) : (
        <p>No hay miembros todavía </p>
      )}
    </section>
  );
};

MemberList.defaultProps = {
  data: []
};

export default MemberList;
