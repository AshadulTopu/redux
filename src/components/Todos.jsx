// step 1. install packages
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getTodos } from "../redux/actions/TodosAction";
// step 2. constants define
// step 3. async action creator
// step 4. reducer define
// step 5. store define
// step 6. provider define
// step 7. use define

export default function Todos() {
  const { todos, isLoading, isError } = useSelector((state) => state);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getTodos());
  }, []);
  return (
    <div>
      <h2>Fetch Data using Redux</h2>

      {isLoading && <h2>Loading...</h2>}
      {isError && <h2>{isError}</h2>}
      <section>
        {todos && todos.map((todo) => <p key={todo.id}>{todo.title}</p>)}
      </section>
      {/* {todos && <h2>{todos}</h2>} */}
    </div>
  );
}
