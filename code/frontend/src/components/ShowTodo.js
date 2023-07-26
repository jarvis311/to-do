import axios from "axios";
import { useEffect, useState } from "react";

const ShowTodo = () => {
    const [getUserData, setGetUserData] = useState([]);
  console.log(getUserData);

  useEffect(() => {
    const gertData = async () => {
      const res = await axios.get("http://localhost:8000/api/todo");
      console.log(">>>>", res.data.data);
      setGetUserData(res.data.data);
    };
    gertData();
  }, []);
const handleOnChange = async(id) => {
await axios.put(`http://localhost:8000/api/todo/${id}`)
}

  const renderData = getUserData?.map(item => (
    <tr>
    <th scope="row">1</th>
    <td>{item.title}</td>
    <td>{item.desc}</td>
    <td>{item.dueDate}</td>
    <td><input class="form-check-input" type="checkbox" value="Paneer"  onChange={() => handleOnChange(item.id)} id="gridCheck"/></td>
  </tr>
))
  return (
    <div>
      <table class="table">
        <thead>
          <tr>
            <th scope="col">#</th>
            <th scope="col">Title</th>
            <th scope="col">Desc</th>
            <th scope="col">DueDate</th>
            <th scope="col">Completed</th>
          </tr>
        </thead>
        <tbody>
        {renderData}
        </tbody>
      </table>
    </div>
  );
};

export default ShowTodo;
