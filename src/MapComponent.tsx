import React, { useState, useCallback } from 'react';
import demoData from './demo-data';

 interface MapRegion {
  id: string;
  name: string;
  points: string;
  path?: string;
}

 interface MapComponentProps {
  selectedRegion: string | null;
  setSelectedRegion: React.Dispatch<React.SetStateAction<string | null>>;
  regions?: MapRegion[];
  defaultFillColor?: string;
  activeFillColor?: string;
  hoverFillColor?: string;
  strokeColor?: string;
  activeStrokeColor?: string;
  strokeWidth?: number;
  activeStrokeWidth?: number;
  hoverOpacity?: number;
  className?: string;
  svgClassName?: string;
  onRegionHover?: (regionId: string | null) => void;
  onRegionClick?: (regionId: string) => void;
  tooltipContent?: (regionId: string) => React.ReactNode;
  width?: string | number;
  height?: string | number;
  viewBox?: string;
  enableZoom?: boolean;
  zoomLevel?: number;
  customStyles?: string;
}

const MapComponent: React.FC<MapComponentProps> = ({
  selectedRegion,
  setSelectedRegion,
  regions = demoData,
  defaultFillColor = '#00C4B4',
  activeFillColor = '#40E0D0',
  hoverFillColor = '#40E0D0',
  strokeColor = '#808080',
  activeStrokeColor = '#FFFFFF',
  strokeWidth = 1,
  activeStrokeWidth = 2,
  hoverOpacity = 0.9,
  className = 'flex flex-col lg:flex-row gap-4 p-4',
  svgClassName = 'w-full h-auto',
  onRegionHover,
  onRegionClick,
  tooltipContent,
  width = '100%',
  height = 'auto',
  viewBox = '0 0 441.853 328.295',
  enableZoom = false,
  zoomLevel = 1,
  customStyles = ''
}) => {
  const [hoveredRegion, setHoveredRegion] = useState<string | null>(null);

  const handleRegionClick = useCallback((regionId: string) => {
    setSelectedRegion((prev) => (prev === regionId ? null : regionId));
    onRegionClick?.(regionId);
  }, [setSelectedRegion, onRegionClick]);

  const handleRegionHover = useCallback((regionId: string | null) => {
    setHoveredRegion(regionId);
    onRegionHover?.(regionId);
  }, [onRegionHover]);

  return (
    <div className={className}>
      <div className="w-full h-full relative">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox={viewBox}
          className={svgClassName}
          width={width}
          height={height}
          style={{ transform: enableZoom ? `scale(${zoomLevel})` : 'none' }}
        >
          <style>
            {`
              .state {
                fill: ${defaultFillColor};
                stroke: ${strokeColor};
                stroke-width: ${strokeWidth};
                transition: fill 0.3s, stroke 0.3s, opacity 0.3s;
              }
              .state.active {
                fill: ${activeFillColor};
                stroke: ${activeStrokeColor};
                stroke-width: ${activeStrokeWidth};
              }
              .state:hover {
                cursor: pointer;
                fill: ${hoverFillColor};
                opacity: ${hoverOpacity};
              }
              ${customStyles}
            `}
          </style>
          {regions.map((region) => (
            <g key={region.id} className="state" id={`${region.id}l`}>
              {region.path ? (
                <path
                  d={region.path}
                  className={`state ${selectedRegion === region.id ? 'active' : ''}`}
                  onClick={() => handleRegionClick(region.id)}
                  onMouseEnter={() => handleRegionHover(region.id)}
                  onMouseLeave={() => handleRegionHover(null)}
                >
                  {tooltipContent && (
                    <title>{tooltipContent(region.id)}</title>
                  )}
                </path>
              ) : (
                <polygon
                  id={region.id}
                  points={region.points}
                  className={`state ${selectedRegion === region.id ? 'active' : ''}`}
                  onClick={() => handleRegionClick(region.id)}
                  onMouseEnter={() => handleRegionHover(region.id)}
                  onMouseLeave={() => handleRegionHover(null)}
                >
                  {tooltipContent && (
                    <title>{tooltipContent(region.id)}</title>
                  )}
                </polygon>
              )}
            </g>
          ))}
        </svg>
        {tooltipContent && hoveredRegion && (
          <div className="absolute top-0 left-0 bg-white p-2 rounded shadow">
            {tooltipContent(hoveredRegion)}
          </div>
        )}
      </div>
      <div className="mt-4">
        <button
          className="w-fit bg-primary font-bold text-sm text-primary-dark-2 py-1 px-3 rounded-full cursor-pointer"
          onClick={() => {
            setSelectedRegion(null);
            handleRegionHover(null);
          }}
        >
          All
        </button>
      </div>
    </div>
  );
};

export default MapComponent;
// ...existing code...

export type { MapComponentProps, MapRegion };