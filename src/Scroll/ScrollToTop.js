import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

const ScrollToTop = () => {
  const location = useLocation();

  useEffect(() => {
    /* Hace scroll hacia arriba cada vez que cambia la ruta */

    window.scrollTo(0, 0);
  }, [location]);

  return null;
};

export default ScrollToTop;
