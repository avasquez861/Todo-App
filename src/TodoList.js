import Todo from "./Todo"
import { useState, useEffect } from "react";

export default function TodoList(){


    const [todoInfo, setTodoInfo] = useState("");
    const [allTodos, setAllTodos] = useState([]);
    const [todos, setTodos] = useState([]);
    const [filter, setFilter] = useState('all');


    
    

    function handleComplete(e){
        const newArr = allTodos.map((todo)=>{
            if(todo.todo === e.target.value){
                if(todo.complete === false){
                    return {key:todo.key,todo:todo.todo,complete:true}
                } else{
                    return {key:todo.key,todo:todo.todo,complete:false}
                }
            }else{
                return todo
            }
        })
        console.log(newArr);
        setAllTodos(newArr);
    }


    function handleChange(e){
        setTodoInfo(e.target.value);
    }

    useEffect(() => {
        const items = JSON.parse(localStorage.getItem('todos'));
        if (items) {
         setAllTodos(items);
        }
      }, [])

     useEffect(()=>{
        
     },[])
     

      useEffect(() => {
        localStorage.setItem('todos', JSON.stringify(allTodos));
      }, [allTodos]);

    function addTodo(){
        setAllTodos(
            [
                ...allTodos,
                {
                    todo:todoInfo,
                    complete:false
                }

            ]
        )
        setTodoInfo("");
    }
    function deleteTodo(e){
        setAllTodos(allTodos.filter((elem) => { return elem.todo !== e.target.value}))
    }

    function handleFilter(e){
        setFilter(e.target.value);
        if(filter === 'complete'){
            setTodos(allTodos.filter(todo=>todo.complete===true))
        }
        if(filter === 'due'){
            setTodos(allTodos.filter(todo=>todo.complete===false))
        }
        if(filter === 'all'){
            setTodos(allTodos)
        }
        
  
    }

    
    function test(){
        console.log(allTodos)
        let newArr=allTodos.filter((todo)=>{
            return todo.complete === true;
        })
        console.log(newArr)

    }
    


    return(
        <div>
            <div className="input-container">
                <input value={todoInfo} onChange={handleChange}/><button onClick={addTodo}>Add</button>
                <select onChange={handleFilter}>
                    <option value="all">All</option>
                    <option value="complete">Completed</option>
                    <option value="due">Due</option>
                </select>
                <button onClick={test}>test button</button>
            </div>
            <div className="todo-container">
                {
                todos.map(elem => <Todo 
                handleComplete={handleComplete}
                complete={elem.complete} 
                value={elem.todo}
                todo={elem.todo} 
                deleteFunction={deleteTodo}/>)
                }
            </div>
        </div>
    )
}



/*
Things to do:
* Create git repo
* Fix filter to allow filtering of finished todos


*/