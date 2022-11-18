import { FC, useEffect, useState } from 'react';
import { IModalProps } from '../../models';

import './style.scss';

const Modal: FC<IModalProps> = ({
  active,
  setActive,
  children,
  setIsCompleted,
}) => {
  const [count, setCount] = useState(5);

  useEffect(() => {
    if (count === 0) {
      return;
    }

    const timer = setTimeout(() => setCount(prev => --prev), 1000);

    return () => clearTimeout(timer);
  }, [count]);

  const cancelModal = () => setActive(false);

  const completed = () => {
    alert('Действие выполнено');
    setIsCompleted(true);
    cancelModal();
  };

  return (
    <div className={active ? 'modal active' : 'modal'} onClick={cancelModal}>
      <div
        className="modal__content"
        onClick={event => event.stopPropagation()}
      >
        <div className="modal__content-header">
          <div>Согласие с правилами</div>
          <div className="modal__content-header-cancel" onClick={cancelModal}>
            Х
          </div>
        </div>
        <div className="modal__content-body">{children}</div>
        <div className="modal__content-footer">
          <button disabled={count !== 0} onClick={completed}>
            {count !== 0 ? `Подтвердить (${count})` : 'Подтвердить'}
          </button>
          <button onClick={cancelModal}>Отмена</button>
        </div>
      </div>
    </div>
  );
};

export default Modal;
