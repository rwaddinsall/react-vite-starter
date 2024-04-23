import {Outlet} from 'react-router-dom';

const MainLayout = () => {
  return (
    <>
      <Outlet />
      {/* Children of route will render here */}
    </>
  );
};
export default MainLayout;
