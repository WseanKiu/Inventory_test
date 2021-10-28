import React from 'react';
import { useQuery } from 'react-query';
import { useAuthHooks } from '../../../hooks/auth';
import { useTodoHooks } from '../../../hooks/todo';

const TodoList = ({}): React.ReactElement => {
  const { useFetchTodos } = useTodoHooks();
  const { fetchTodos } = useFetchTodos();

  const [counter, setCounter] = React.useState(0);

  const { data: todoList } = useQuery([counter], () => {
    return fetchTodos();
  });
  return (
    <div style={{ marginTop: 100 }}>
      <button onClick={() => setCounter(counter + 1)}>Fetch TODOs</button>

      <ul>
        {todoList?.map(todo => {
          return <li key={`${todo?.id}`}>{todo.title}</li>;
        })}
      </ul>
    </div>
  );
};

type Props = {};

const Component = ({}: Props): React.ReactElement => {
  const { useLogout } = useAuthHooks();
  const { logout } = useLogout();

  return (
    <div>
      <h1>TODO Page</h1>
      <button onClick={() => logout()}>Sign out</button>
      <React.Suspense fallback={<div>loading todo list...</div>}>
        <TodoList />
      </React.Suspense>
    </div>
  );
};

export default Component;
