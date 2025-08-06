import { useTheme } from "@mui/material";
import { ResponsivePie } from "@nivo/pie";
import { tokens } from "../theme";
import { mockPieData as data } from "../data/mockData";

const PieChart = ({ isDashboard = false }) => {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);

  return (
    <ResponsivePie
      data={data}
      margin={{ top: 40, right: 80, bottom: 80, left: 80 }}
      innerRadius={0.5}
      padAngle={0.6}
      cornerRadius={2}
      activeOuterRadiusOffset={8}
      arcLinkLabelsSkipAngle={10}
      arcLinkLabelsTextColor="#ffffffff"
      arcLinkLabelsThickness={2}
      arcLinkLabelsColor={{ from: "color" }}
      arcLabelsSkipAngle={10}
      arcLabelsTextColor={{ from: "color", modifiers: [["darker", 2]] }}
      legends={[
        {
          anchor: "bottom",
          direction: "row",
          translateY: 56,
          itemWidth: 100,
          itemHeight: 18,
          symbolShape: "circle",
          itemTextColor: "#ffffffff",
        },
      ]}
      // 🔽 ADD THIS 👇
      tooltip={({ datum }) => (
        <div
          style={{
            display: "flex",
            alignItems: "center",
            background: "white",
            padding: "8px 10px",
            borderRadius: "6px",
            boxShadow: "0 0 10px rgba(0,0,0,0.2)",
            fontSize: 13,
            fontWeight: 500,
            color: "#333",
          }}
        >
          <div
            style={{
              width: 12,
              height: 12,
              backgroundColor: datum.color,
              borderRadius: "3px",
              marginRight: 8,
            }}
          />
          {datum.label}
        </div>
      )}
    />
  );
};

export default PieChart;
