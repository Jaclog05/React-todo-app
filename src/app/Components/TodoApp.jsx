import { TodoForm } from "./TodoForm";
import { TodosWrapper } from "./TodosWrapper";
import { useTodos } from "../hooks/useTodos";

export default function TodoApp() {

  const { todos, addTodo, updateTodo, deleteTodo } = useTodos()

  return (
    <>
      <TodoForm
        onSubmit = {addTodo}
      />
      <TodosWrapper
        todos={todos}
        onUpdate={updateTodo}
        onDelete={deleteTodo}
      />
    </>
  )
}