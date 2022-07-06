import React, { useEffect, useState } from "react";
import ReactLoading from "react-loading";
import styles from "./Loader.module.css";

function PreLoader1() {
  const [data, setData] = useState([]);
  const [done, setDone] = useState(undefined);

  useEffect(() => {
    setTimeout(() => {
      fetch("https://jsonplaceholder.typicode.com/posts")
        .then((response) => response.json())
        .then((json) => {
          console.log(json);
          setData(json);
          setDone(true);
        });
    }, 20000);
  }, []);

  return (
    <>
      {!done ? (
        <ReactLoading
          type={"bars"}
          color={"#ffffff"}
          height={200}
          width={200}
          className={styles.main}
          delay={3000000000000}
        />
      ) : (
        <ul>
          {data.map((post) => (
            <li key={post.id}>{post.title}</li>
          ))}
        </ul>
      )}
      <h2 className={styles.text}>Please Wait</h2>
    </>
  );
}

export default PreLoader1;
