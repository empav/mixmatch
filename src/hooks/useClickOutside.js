import React, { useEffect } from 'react';

const useClickOutside = (elemRef, callback) => {
  const callbackRef = React.useRef(callback);

  useEffect(() => {
    const onClickOutside = (event) => {
      if (!elemRef.current.contains(event.target) && callbackRef.current) {
        callbackRef.current(event);
      }
    };

    document.addEventListener('click', onClickOutside);
    return () => document.removeEventListener('click', onClickOutside);
  }, [elemRef, callbackRef]);
};

export default useClickOutside;
