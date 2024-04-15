import { ResponsiveBar } from "@nivo/bar";

const data = [
  { rating: "1000-1049", users: 804, color: "hsl(0, 70%, 50%)" },
  { rating: "1050-1099", users: 2000, color: "hsl(30, 70%, 50%)" },
  { rating: "1100-1149", users: 705, color: "hsl(60, 70%, 50%)" },
  { rating: "1150-1199", users: 655, color: "hsl(90, 70%, 50%)" },
  { rating: "1200-1249", users: 601, color: "hsl(120, 70%, 50%)" },
  { rating: "1250-1299", users: 552, color: "hsl(150, 70%, 50%)" },
  { rating: "1300-1349", users: 5012, color: "hsl(180, 70%, 50%)" },
  { rating: "1350-1399", users: 4511, color: "hsl(210, 70%, 50%)" },
  { rating: "1400-1449", users: 4021, color: "hsl(240, 70%, 50%)" },
  { rating: "1450-1499", users: 3512, color: "hsl(270, 70%, 50%)" },
  { rating: "1500-1549", users: 3012, color: "hsl(300, 70%, 50%)" },
  { rating: "1550-1599", users: 2521, color: "hsl(330, 70%, 50%)" },
  { rating: "1600-1649", users: 2012, color: "hsl(0, 70%, 60%)" },
  { rating: "1650-1699", users: 1521, color: "hsl(30, 70%, 60%)" },
  { rating: "1700-1749", users: 1021, color: "hsl(60, 70%, 60%)" },
  { rating: "1750-1799", users: 523, color: "hsl(90, 70%, 60%)" },
  { rating: "1800-1849", users: 355, color: "hsl(120, 70%, 60%)" },
  { rating: "1850-1899", users: 245, color: "hsl(150, 70%, 60%)" },
  { rating: "1900-1949", users: 155, color: "hsl(180, 70%, 60%)" },
  { rating: "1950-1999", users: 100, color: "hsl(210, 70%, 60%)" },
  { rating: "2000+", users: 56, color: "hsl(240, 70%, 60%)" },
];

const TopRatingBarGraph = () => (
  <ResponsiveBar
    data={data}
    keys={["users"]}
    indexBy="rating"
    margin={{ top: 50, right: 130, bottom: 50, left: 60 }}
    padding={0.2}
    innerPadding={0.5}
    valueScale={{ type: "linear" }}
    indexScale={{ type: "band", round: true }}
    colors={{ scheme: "dark2" }}
    axisTop={null}
    axisRight={null}
    axisBottom={null}
    axisLeft={null}
    enableLabel={false}
    enableGridX={false}
    enableGridY={false}
  />
);

export default TopRatingBarGraph;
