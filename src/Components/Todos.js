import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getAllTodos } from '../Redux/Actions/TodosAction';

const Todos = () => {
  const { error, isLoading, todos } = useSelector(state => state);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getAllTodos())
  }, [dispatch])
  return (
    <div className='todos'>
      <h2>Todos App</h2>
      {isLoading && <h3>Loading ...</h3>}
      {error && <h3>{error}</h3>}
      <section>
        {todos && todos.map((todo) => {
          const { id, title } = todo
          return (
            <article key={id}>
              <h4>{id}</h4>
              <h6>{title}</h6>
            </article>
          );
        })}
      </section>
    </div>
  );
};

export default Todos;