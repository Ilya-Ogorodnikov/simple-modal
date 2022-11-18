import { FC, useState } from 'react';
import { Modal } from './components';

const App: FC = () => {
  const [isModalActive, setIsModalActive] = useState(false);
  const [isCompleted, setIsCompleted] = useState(false);

  return (
    <div style={{ textAlign: 'center' }}>
      <button
        onClick={() =>
          isCompleted ? alert('Действие выполнено') : setIsModalActive(true)
        }
      >
        Выполнить действие
      </button>
      {isModalActive && (
        <Modal
          active={isModalActive}
          setActive={setIsModalActive}
          setIsCompleted={setIsCompleted}
        >
          Для данной функции применяются особые условия и правила пользования,
          их необходимо подтвердить, нажав на кнопку Подтвердить
        </Modal>
      )}
    </div>
  );
};

export default App;
