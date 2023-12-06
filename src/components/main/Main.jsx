import { useState } from "react";
import List from "../list/List";
import mainStyle from "./main.module.scss";

const Main = ({ datas }) => {
  const [page, setPage] = useState(1);
  const userPerPage = 5;
  let lastUser = page * userPerPage;
  let firstUser = lastUser - userPerPage;

  const currentUser = datas?.slice(firstUser, lastUser);

  function handleNext() {
    page < datas.length / userPerPage && setPage(page + 1);
    page >= datas.length / userPerPage &&
      alert("You reached last page. Don't click NEXT button !!!");
  }

  const handlePrev = function () {
    page > 1 && setPage(page - 1);
    page <= 1 && alert("You reached first page. Don't clicked PREV button !!!");
  };

  return (
    <div className={mainStyle.container}>
      <h1>Employee List</h1>
      <h3 className={mainStyle.h3}>
        ( Employees from {firstUser + 1} to {firstUser + currentUser.length})
      </h3>

      <List currentUser={currentUser} />

      <div className={mainStyle.buttons}>
        <button onClick={handlePrev}>PREV</button>
        <h2> {page} </h2>
        <button onClick={handleNext}>NEXT</button>
      </div>
    </div>
  );
};

export default Main;
