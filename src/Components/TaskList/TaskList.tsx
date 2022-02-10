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
import { useEffect, useState } from "react";
import TodoForm from "./TodoForm";
interface TodoObj { id: number; title: string; date: string; status: boolean; }
const TaskList01 = () => {

  const handel_pull_typed_todo = (data: TodoObj) =>  {
    setTodos([...todos, data]);
   
  };
 
  const [todos, setTodos] = useState([
    {
      id: 1,
      title: "Take CSS Course",
      date: "Today1",
      status: false,
    },
    {
      id: 2,
      title: "Update all libraries",
      date: "Today2",
      status: false,
    },
    {
      id: 3,
      title: "Review the Code",
      date: "Today3",
      status: false,
    },
  ]);


  const updateTaskValue = (id:string) => {
    
    const newTodos  = todos.map((ele) => {
        if(ele.id === (+id)){
          ele.status =  ele.status ? false : true
          return ele
        }else{

          return ele;
        }
      },[]);

    setTodos( newTodos);
  


  }
  useEffect(()=>{

    const todos_storage: string | number | undefined = JSON.stringify(todos)
      localStorage.setItem("data",  todos_storage);
  },[todos]);

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
            {todos.map((todo) => (
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
                      onChange ={(event: React.ChangeEvent<HTMLInputElement>, checked: boolean) => {
                        updateTaskValue(event.target.id);
                      }}
                      id={`${todo.id}` }
                      value={todo.title}
                    />
                    <InputLabel
                    htmlFor={todo.title}
                    title={todo.title}
                  
                      //  name = {todo.title}
                      id={`${todo.id}`}
                      sx={{
                    textDecoration:`${todo.status ?  'line-through':'none' }`,
                        
                        paddingLeft: 2,
                      }}
                    >
                      {todo.title}
                    </InputLabel>
                  </div>
                </TableCell>
                <TableCell sx={{}} align="right">
                  <TodayIcon  style={{fontSize:"x-sm"}} />
                  <Typography sx={{}}>{todo.date}</Typography>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
        <Table>
          <TableBody>
            <TableRow>
              {/* <TableCell variant="context.table.footer"> */}
              <Accordion >
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

                <AccordionDetails >
                  <TodoForm pull_typed_todo={handel_pull_typed_todo} />
                </AccordionDetails>
              </Accordion>
              {/* </TableCell> */}
            </TableRow>
          </TableBody>
        </Table>
      </TableContainer>
    </>
  );
};

export default TaskList01;
