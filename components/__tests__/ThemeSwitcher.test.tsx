
import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import ThemeSwitcher from '../ThemeSwitcher';
import { ThemeProvider } from 'next-themes';

describe('ThemeSwitcher', () => {
  it('renders the theme switcher button', () => {
    render(
      <ThemeProvider attribute="class" defaultTheme="dark" enableSystem>
        <ThemeSwitcher />
      </ThemeProvider>
    );
    const themeSwitcherButton = screen.getByRole('button');
    expect(themeSwitcherButton).toBeInTheDocument();
  });

  it('toggles the theme on click', () => {
    render(
      <ThemeProvider attribute="class" defaultTheme="dark" enableSystem>
        <ThemeSwitcher />
      </ThemeProvider>
    );
    const themeSwitcherButton = screen.getByRole('button');
    expect(themeSwitcherButton).toHaveTextContent('Light');

    fireEvent.click(themeSwitcherButton);
    expect(themeSwitcherButton).toHaveTextContent('Dark');

    fireEvent.click(themeSwitcherButton);
    expect(themeSwitcherButton).toHaveTextContent('Light');
  });
});
