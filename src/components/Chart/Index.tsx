import {
  ResponsiveContainer,
  LineChart,
  XAxis,
  YAxis,
  Line,
  Legend,
  CartesianGrid,
} from "recharts";
import { IVenda } from "../../@types/global";
import { transformData } from "../utils/transformData";

export const Chart = ({ data }: { data: IVenda[] }) => {
  const chartData = transformData(data);

  return (
    <ResponsiveContainer width="99%" height={400}>
      <LineChart data={chartData}>
        <XAxis dataKey="data" />
        <YAxis />
        <CartesianGrid stroke="#323236" />
        <Line type="monotone" dataKey="pago" stroke="#3535e0" strokeWidth={3} />
        <Line
          type="monotone"
          dataKey="processando"
          stroke="#fafafa"
          strokeWidth={3}
        />
        <Line
          type="monotone"
          dataKey="falha"
          stroke="#fab810"
          strokeWidth={3}
        />
        <Legend />
      </LineChart>
    </ResponsiveContainer>
  );
};
