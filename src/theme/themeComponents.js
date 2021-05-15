export const getThemeComponents = mergedBaseTheme => ({
  text: {
    fontSize: 12,
    fontWeight: mergedBaseTheme.fontWeights.normal,
    textAlign: 'center',
    modes: {
      dark: {
        color: mergedBaseTheme.colors.textDefault,
      },
      light: {
        color: mergedBaseTheme.colors.link,
      },
    },
  },
  label: {
    fontSize: 12,
    fontWeight: mergedBaseTheme.fontWeights.normal,
    lineHeight: mergedBaseTheme.lineHeights.standard,
    textAlign: 'center',
    modes: {
      dark: {
        color: mergedBaseTheme.colors.backgroundDefault,
      },
      light: {
        color: mergedBaseTheme.colors.link,
      },
    },
  },
  alert: {
    px: 24,
    py: 16,
    borderRadius: 1,
    borderStyle: 'solid',
    borderWidth: 1,
    modes: {
      dark: {
        bg: mergedBaseTheme.colors.error,
        borderColor: mergedBaseTheme.colors.error,
      },
      light: {
        bg: mergedBaseTheme.colors.error,
        borderColor: mergedBaseTheme.colors.error,
      },
    },
  },
});
