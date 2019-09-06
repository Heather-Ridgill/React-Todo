import React from "react";
import Todo from "./Todo.js";

const TodoList = props => {
  return (
    <div className="My-List">
      {props.list.map(item => (
        <Todo key={item.id} item={item} toggleItem={props.toggleItem} />
      ))}
      <button className="clear-btn" onClick={props.clearPurchased}>
        Clear Purchased
      </button>
    </div>
  );
};

//     if(!todos.legnth) {
//         return(
//              <h4> Nothing to do.... yet! </h4>
//     );
// } else {
//     return(
//         <div>
//             {todos.map(todo => {
//                 return <Todo key={todo.id} todo={todo} />
//             })}
//         </div>
//     )
// }

export default TodoList;
