import {
  CSSTransition,
  TransitionGroup,
} from 'react-transition-group';
import { Todo } from '../../types/Todo';
import { TodoItem } from '../TodoItem';
import { TempTodo } from '../TempTodo';

type Props = {
  todos: Todo[];
  onDelete: (todoToDelete: Todo) => void;
  tempTodo: Todo | null;
};

export const TodoList: React.FC<Props> = ({ todos, onDelete, tempTodo }) => {
  const isCreating = tempTodo?.id === 0;

  return (
    <section className="todoapp__main">
      <TransitionGroup>
        {todos.map(todo => (
          <CSSTransition
            key={todo.id}
            timeout={300}
            classNames="item"
          >
            <TodoItem key={todo.id} todo={todo} onDelete={onDelete} />
          </CSSTransition>
        ))}

        {isCreating && (
          <CSSTransition
            key={0}
            timeout={300}
            classNames="temp-item"
          >
            <TempTodo title={tempTodo.title} />
          </CSSTransition>
        )}
      </TransitionGroup>
    </section>
  );
};
