# 🇪🇹 Ethiopia Map Component

A customizable **React component** for rendering an interactive SVG map of Ethiopian regions with hover, click, and zoom functionalities.

---

## 📦 Installation

```bash
npm install ethiopia-svg-map
```

---

## 🚀 Usage

### Basic Example

```jsx
import React, { useState } from 'react';
import { EthiopiaSvgMap } from '@your-org/ethiopia-map-component';

const App = () => {
  const [selectedRegion, setSelectedRegion] = useState(null);

  const regionData = {
    tigray: {
      value: 5,
      label: 'Tigray',
      universities: ['Mekelle University', 'Aksum University']
    },
    amhara: {
      value: 7,
      label: 'Amhara',
      universities: ['University of Gondar', 'Bahir Dar University']
    }
  };

  return (
    <EthiopiaSvgMap
      regionData={regionData}
      selectedRegion={selectedRegion}
      setSelectedRegion={setSelectedRegion}
      defaultFillColor="#67AE6E"
      activeFillColor="#90C67C"
      hoverFillColor="#90C67C"
      strokeColor="#328E6E"
      strokeWidth={0.7}
      activeStrokeWidth={1}
      hoverOpacity={0.9}
      className="flex items-center justify-center w-full h-auto bg-gray-100"
      showValues
      showRegionLabels
      tooltipContent={(regionId, data) => (
        <Tooltip regionId={regionId} data={data} />
      )}
      enableZoom
      zoomLevel={1}
      showLegend
    />
  );
};

// Simplified Tooltip Component
const Tooltip = ({ regionId, data }) => (
  <div className="bg-white border border-gray-300 shadow-lg p-2 rounded-md text-xs">
    <div className="font-semibold">{data?.label || regionId}</div>
    <ul className="list-disc list-inside">
      {data?.universities?.map((uni, index) => (
        <li key={index}>{uni}</li>
      ))}
    </ul>
    <div className="text-right">Total: {data?.value || 0}</div>
  </div>
);

export default App;
```

---

## 🧩 Props

| Prop                | Type                                                  | Default                                                         | Description                                                |
|---------------------|-------------------------------------------------------|------------------------------------------------------------------|------------------------------------------------------------|
| `selectedRegion`    | `string \| null`                                     | `null`                                                           | Currently selected region ID                              |
| `setSelectedRegion` | `React.Dispatch<React.SetStateAction<string \| null>>`| —                                                                | Setter function for region selection                      |
| `regionData`        | `Record<string, any>`                                  | `{}`                                                             | Custom data for each region                               |
| `defaultFillColor`  | `string`                                               | `#67AE6E`                                                        | Default region fill color                                 |
| `activeFillColor`   | `string`                                               | `#90C67C`                                                        | Fill color for active region                              |
| `hoverFillColor`    | `string`                                               | `#90C67C`                                                        | Fill color on region hover                                |
| `strokeColor`       | `string`                                               | `#328E6E`                                                        | Region border color                                       |
| `activeStrokeColor` | `string`                                               | `#FFFFFF`                                                        | Border color for active region                            |
| `strokeWidth`       | `number`                                               | `0.7`                                                            | Default border width                                      |
| `activeStrokeWidth` | `number`                                               | `1`                                                              | Border width for active region                            |
| `hoverOpacity`      | `number`                                               | `0.9`                                                            | Opacity when hovering (0–1)                               |
| `className`         | `string`                                               | `flex items-center justify-center w-full h-auto bg-gray-100`     | Container class                                            |
| `svgClassName`      | `string`                                               | `w-full h-auto`                                                 | SVG element class name                                    |
| `onRegionHover`     | `(regionId: string \| null) => void`                 | —                                                                | Callback when a region is hovered                         |
| `onRegionClick`     | `(regionId: string) => void`                           | —                                                                | Callback when a region is clicked                         |
| `tooltipContent`    | `(regionId: string, data?: any) => React.ReactNode`   | —                                                                | Renders custom tooltip content                            |
| `width`             | `string \| number`                                   | `'100%'`                                                         | Width of the map                                          |
| `height`            | `string \| number`                                   | `'auto'`                                                         | Height of the map                                         |
| `viewBox`           | `string`                                               | `'0 0 441.853 328.295'`                                          | SVG viewBox                                               |
| `enableZoom`        | `boolean`                                              | `false`                                                          | Enables zoom support                                      |
| `zoomLevel`         | `number`                                               | `1`                                                              | Initial zoom level                                        |
| `customStyles`      | `string`                                               | `''`                                                             | Custom CSS for SVG                                        |
| `showRegionLabels`  | `boolean`                                              | `false`                                                          | Whether to show region labels                             |
| `labelClassName`    | `string`                                               | `text-xs font-medium`                                            | CSS class for labels                                      |
| `labelPosition`     | `string`                                               | `'center'`                                                       | Label position (`'center'`, `'top'`, etc.)                |
| `showValues`        | `boolean`                                              | `false`                                                          | Whether to show numeric values for regions                |
| `valueFormatter`    | `(val: any) => string`                                 | `(val) => val.toString()`                                        | Function to format value                                  |
| `defaultLabelStyle` | `React.CSSProperties`                                  | `{}`                                                             | Inline style for region labels                            |
| `defaultValueStyle` | `React.CSSProperties`                                  | `{}`                                                             | Inline style for region values                            |
| `showLegend`        | `boolean`                                              | `true`                                                           | Whether to show legend                                    |

---

## 🎨 Styling

This component uses [Tailwind CSS](https://tailwindcss.com/).

Make sure to include it in your project (if not already):

```html
<link href="https://cdn.jsdelivr.net/npm/tailwindcss@2.2.19/dist/tailwind.min.css" rel="stylesheet">
```

---

## 📄 License

**MIT**
