const Member = ({ name, username }) => {
  return (
    <tr>
      <td>{name}</td>
      <td>{username}</td>
    </tr>
  );
};

export default Member;
