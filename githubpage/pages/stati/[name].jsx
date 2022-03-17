import fetch from "isomorphic-unfetch";

const name = ({ user, time }) => {
  const username = user && user.name;
  return (
    <div>
      sdf
      {username}
      {time}
    </div>
  );
};

export default name;
