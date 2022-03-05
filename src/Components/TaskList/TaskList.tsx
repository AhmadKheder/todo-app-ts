import AddIcon from "@mui/icons-material/Add";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import TodayIcon from "@mui/icons-material/Today";
import { Checkbox } from "@mui/material";
import Accordion from "@mui/material/Accordion";
import AccordionDetails from "@mui/material/AccordionDetails";
import AccordionSummary from "@mui/material/AccordionSummary";
import Button from "@mui/material/Button";
import InputLabel from "@mui/material/InputLabel";
import Paper from "@mui/material/Paper";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Typography from "@mui/material/Typography";
import axios from "axios";
import { useEffect, useState } from "react";
import TodoForm from "../TaskList/TodoForm";

interface TodoObj {
  id: string;
  title: string;
  date: string;
  description: string;
  status: boolean;
}
export const TaskList = () => {
  const [todos, setTodos] = useState([
    {
      id: "",
      title: "",
      date: "",
      description: "",
      status: true,
    },
  ]);

  const handel_pull_typed_todo = async (data: TodoObj) => {
    data = { ...data, description: "dumy description" };
    await fetch(`http://localhost:8080/add-todo`, {
      method: "POST",
      body: JSON.stringify(data),
      headers: {
        "Content-Type": "application/json",
        "user-auth-token": `${localStorage.getItem("token")}`,
      },
      mode: "cors",
    });
    setTodos([...todos, data]);
  };

  const updateTaskValue = (id: string) => {
    const newTodos: any = todos.map((ele: TodoObj) => {
      if (ele.id === id) {
        ele.status = ele.status ? false : true;
        // updateTodo(ele);
        return ele;
      } else {
        return ele;
      }
    }, []);
    setTodos(newTodos);
  };
  const updateTodo = async (todo: TodoObj) => {
    const id = todo.id;
    axios
      .put(`http://localhost:8080/edit-todo/${id}`, {
        body: { ...todo },
        headers: {
          "Content-Type": "application/json",
          "user-auth-token": `${localStorage.getItem("token")}`,
        },
        mode: "cors",
      })
      .then((res) => {
        updateTaskValue(todo.id);
      })
      .catch((error) => {
        console.error(error);
      });
  };
  const getData = async () => {
    axios
      .get("http://localhost:8080/todos", {
        headers: {
          "user-auth-token": `${localStorage.getItem("token")}`,
        },
      })
      .then((res) => {
        setTodos(res.data.todos);
      })
      .catch((error) => {
        console.error(error);
      });
  };
  useEffect(() => {
    getData();
    const todos_storage: string | number | undefined = JSON.stringify(todos);
    localStorage.setItem("data", todos_storage);
  }, []);
  const localToken = localStorage.getItem("token");
  if (localToken == undefined) {
    localStorage.clear();
  }
  if (todos.length < 1) {
    return (
      <>
        <TableContainer
          sx={{ maxWidth: 1000, marginLeft: 50, marginTop: 5 }}
          component={Paper}
        >
          <div
            style={{
              borderStyle: "none",
              border: 0,
              margin: 5,
              display: "flex",
              justifyContent: "space-between",
            }}
            className="titles-container"
          >
            <Typography>Task List</Typography>
            <Typography>Due Date</Typography>
          </div>
          <h2>You have nothing to do</h2>
          <Table>
            <TableBody>
              <TableRow>
                <Accordion>
                  <AccordionSummary
                    component={Paper}
                    expandIcon={<ExpandMoreIcon />}
                    aria-controls="panel1a-content"
                    id="panel1a-header"
                  >
                    <Button
                      sx={{
                        left: 22,
                        height: 77,
                        color: "#555B77",
                        backgroundColor: "#FFFFFF",
                        "&:hover": {
                          background: "#FFFFFF",
                        },
                      }}
                      startIcon={<AddIcon />}
                    >
                      New Task
                    </Button>
                  </AccordionSummary>

                  <AccordionDetails>
                    <TodoForm pull_typed_todo={handel_pull_typed_todo} />
                  </AccordionDetails>
                </Accordion>
              </TableRow>
            </TableBody>
          </Table>
        </TableContainer>
      </>
    );
  }
  return (
    <>
      <TableContainer
        sx={{ maxWidth: 1000, marginLeft: 50, marginTop: 5 }}
        component={Paper}
      >
        <div
          style={{
            borderStyle: "none",
            border: 0,
            margin: 5,
            display: "flex",
            justifyContent: "space-between",
          }}
          className="titles-container"
        >
          <Typography sx={{}}>Task List</Typography>
          <Typography sx={{}}>Due Date</Typography>
        </div>

        <Table sx={{ minWidth: 650 }} aria-label="caption table">
          <TableHead></TableHead>
          <TableBody>
            {todos.map((todo: TodoObj) => (
              <TableRow key={todo.id}>
                <TableCell>
                  <div
                    style={{
                      display: "flex",
                    }}
                  >
                    <Checkbox
                      sx={{
                        "&:hover": {
                          bgcolor: "transparent",
                        },
                        color: "#FFB520",
                        width: "24px",
                        height: "24px",
                      }}
                      name={todo.title}
                      onClick={() => updateTodo(todo)}
                      onChange={(
                        event: React.ChangeEvent<HTMLInputElement>,
                        checked: boolean
                      ) => {
                        updateTaskValue(event.target.id);
                      }}
                      id={`${todo.id}`}
                      value={todo.title}
                    />
                    <InputLabel
                      htmlFor={todo.title}
                      title={todo.title}
                      id={`${todo.id}`}
                      sx={{
                        textDecoration: `${
                          todo.status ? "line-through" : "none"
                        }`,
                        paddingLeft: 2,
                      }}
                    >
                      {todo.title}
                    </InputLabel>
                  </div>
                </TableCell>
                <TableCell sx={{}} align="right">
                  <TodayIcon style={{ fontSize: "x-sm" }} />
                  <Typography sx={{}}>{todo.date}</Typography>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
        <Table>
          <TableBody>
            <TableRow>
              <Accordion>
                <AccordionSummary
                  component={Paper}
                  expandIcon={<ExpandMoreIcon />}
                  aria-controls="panel1a-content"
                  id="panel1a-header"
                >
                  <Button
                    sx={{
                      left: 22,
                      height: 77,
                      color: "#555B77",
                      backgroundColor: "#FFFFFF",
                      "&:hover": {
                        background: "#FFFFFF",
                      },
                    }}
                    startIcon={<AddIcon />}
                  >
                    New Task
                  </Button>
                </AccordionSummary>

                <AccordionDetails>
                  <TodoForm pull_typed_todo={handel_pull_typed_todo} />
                </AccordionDetails>
              </Accordion>
            </TableRow>
          </TableBody>
        </Table>
      </TableContainer>
    </>
  );
};

export default TaskList;
