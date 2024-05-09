import React, { useState } from 'react';
import TodoHeader from './TodoHeader';
import TodoMain from './TodoMain';
import TodoInput from './TodoInput';
import '../scss/TodoTemplate.scss';

const TodoTemplate = () => {
  //백엔드 서버에 할 일 목록 을 요청 > 나중에
  //todos 배열을
  const [todos, setTodos] = useState([
    {
      id: 1,
      title: '아침 산책하기',
      done: true,
    },
    {
      id: 2,
      title: '오늘 주간 신문 읽기',
      done: true,
    },
    {
      id: 3,
      title: '샌드위치 사먹기',
      done: false,
    },
    {
      id: 4,
      title: '리액트 복습하기',
      done: false,
    },
  ]);
  //아이디 값 시퀀스 함수 DB연동시 필요없음
  const makeNewId = () => {
    if (todos.length === 0) return 1;
    return todos[todos.length - 1].id + 1; //맨마지막 할일 객체의 id보다 하나 크게
  };
  /*
Todoinput에게 todotext를 받아오는 함수
자식 컴포넌트가 부모 컴포넡트에게 데이터를 전달할 때는
일반적인 prps 사용이 분가능 
부모컴포넌트에서 함수를 선언(매게변수 꼭선언)> props로 함수를 전달
자식 컴포넌트에서 전달받은 함수를 호출하면서 매개값으로 데이터전달
*/
  const addTodo = (todoText) => {
    const newTodo = {
      id: makeNewId(),
      title: todoText,
      done: false,
    }; //나중에는 패치를 이용해서 백엔드에 insert 요청을 보냄야함
    //react의 상태변수는 불변성을 가지기때문에
    //기존 상태에서 변경은 불가능 > 새로운 상태러 만들어서 변경해야 한다

    setTodos([...todos, newTodo]);
  };
  console.log(todos);
  return (
    <div className="TodoTemplate">
      <TodoHeader />
      <TodoMain todoList={todos} />
      <TodoInput addTodo={addTodo} />
    </div>
  );
};

export default TodoTemplate;
