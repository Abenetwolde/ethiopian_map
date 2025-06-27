import React from 'react';
import { render, screen } from '@testing-library/react';
import MapComponent from '../MapComponent';


describe('MapComponent', () => {
  it('renders without crashing', () => {
    render(<MapComponent selectedRegion={null} setSelectedRegion={() => {}} />);
    // expect(screen.getByRole('button', { name: /all/i })).toBeInTheDocument();
  });
});