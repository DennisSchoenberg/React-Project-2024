import ReactDOM from 'react-dom/client';
import EmployeeForm from './components/employeeForm/EmployeeForm';
import './index.css';
import { HashRouter, Route, Routes } from 'react-router-dom';
import Layout from './components/layout/Layout';
import LoginForm from './components/loginForm/LoginForm';
import BrotherHood from './homeworks/homework_08/brotherhood/BrotherHood';
import FakeStore from './components/fakeStore/FakeStore';
import Product from './components/product/Product';
import Auth from './components/auth/Auth'; // Импортируем Auth
import Counter from './components/counter/Counter'; // Импортируем Counter
import KnowGender from './components/knowGender/KnowGender'; // Импортируем KnowGender

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);

root.render(
  <HashRouter>
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route path="/login-form" element={<LoginForm />} />
        <Route path="/brotherhood" element={<BrotherHood />} />
        <Route path="/employee-form" element={<EmployeeForm />} />
        <Route path="/fake-store" element={<FakeStore />} />
        <Route path="/fake-store/:id" element={<Product />} />
        <Route path="/auth" element={<Auth />} /> {/* Добавляем маршрут для Auth */}
        <Route path="/counter" element={<Counter />} /> {/* Добавляем маршрут для Counter */}
        <Route path="/know-gender" element={<KnowGender />} /> {/* Добавляем маршрут для KnowGender */}
        <Route path="/" element={<h1>Home</h1>} />
      </Route>
    </Routes>
  </HashRouter>
);




