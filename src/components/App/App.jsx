import { lazy } from 'react';
import { Route, Routes } from 'react-router-dom';
import { Layout } from 'components';

const HomePage = lazy(() => import('../../pages/Home/HomePage'));
const RegisterPage = lazy(() => import('../../pages/Register/RegisterPage'));
const LoginPage = lazy(() => import('../../pages/Login/LoginPage'));
const ContactsPage = lazy(() => import('../../pages/Contacts/ContactsPage'));

export function App() {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<HomePage />} />
        <Route path="register" element={<RegisterPage />} />
        <Route path="login" element={<LoginPage />} />
        <Route path="contact" element={<ContactsPage />} />
        <Route path="*" element={<>NotFound </>} />
      </Route>
    </Routes>
  );
}

// export function App() {
//   return (
//     <div
//       style={{
//         height: '100vh',
//         display: 'flex',
//         justifyContent: 'center',
//         alignItems: 'center',
//         fontSize: 40,
//         color: '#010101',
//       }}
//     >
//       React homework template
//     </div>
//   );
// }
