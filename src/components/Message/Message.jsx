const Message = ({ name = "Somebody", fathers, online }) => {
  return (
    <div>
      <h3>{name}</h3>
      <p>{fathers}</p>
      <p>Status: {online ? "active" : "disabled"}</p>
    </div>
  );
};

export default Message;
