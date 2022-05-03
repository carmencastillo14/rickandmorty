import React from "react";
import GlobalStyle from './globalStyle';
import { TodoList } from './components/TodoList';

export function App(){

   return  <TodoList todos={[
       {id: 1, task: 'Tarea 1'}
   ]} />
}


export default App;
