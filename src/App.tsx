import { lazy, Suspense, useEffect, useState } from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';
import Loading from '@/components/Loading';

const Login = lazy(() => import('@/pages/Login'));
const Home = lazy(() => import('@/pages/Home'));
const PageNotFound = lazy(() => import('@/pages/PageNotFound'));

function App() {
  const [isLogin, setIsLogin] = useState(!!localStorage.getItem('access_token'));

  const getStorage = () => {
    const bool = !!localStorage.getItem('access_token');
    setIsLogin(bool);
  };

  // 监听登录状态
  useEffect(() => {
    window.addEventListener('access_token', getStorage);
    return () => {
      window.removeEventListener('access_token', getStorage);
    };
  }, []);

  return (
    <Suspense fallback={<Loading />}>
      <Routes>
        <Route
          path="/"
          element={
            <Navigate to={isLogin ? '/home' : '/login'} />
          }
        />
        <Route
          path={'/login'}
          element={
            <Login />
          }
        />
        <Route
          path={'/home/*'}
          element={
            isLogin ? <Home /> : <Navigate to='/login' />
          }
        />
        <Route
          path="*"
          element={
            <PageNotFound />
          }
        />
      </Routes>
    </Suspense>
  )
}

export default App
