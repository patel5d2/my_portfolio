
import React from 'react';
import { render, screen } from '@testing-library/react';
import Typewriter from '../Typewriter';

describe('Typewriter', () => {
  it('renders the typewriter text', async () => {
    render(<Typewriter text="Hello, World!" />);
    const typewriterElement = await screen.findByText(/Hello, World!/i, {}, { timeout: 5000 });
    expect(typewriterElement).toBeInTheDocument();
  });
});
