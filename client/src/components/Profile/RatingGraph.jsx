import { ResponsiveLine } from "@nivo/line";

const data = [
  {
    id: "ai_alok",
    color: "hsl(297, 70%, 50%)",
    data: [
      {
        x: "Contest 1",
        y: 2576,
      },
      {
        x: "Contest 2",
        y: 2340,
      },
      {
        x: "Contest 3",
        y: 2786,
      },
    ],
  },
];

function RatingGraph() {
  return (
    <ResponsiveLine
      data={data}
      margin={{ top: 50, right: 110, bottom: 50, left: 60 }}
      xScale={{ type: "point" }}
      yScale={{
        type: "linear",
        min: "auto",
        max: "auto",
        stacked: true,
        reverse: false,
      }}
      yFormat=" >-.2f"
      axisTop={null}
      axisRight={null}
      axisBottom={null}
      axisLeft={null}
      pointSize={10}
      pointColor={{ from: "color", modifiers: [] }}
      pointBorderWidth={2}
      pointBorderColor={{ from: "serieColor" }}
      pointLabelYOffset={-12}
      enableTouchCrosshair={true}
      useMesh={true}
      enableGridX={false}
      enableGridY={false}
      colors={{ scheme: "dark2" }}
      enableSlices="x"
      // borderColor="#5E4623"
    />
  );
}

export default RatingGraph;
