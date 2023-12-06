import listStyle from "./list.module.scss";
const List = ({ currentUser }) => {
  console.log(currentUser);
  return (
    <div className={listStyle.parent}>
      {currentUser?.map((user) => {
        const { id, name, image, email, age } = user;
        return (
          <div className={listStyle.container} key={id}>
            <div>
              <img src={image} alt="" />
            </div>
            <div className={listStyle.text}>
              <h3> {name} </h3>
              <h3>{email}</h3>
              <h3>{age}</h3>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default List;
