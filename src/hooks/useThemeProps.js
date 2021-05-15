import { ThemeContext } from 'styled-components';
import { useContext, useMemo } from 'react';

export function useThemeProps(themeProps, elementThemeKey) {
  const context = useContext(ThemeContext);

  return useMemo(() => {
    return themeProps.reduce((acc, val) => ({ ...acc, [val]: context[elementThemeKey][val] }), {});
  }, [context, elementThemeKey, themeProps]);
}
