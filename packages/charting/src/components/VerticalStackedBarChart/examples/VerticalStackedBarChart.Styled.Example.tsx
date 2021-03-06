import * as React from 'react';
import { ChartHoverCard, VerticalStackedBarChart } from '@uifabric/charting';
import { IVerticalStackedBarChartProps, IVerticalStackedChartProps, IVSChartDataPoint } from '@uifabric/charting';
import { DirectionalHint } from 'office-ui-fabric-react/lib/Callout';
import { DefaultFontStyles, DefaultPalette, IStyle, mergeStyles } from 'office-ui-fabric-react/lib/Styling';

export class VerticalStackedBarChartStyledExample extends React.Component<{}, {}> {
  public render(): JSX.Element {
    const firstChartPoints: IVSChartDataPoint[] = [
      { legend: 'Metadata1', data: 40, color: DefaultPalette.accent },
      { legend: 'Metadata2', data: 5, color: DefaultPalette.blueMid },
      { legend: 'Metadata3', data: 15, color: DefaultPalette.blueLight },
    ];

    const secondChartPoints: IVSChartDataPoint[] = [
      { legend: 'Metadata1', data: 30, color: DefaultPalette.accent },
      { legend: 'Metadata2', data: 3, color: DefaultPalette.blueMid },
      { legend: 'Metadata3', data: 40, color: DefaultPalette.blueLight },
    ];

    const thirdChartPoints: IVSChartDataPoint[] = [
      { legend: 'Metadata1', data: 10, color: DefaultPalette.accent },
      { legend: 'Metadata2', data: 60, color: DefaultPalette.blueMid },
      { legend: 'Metadata3', data: 30, color: DefaultPalette.blueLight },
    ];

    const data: IVerticalStackedChartProps[] = [
      { chartData: firstChartPoints, xAxisPoint: 'Jan' },
      { chartData: secondChartPoints, xAxisPoint: 'Feb' },
      { chartData: thirdChartPoints, xAxisPoint: 'March' },
      { chartData: firstChartPoints, xAxisPoint: 'April' },
      { chartData: thirdChartPoints, xAxisPoint: 'May' },
      { chartData: firstChartPoints, xAxisPoint: 'June' },
      { chartData: secondChartPoints, xAxisPoint: 'July' },
      { chartData: thirdChartPoints, xAxisPoint: 'August' },
      { chartData: firstChartPoints, xAxisPoint: 'September' },
    ];

    const textStyle: IStyle = {
      fill: DefaultPalette.black,
      fontSize: '10px',
      lineHeight: '14px',
    };

    const customStyles: IVerticalStackedBarChartProps['styles'] = () => {
      return {
        chart: {
          paddingBottom: '45px',
        },
        chartLabel: {
          color: DefaultPalette.blueMid,
          ...DefaultFontStyles.large,
        },
        xAxisText: {
          ...textStyle,
        },
      };
    };
    const rootStyle = mergeStyles({ width: '600px', height: '350px' });
    return (
      <div className={rootStyle}>
        <VerticalStackedBarChart
          data={data}
          height={350}
          width={600}
          yAxisTickCount={10}
          href={'www.google.com'}
          // eslint-disable-next-line react/jsx-no-bind
          styles={customStyles}
          chartLabel="Card title"
          yMaxValue={120}
          // eslint-disable-next-line react/jsx-no-bind
          yAxisTickFormat={x => `${x} h`}
          margins={{ left: 50 }}
          legendProps={{
            allowFocusOnLegends: true,
            styles: {
              rect: {
                borderRadius: '3px',
              },
            },
          }}
          calloutProps={{
            directionalHint: DirectionalHint.rightTopEdge,
          }}
          // eslint-disable-next-line react/jsx-no-bind
          onRenderCalloutPerDataPoint={props =>
            props ? (
              <ChartHoverCard
                XValue={props.xAxisCalloutData}
                Legend={props.legend}
                YValue={`${props.yAxisCalloutData} h`}
                color={props.color}
              />
            ) : null
          }
        />
      </div>
    );
  }
}
