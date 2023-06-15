import React from 'react';

const matchDark = '(prefers-color-scheme: dark)';

const useDarkMode = () => {
  const [isDark, setIsDark] = React.useState(
    () => window.matchMedia && window.matchMedia(matchDark).matches
  );

  React.useEffect(() => {
    const matcher = window.matchMedia(matchDark);
    const onChange = ({ matches }) => setIsDark(matches);
    matcher.addEventListener('change', onChange);
    return () => {
      matcher.removeEventListener(onChange);
    };
  }, [setIsDark]);

  return isDark;
};

export default useDarkMode;
