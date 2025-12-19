import { render, screen } from '@testing-library/react';
import Heading from './Heading';

describe('Heading component', () => {
  it('renders children correctly', () => {
    render(<Heading>My title</Heading>);

    expect(screen.getByText('My title')).toBeInTheDocument();
  });

  it('renders as h2 by default', () => {
    render(<Heading>Default heading</Heading>);

    const heading = screen.getByText('Default heading');
    expect(heading.tagName).toBe('H2');
  });

  it('renders with the correct heading level when "as" is provided', () => {
    render(<Heading as="h1">Page title</Heading>);

    const heading = screen.getByText('Page title');
    expect(heading.tagName).toBe('H1');
  });

  it('applies base heading class', () => {
    render(<Heading>Styled title</Heading>);

    const heading = screen.getByText('Styled title');
    expect(heading).toHaveClass('heading');
  });

  it('applies level-specific class based on "as"', () => {
    render(<Heading as="h3">Section title</Heading>);

    const heading = screen.getByText('Section title');
    expect(heading).toHaveClass('h3');
  });

  it('merges custom className correctly', () => {
    render(
      <Heading as="h4" className="custom-class">
        Custom class title
      </Heading>
    );

    const heading = screen.getByText('Custom class title');
    expect(heading).toHaveClass('heading');
    expect(heading).toHaveClass('h4');
    expect(heading).toHaveClass('custom-class');
  });
});
