import { useTheme } from "@mui/material";
import { ResponsiveLine } from "@nivo/line";
import { tokens } from "../theme";
import { mockLineData as data } from "../data/mockData";

const LineChart = ({ isDashboard = false }) => {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);

  return (
    <ResponsiveLine /* or Line for fixed dimensions */
      data={data}
      margin={{ top: 50, right: 110, bottom: 50, left: 60 }}
      yScale={{
        type: "linear",
        min: "auto",
        max: "auto",
        stacked: true,
        reverse: false,
      }}
      curve="catmullRom"
      axisBottom={{ legend: "transportation", legendOffset: 36 }}
      axisLeft={{ legend: "count", legendOffset: -40 }}
      enableGridX={false}
      enableGridY={false}
      pointSize={10}
      pointColor={{ theme: "background" }}
      pointBorderWidth={2}
      pointBorderColor={{ from: "seriesColor" }}
      pointLabelYOffset={-12}
      enableTouchCrosshair={true}
      useMesh={true}
      legends={[
        {
          anchor: "bottom-right",
          direction: "column",
          translateX: 100,
          itemWidth: 80,
          itemHeight: 22,
          symbolShape: "circle",
          itemTextColor: colors.grey[100],
        },
        
      ]}
      theme={{
        text: {
          fill: colors.grey[100], // all text (axis, tooltip) becomes light
        },
        axis: {
          ticks: {
            line: {
              stroke: colors.grey[100],
            },
            text: {
              fill: colors.grey[100],
            },
          },
          legend: {
            text: {
              fill: colors.grey[100],
            },
          },
        },
        tooltip: {
          container: {
            background: "#ffffff",
            color: "#333333",
            fontSize: 13,
            borderRadius: "6px",
            padding: "6px 10px",
            boxShadow: "0 0 10px rgba(0,0,0,0.2)",
          },
        },
      }}

      // ✅ CUSTOM TOOLTIP
      tooltip={({ point }) => (
        <div
          style={{
            display: "flex",
            alignItems: "center",
            background: "white",
            padding: "6px 10px",
            borderRadius: "6px",
            boxShadow: "0 0 10px rgba(0,0,0,0.15)",
            color: "#333",
            fontSize: 13,
            fontWeight: 500,
          }}
        >
          <div
            style={{
              width: 10,
              height: 10,
              backgroundColor: point.seriesColor,
              borderRadius: 2,
              marginRight: 8,
            }}
          />
          {`${point.data.y}`}
        </div>
      )}
    />
  );
};

export default LineChart;
