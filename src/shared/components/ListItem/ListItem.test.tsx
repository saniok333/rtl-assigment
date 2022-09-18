import React from 'react';
import { render, screen } from '@testing-library/react';
import ListItem from './ListItem';

const listItemMockedProps = {
  title: 'mockedTitle',
  label: 'mockedLabel',
  description: 'mockedDescription',
  urlAlias: 'mockedUrlAlias',
  imageData: {
    afbeelding: 'mockedAfbeelding',
    crops: [],
  },
};

jest.mock('../../hooks/useOnScreen', () => {
  return {
    useOnScreen: () => true,
  };
});
jest.mock('../../utils/getSrcMap', () => {
  return {
    getSrcMap: () => [],
  };
});

describe('ListItem test', () => {
  it('should be a default behavior', () => {
    render(<ListItem {...listItemMockedProps} />);

    expect(screen.getByRole('link')).toHaveAttribute(
      'href',
      listItemMockedProps.urlAlias
    );
    expect(screen.getByRole('img')).toHaveAttribute(
      'src',
      listItemMockedProps.imageData.afbeelding
    );
    expect(screen.getByRole('heading', { level: 3 })).toHaveTextContent(
      listItemMockedProps.label
    );
    expect(screen.getByRole('heading', { level: 2 })).toHaveTextContent(
      listItemMockedProps.title
    );
    expect(screen.getByText(/mockeddescription/i)).toBeInTheDocument();
  });
});
