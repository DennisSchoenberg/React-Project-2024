import { useFormik } from 'formik';
import { FC, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import styles from './knowGender.module.css';

interface IFormGender {
  name: string;
}

interface IGender {
  count: number;
  name: string;
  gender: string;
  probability: number;
}

const KnowGender: FC = () => {
  const [name, setName] = useState<IGender | undefined>(undefined);
  const navigate = useNavigate(); // Получаем функцию navigate для перенаправления

  const formik = useFormik({
    initialValues: {
      name: ''
    } as IFormGender,
    onSubmit: async (values: IFormGender, { resetForm }) => {
      const res = await fetch(`https://api.genderize.io/?name=${values.name}`);
      const data = await res.json();
      console.log(data);
      setName(data);
      resetForm();
    }
  });

  const redirectToHome = () => {
    navigate('/'); // Перенаправление на главную страницу
  };

  return (
    <>
      <span>✨ secret gender ✨</span>
      <form onSubmit={formik.handleSubmit} className={styles.container}>
        <input id='name' value={formik.values.name} onChange={formik.handleChange} type="text" />
        <button type='submit'>know secret gender 🤔</button>
      </form>
      {name?.name && (
        <>
          <p>{name?.name} is {name?.gender} {name?.probability * 100}% ⚡️</p>
        </>
      )}

      <button onClick={redirectToHome}>Go to Home</button> {/* Кнопка для перенаправления */}
    </>
  );
};

export default KnowGender;

