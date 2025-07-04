Ethiopia Map Component
A customizable React component for rendering an interactive SVG map of Ethiopian regions with hover, click, and zoom functionalities.
Installation
npm install @your-org/ethiopia-map-component

Usage
Basic Example
import React, { useState } from 'react';
import { MapComponent } from '@your-org/ethiopia-map-component';

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
    <MapComponent
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

Props



Prop
Type
Default
Description



selectedRegion
`string
null`
null


setSelectedRegion
`React.Dispatch<React.SetStateAction<string
null>>`
-


regionData
Record<string, any>
{}
Custom data for regions (e.g., value, label, universities).


defaultFillColor
string
#67AE6E
Default region fill color.


activeFillColor
string
#90C67C
Fill color for the active region.


hoverFillColor
string
#90C67C
Fill color on region hover.


strokeColor
string
#328E6E
Region boundary stroke color.


activeStrokeColor
string
#FFFFFF
Stroke color for the active region.


strokeWidth
number
0.7
Default stroke width.


activeStrokeWidth
number
1
Stroke width for the active region.


hoverOpacity
number
0.9
Region opacity on hover (0 to 1).


className
string
flex items-center justify-center w-full h-auto bg-gray-100
Container class name.


svgClassName
string
w-full h-auto
SVG element class name.


onRegionHover
`(regionId: string
null) => void`
-


onRegionClick
(regionId: string) => void
-
Callback on region click.


tooltipContent
(regionId: string, data?: any) => React.ReactNode
-
Renders custom tooltip content.


width
`string
number`
100%


height
`string
number`
auto


viewBox
string
0 0 441.853 328.295
SVG viewBox for scaling.


enableZoom
boolean
false
Enables zoom functionality.


zoomLevel
number
1
Initial zoom level.


customStyles
string
''
Additional SVG CSS styles.


showRegionLabels
boolean
false
Displays region labels.


labelClassName
string
text-xs font-medium
Class name for labels.


labelPosition
string
center
Label position ('center', 'top', etc.).


showValues
boolean
false
Displays region values.


valueFormatter
(val: any) => string
(val) => val.toString()
Formats region values.


defaultLabelStyle
React.CSSProperties
{}
Styles for region labels.


defaultValueStyle
React.CSSProperties
{}
Styles for region values.


showLegend
boolean
true
Displays a legend.


Styling
Uses Tailwind CSS. Include it in your project:
<link href="https://cdn.jsdelivr.net/npm/tailwindcss@2.2.19/dist/tailwind.min.css" rel="stylesheet">

License
MIT