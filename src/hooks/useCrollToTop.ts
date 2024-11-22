import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
// hook para hacer scroll al top de la pagina
const ScrollToTop = () => {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return null;
};

export default ScrollToTop;