import React, { useState } from 'react';
import './counter.css';
import { useLocation, useNavigate } from 'react-router-dom';

export default function Counter() {
  const [count, setCount] = useState<number>(0);
  const navigate = useNavigate(); // Получаем функцию navigate для перенаправления
  const location = useLocation(); // Получаем текущий путь

  const countPlus = () => {
    setCount(prev => prev + 1);
  };

  const redirectToHome = () => {
    navigate('/'); // Перенаправление на главную страницу
  };

  return (
    <div className='counter'>
      <h5>Counter with useState() hook:</h5>
      <p>{count}</p>
      <button onClick={countPlus}>Plus!</button>

      <button onClick={redirectToHome}>Go to Home</button> {/* Кнопка для перенаправления */}

      {/* Для отображения текущей страницы в меню Layout */}
      <p>Current Page: {location.pathname}</p>
    </div>
  );
}

