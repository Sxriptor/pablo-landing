type Theme = 'light' | 'dark'

export const themeColors = {
  // Accent color stays the same in both themes
  accent: '#456882',
  
  dark: {
    background: '#050a0f',
    surface: 'rgba(5, 10, 15, 0.95)',
    surfaceLight: 'rgba(69, 104, 130, 0.1)',
    border: 'rgba(69, 104, 130, 0.2)',
    borderLight: 'rgba(69, 104, 130, 0.1)',
    text: '#ffffff',
    textSecondary: '#9ca3af',
    textTertiary: '#6b7280',
    hover: 'rgba(255, 255, 255, 0.05)',
    card: 'rgba(23, 32, 42, 0.9)',
    cardBorder: 'rgba(69, 104, 130, 0.2)',
    input: 'rgba(69, 104, 130, 0.1)',
    inputBorder: 'rgba(69, 104, 130, 0.2)',
  },
  
  light: {
    background: '#ffffff',
    surface: '#ffffff',
    surfaceLight: '#f9fafb',
    border: 'rgba(69, 104, 130, 0.15)',
    borderLight: 'rgba(69, 104, 130, 0.08)',
    text: '#111827',
    textSecondary: '#4b5563',
    textTertiary: '#6b7280',
    hover: 'rgba(69, 104, 130, 0.05)',
    card: '#ffffff',
    cardBorder: 'rgba(69, 104, 130, 0.15)',
    input: '#ffffff',
    inputBorder: 'rgba(69, 104, 130, 0.2)',
  }
}

export function getThemeColors(theme: Theme) {
  return theme === 'dark' ? themeColors.dark : themeColors.light
}

