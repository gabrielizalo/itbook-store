import React, {useState} from "react";
import {useQuery} from "react-query";

const Home = function Home() {
  // const [itBookList, setItBookList] = useState([]);
  const {isLoading, isError, data, error} = useQuery("itBooks", () =>
    fetch("https://api.itbook.store/1.0/new").then((res) => res.json())
  );

  return (
    <div>
      {isError && !isLoading && <div>{error}</div>}
      {isLoading && !isError && <div>Loading...</div>}
      {!isLoading && !isError && (
        <>
          <div>{data.error}</div>
          data.books.map((book) => (
          <div>
            <h1>
              My book
            </h1>
          </div>
          ))}
        </>
      )}
    </div>
  );
};

export default Home;
