import { ResponsiveCalendar } from '@nivo/calendar'
import data from './heatmapData';

const SubmissionHeatmap = () => (
    <ResponsiveCalendar
        data={data}
        from="2015-03-01"
        to="2015-12-01"
        emptyColor="#383838"
        colors={['#109932', '#7FE18B', '#016620', '#28C244']}
        margin={{ top: 40, right: 40, bottom: 40, left: 40 }}
        yearSpacing={40}
        monthSpacing={10}
        monthBorderColor="#ffffff"
        monthBorderWidth={0}
        dayBorderWidth={0}
        daySpacing={4}
        monthLegendPosition="after"
        monthLegendOffset={18}
        dayBorderColor="#ffffff"
        legends={[
            {
                anchor: 'bottom-right',
                direction: 'row',
                translateY: 36,
                itemCount: 4,
                itemWidth: 42,
                itemHeight: 36,
                itemsSpacing: 14,
                itemDirection: 'right-to-left',
            }
        ]}
        theme={
            {
                text: {
                    fontSize: '16px',
                    fill: '#ffffff'
                }
            }
        }
    />
)

export default SubmissionHeatmap;





