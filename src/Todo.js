import "./todo.css"


export default function Todo(props){


    return(
        <div className={props.complete ?"todo complete" : "todo"}>
            <h1>{props.todo}</h1>
            <button value={props.todo} onClick={props.handleComplete}>Complete</button>
            <button value={props.todo} onClick={props.deleteFunction}>Delete</button>
            
        </div>
    )
}