import "./App.css";
import Skeleton  from "react-loading-skeleton";
import 'react-loading-skeleton/dist/skeleton.css'
import { useEffect, useState } from "react";
import axios from "axios";

export default function App() {
  const [userList, setUserList] = useState([]);
  const [isLoading, setIsLoading] = useState();

  const showUsers = () => {
    setIsLoading(true);
    setTimeout(() => {
      axios
        .get(
          "https://randomapi.com/api/6de6abfedb24f889e0b5f675edc50deb?fmt=raw&sole"
        )
        .then((res) => {
          setUserList(res.data);
          setIsLoading(false);
        });
    }, 3000);
  };

  useEffect(() => {
    setIsLoading(true);
    showUsers();
  }, []);

  return (
    <div className="App">
      <div className="button" onClick={showUsers}>
        Show Users   
      </div>
      
      {isLoading === false &&
        userList.map((user,i) => (
          <div className="card" key={i}>
            <img
              src={"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQVYp5RZozodsEbSs6BMB2zGtl07HqRlPhe7gIR_9I&s"}
              alt={user.first}
            />
            <h1>{user.first + user.last}</h1>
            <h2>{user.email || <Skeleton />}</h2>
            <h3>{user.address || <Skeleton />}</h3>
          </div>
        ))}
      {isLoading === true && (
        <>
          <div className="card">
            <Skeleton circle={true} height={100} width={100} />
            <h1>
              <Skeleton />
            </h1>
            <h2>
              <Skeleton />
            </h2>
            <h3>
              <Skeleton />
            </h3>
          </div>
          <div className="card">
          <Skeleton circle={true} height={100} width={100} />
            <h1>
              <Skeleton />
            </h1>
            <h2>
              <Skeleton />
            </h2>
            <h3>
              <Skeleton />
            </h3>
          </div>
          <div className="card">
          <Skeleton circle={true} height={100} width={100} />
            <h1>
              <Skeleton />
            </h1>
            <h2>
              <Skeleton />
            </h2>
            <h3>
              <Skeleton />
            </h3>
          </div>
          <div className="card">
          <Skeleton circle={true} height={100} width={100} />
            <h1>
              <Skeleton />
            </h1>
            <h2>
              <Skeleton />
            </h2>
            <h3>
              <Skeleton />
            </h3>
          </div>
          <div className="card">
          <Skeleton circle={true} height={100} width={100} />
            <h1>
              <Skeleton />
            </h1>
            <h2>
              <Skeleton />
            </h2>
            <h3>
              <Skeleton />
            </h3>
          </div>
          <div className="card">
          <Skeleton circle={true} height={100} width={100} />
            <h1>
              <Skeleton />
            </h1>
            <h2>
              <Skeleton />
            </h2>
            <h3>
              <Skeleton />
            </h3>
          </div>
        </>
      )}
    </div>
  );
}
