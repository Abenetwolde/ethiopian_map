import { render } from '@testing-library/react';
import MapComponent from '../MapComponent';


test('renders MapComponent', () => {
  const { container } = render(<MapComponent selectedRegion={null} setSelectedRegion={() => {}} />);
  //  expect(container).toBeInTheDocument();
});