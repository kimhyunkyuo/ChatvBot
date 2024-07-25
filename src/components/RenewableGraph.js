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
  { name: "1년", 납입보험료: 90000, 해약환급금: 20000 },
  { name: "3년", 납입보험료: 220000, 해약환급금: 80000 },
  { name: "5년", 납입보험료: 360000, 해약환급금: 170000 },
  { name: "7년", 납입보험료: 580000, 해약환급금: 280000 },
  { name: "10년", 납입보험료: 840000 },
];
const CustomXAxisTick = ({ x, y, payload }) => (
  <text x={x + 5} y={y + 15} textAnchor="middle" className="custom-axis-tick">
    {payload.value}
  </text>
);

const CustomYAxisTick = ({ x, y, payload }) => (
  <text x={x - 10} y={y + 15} textAnchor="end" className="custom-axis-tick">
    {`${(payload.value / 10000).toLocaleString()}만원`}
  </text>
);
const RenewableGraph = () => {
  const CustomDot1 = (props) => {
    const { cx, cy } = props;
    return (
      <circle
        cx={cx}
        cy={cy}
        r={4}
        stroke="var(--Line-Gray-Normal)"
        strokeWidth={1}
        fill="var(--Line-Gray-Normal)"
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
        stroke="var(--Primary-Normal)"
        strokeWidth={1}
        fill="var(--Primary-Normal)"
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
            <span class="text-[10px] font-normal leading-[14px] text-Text-Normal">
              {entry.value}
            </span>
          </div>
        ))}
      </div>
    );
  };

  return (
    <div className="message-box">
      <div className="message-content">
        <h3>갱신형</h3>
        <hr class="my-2" />
        <p>
          기준 : 주계약 보험가입금액 3천만원, 40세, 10년만기, 전기납, 월납,
          최초계약 (의무부가특약 - iM 암보험 무배당 2404 소액암진단특약(갱신형)
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
                padding={{ left: 30, right: 50 }}
                tick={<CustomXAxisTick />}
              />
              <YAxis
                tickFormatter={(value) =>
                  `${(value / 10000).toLocaleString()}만원`
                }
                ticks={[200000, 400000, 600000, 800000, 1000000]}
                domain={[200000, 1000000]}
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
          {/* <div className="x-axis-label">Period</div> */}
          {/* <div className="y-axis-label">Amount</div> */}
        </div>
      </div>
    </div>
  );
};

export default RenewableGraph;
