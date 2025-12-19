import React, { useMemo } from 'react';
import Chart from 'react-apexcharts';
import { ApexOptions } from 'apexcharts';
import { Typography } from '@/components/Typography';
import graphBg from '@/assets/images/graph-bg.svg';
import vectorIcon from '@/assets/icons/Vector.svg';

interface GrowthDataPoint {
  year: string;
  growth: number;
  isHighlighted?: boolean;
  hasSpecialIcon?: boolean;
}

const growthData: GrowthDataPoint[] = [
  { year: '2020', growth: 19 },
  { year: '', growth: 24 },
  { year: '2021', growth: 38 },
  { year: '', growth: 30 },
  { year: '2022', growth: 38 },
  { year: '', growth: 58 },
  { year: '2023', growth: 63, isHighlighted: true, hasSpecialIcon: true },
  { year: '2024', growth: 158 }, // 👈 high value (no clipping now)
];

export const CompanyHistorySection: React.FC = () => {
  /**
   * ✅ IMPORTANT FIX #1
   * Add headroom above highest value
   */
  const maxGrowth = Math.max(...growthData.map(d => d.growth));
  const yAxisMax = Math.ceil(maxGrowth * 1.25); // 25% headroom

  const chartOptions: ApexOptions = useMemo(() => ({
    chart: {
      type: 'area',
      height: 385,
      background: 'transparent',
      toolbar: { show: false },
      zoom: { enabled: false },
      animations: { enabled: false },
    },

    dataLabels: {
      enabled: true,
      formatter: (_val, { dataPointIndex }) => {
        const point = growthData[dataPointIndex];
        return point.year ? point.year : '';
      },
      offsetY: -10, // 👈 reduced to avoid top clipping
      style: {
        fontSize: '14px',
        fontWeight: 600,
        colors: ['#FFFFFF'],
      },
      background: { enabled: false },
    },

    stroke: {
      curve: 'straight',
      width: 2,
      colors: ['#0070FF'],
    },

    fill: {
      type: 'gradient',
      gradient: {
        shadeIntensity: 1,
        opacityFrom: 0.3,
        opacityTo: 0.05,
        colorStops: [
          { offset: 0, color: '#0070FF', opacity: 0.3 },
          { offset: 100, color: '#0070FF', opacity: 0.05 },
        ],
      },
    },

    xaxis: {
      categories: growthData.map(d => d.year),
      labels: { show: false },
      axisBorder: { show: false },
      axisTicks: { show: false },
      tooltip: { enabled: false },
    },

    /**
     * ✅ IMPORTANT FIX #2
     * Dynamic y-axis scaling
     */
    yaxis: {
      min: 0,
      max: yAxisMax,
      labels: { show: false },
      axisBorder: { show: false },
      axisTicks: { show: false },
    },

    /**
     * ✅ IMPORTANT FIX #3
     * Reserve visual space inside SVG
     */
    grid: {
      show: false,
      padding: {
        top: -50,     // 👈 critical
        left: 20,
        right: 20,
        bottom: -10,
      },
    },

    tooltip: { enabled: false },

    theme: { mode: 'dark' },

    markers: {
      discrete: growthData.map((_, index) => ({
        seriesIndex: 0,
        dataPointIndex: index,
        fillColor: index % 2 === 1 ? '#18181B' : '#FFFFFF',
        strokeColor: '#0070FF',
        strokeWidth: 3,
        size: 6,
        shape: 'circle',
      })),
    },

    annotations: {
      points: growthData
        .map((point, index) => {
          if (!point.hasSpecialIcon) return null;

          return {
            x: index,
            y: point.growth,
            marker: { size: 0 },
            image: {
              path: vectorIcon,
              width: 44,
              height: 44,
              offsetY: -60,
            },
          };
        })
        .filter(Boolean) as any[],
    },
  }), [yAxisMax]);

  const chartSeries = useMemo(() => [
    {
      name: 'Company Growth',
      data: growthData.map(d => d.growth),
    },
  ], []);

  return (
    <div className="bg-neutral-900 relative w-full overflow-hidden ">
      {/* Background */}
      <div className="absolute inset-0 opacity-70 pointer-events-none z-0">
        <img
          src={graphBg}
          alt=""
          className="w-full h-full object-cover"
        />
      </div>

      {/* Content with Flex Layout */}
      <div className="flex flex-col gap-8 lg:gap-[32px] relative z-10">
        {/* Title Section */}
        <div className="pt-8 sm:pt-12 px-4 lg:px-[80px] flex flex-col gap-4 lg:gap-8 lg:pt-[56px]">
        <div className="flex flex-col sm:flex-row gap-2.5 sm:gap-[10px] items-center">
          <Typography variant="title" weight="bold" className="text-white">
            Journey through our
          </Typography>
          <div className="bg-neutral-800 flex items-start justify-center px-2.5 sm:px-[10px] py-1 sm:py-[5px] rounded-[10px]">
            <Typography variant="title" weight="bold" className="text-primary-500">
              Company's History
            </Typography>
          </div>
        </div>

        {/* Description Section */}
        <Typography variant="h4" weight="medium" className="text-neutral-200 max-w-[764px]">
          From our humble beginnings to our current achievements, discover how we've evolved and grown, embracing innovation and dedication every step of the way.
        </Typography>
</div>
        {/* Chart */}
        <div className="relative w-full h-[385px]">
          <Chart
            options={chartOptions}
            series={chartSeries}
            type="area"
            height={385}
          />
        </div>
      </div>
    </div>
  );
};
