// // import Link from "next/link";
// import { useState } from "react";
// import { useRouter } from "next/router";

// const App = () => {
//   const [name, setName] = useState("");
//   const router = useRouter();
//   return (
//     <div>
//       <button type="button" onClick={() => router.push("/tomato")}>
//         tomato로 가기
//       </button>
//       <p>이름</p>
//       <input
//         value={name}
//         onChange={(e) => setName(e.target.value)}
//         style={{ marginRight: "12px" }}
//       />
//       <button type="button" onClick={() => router.push(`/vegetable/${name}`)}>
//         {name}으로 가기
//       </button>
//     </div>
//   );
// };

// export default App;

// import fetch from "isomorphic-unfetch";

// const index = ({ user }) => {
//   const username = user && user.name;
//   return <div>{username}</div>;
// };

// export const getServerSideProps = async () => {
//   try {
//     const res = await fetch("https://api.github.com/users/jerrynim");
//     if (res.status === 200) {
//       const user = await res.json();
//       return { props: { user } };
//     }
//     return { props: {} };
//   } catch (e) {
//     console.log(e);
//     return { props: {} };
//   }
// };

// export default index;

import { useState } from "react";
import Link from "next/link";

const Index = () => {
  const [username, setUsername] = useState("");
  return (
    <div>
      <label>
        username
        <input value={username} onChange={(e) => setUsername(e.target.value)} />
      </label>
      <p>{username} 깃허브 검색하기</p>
      <Link href={`/users/${username}`}>
        <a>검색하기</a>
      </Link>
    </div>
  );
};

export default Index;
