import React from "react";
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from "recharts";
import "./RenewableGraph.css";

const data = [
  { name: "1년", 납입보험료: 410000, 해약환급금: 190000 },
  { name: "3년", 납입보험료: 1120000, 해약환급금: 680000 },
  { name: "5년", 납입보험료: 1920000, 해약환급금: 1470000 },
  { name: "7년", 납입보험료: 2900000, 해약환급금: 2420000 },
  { name: "10년", 납입보험료: 4040000, 해약환급금: 3510000 },
  { name: "15년", 납입보험료: 6340000, 해약환급금: 5410000 },
  { name: "20년", 납입보험료: 8400000, 해약환급금: 7410000 },
  { name: "25년", 납입보험료: 8400000, 해약환급금: 6510000 },
  { name: "30년", 납입보험료: 8400000, 해약환급금: 5010000 },
  { name: "35년", 납입보험료: 8400000, 해약환급금: 3210000 },
  { name: "40년", 납입보험료: 8400000 },
];
const CustomXAxisTick = ({ x, y, payload }) => (
  <text x={x + 5} y={y + 15} textAnchor="middle" className="custom-axis-tick">
    {payload.value}
  </text>
);

const CustomYAxisTick = ({ x, y, payload }) => (
  <text x={x - 5} y={y + 15} textAnchor="end" className="custom-axis-tick">
    {`${(payload.value / 10000).toLocaleString()}만원`}
  </text>
);
const NonRenewableGraph = () => {
  const CustomDot1 = (props) => {
    const { cx, cy } = props;
    return (
      <circle
        cx={cx}
        cy={cy}
        r={4}
        stroke="#D1D0CC"
        strokeWidth={1}
        fill="#D1D0CC"
      />
    );
  };
  const CustomDot2 = (props) => {
    const { cx, cy } = props;
    return (
      <circle
        cx={cx}
        cy={cy}
        r={4}
        stroke="#FFCB51"
        strokeWidth={1}
        fill="#FFCB51"
      />
    );
  };

  const renderLegend = (props) => {
    const { payload } = props;
    return (
      <div className="custom-legend">
        {payload.map((entry, index) => (
          <div key={`item-${index}`} className="legend-item">
            <svg width="16" height="16">
              <circle cx="8" cy="8" r="4" fill={entry.color} />
            </svg>
            <span class="text-[10px] font-normal leading-[14px] text-[#272520]">
              {entry.value}
            </span>
          </div>
        ))}
      </div>
    );
  };

  return (
    <div
      className="message-box"
      class="mb-[50px] ml-[55.5px] h-[522px] w-[424px] rounded-[10px] bg-white p-5"
    >
      <div className="message-content">
        <h3>비갱신형</h3>
        <hr class="my-2" />
        <p>기준 : 주계약 보험가입금액 3천만원, 40세, 80세만기, 20년납, 월납</p>
        <p>
          (의무부가특약 - iM 암보험 무배당 2404소액암진단특약(비갱신형)
          보험가입금액 3천만원)
        </p>
        <div className="graph-container">
          <h4>남자</h4>
          <hr className="mb-10" />
          <ResponsiveContainer width="100%" height={256}>
            <LineChart data={data}>
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis
                dataKey="name"
                padding={{ left: 30, right: 30 }}
                tick={<CustomXAxisTick />}
              />
              <YAxis
                tickFormatter={(value) =>
                  `${(value / 10000).toLocaleString()}만원`
                }
                ticks={[2000000, 4000000, 6000000, 8000000, 10000000]}
                domain={[2000000, 10000000]}
                tick={<CustomYAxisTick />}
                padding={{ bottom: 10, top: 20 }}
              />
              <Tooltip formatter={(value) => `${value.toLocaleString()} 원`} />
              <Legend
                content={renderLegend}
                wrapperStyle={{ top: -30, left: 110 }}
              />
              <Line
                // type="monotone" //곡선
                type="category" //직선
                dataKey="납입보험료"
                stroke="#D1D0CC"
                dot={(props) =>
                  props.payload.납입보험료 ? <CustomDot1 {...props} /> : null
                }
              />
              <Line
                type="category"
                dataKey="해약환급금"
                stroke="#FFCB51"
                dot={(props) =>
                  props.payload.해약환급금 ? <CustomDot2 {...props} /> : null
                }
              />
            </LineChart>
          </ResponsiveContainer>
        </div>
      </div>
    </div>
  );
};

export default NonRenewableGraph;
