import * as React from "react";
import { useState } from "react";
import "./TaskList.css";

export default function TodoForm(props:any) {

  const [startDate, setStartDate] = useState(new Date());
  const [todoTitle, setTodoTitle] = useState('');


  const onSubmit = ( ) => {

    props.pull_typed_todo({
      date:startDate,
       title: todoTitle,
      status:false,
      id:Math.random()
    });

  };

  return (
    <div  className="add-form">

      <input
        required
        placeholder="Todo Title"
        style={{
          border: "1px solid #FFB520",
        }}
        onChange={e => setTodoTitle(e.target.value)}
      />

      <input
        style={{
          border: "1px solid #FFB520",
        }}
        type={"date"}

        onChange={e =>  setStartDate((e.target.value as any) as Date)}
      />
      <button
      onClick={(e) =>  onSubmit()}
        style={{
          borderRadius: "8px",
          width: "92px",
          height: "64px",
          backgroundColor: "#FFC420",
          border: "1px solid #ffff",
          fontFamily: "Segoe UI",
          fontWeight: "600",
          fontSize: "13px",
          lineHeight: "16px",
        }}
        type="submit"
      >
        Submit
      </button>
    </div>
  );
}
