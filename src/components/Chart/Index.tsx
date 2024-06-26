import {
  ResponsiveContainer,
  LineChart,
  XAxis,
  YAxis,
  Line,
  Legend,
  CartesianGrid,
} from "recharts";
import { ISale } from "../../@types/global";
import { transformData } from "../utils/transformData";

export const Chart = ({ data }: { data: ISale[] }) => {
  const chartData = transformData(data);

  return (
    <ResponsiveContainer width="99%" height={400}>
      <LineChart data={chartData}>
        <XAxis dataKey="data" />
        <YAxis />
        <CartesianGrid stroke="#323236" />
        <Line type="monotone" dataKey="pago" stroke="#175BE5" strokeWidth={3} />
        <Line
          type="monotone"
          dataKey="processando"
          stroke="#fafafa"
          strokeWidth={3}
        />
        <Line
          type="monotone"
          dataKey="falha"
          stroke="#fa5210"
          strokeWidth={3}
        />
        <Legend />
      </LineChart>
    </ResponsiveContainer>
  );
};
