import React from 'react'
import { Axis, Chart, Geom, Tooltip } from "bizcharts";
import moment from "moment";

export default function Index(props) {

    const { chartData = [] } = props;

    return (
        <div>
            <Chart
                forceFit
                height={200}
                data={chartData}
                scale={{
                    time: {
                        // 需要自己计算合理的ticks分隔，不然会出现数据空白的现象
                        //ticks: data.map(d=>d.time),
                        tickCount: 10
                    },
                    averageDelay: {
                        tickCount: 4
                    }
                }}
                padding={["auto", "auto", "auto", "auto"]}
            >
                <Axis name="time" title={null} label={{
                    formatter: val => {
                        const ti = moment(parseInt(val));
                        return ti.format("mm:ss");
                    }
                }} />
                <Axis
                    name="averageDelay"
                    title={null}
                    label={{
                        formatter: val => `${val}ms`
                    }}
                />
                <Tooltip />
                <Geom
                    type="line"
                    position="time*averageDelay"
                    //color={`l (270) 0:rgba(47,194,91,1) ${percent}:rgba(206,241,141,1) 1:rgba(255,0,0,1)`}
                    tooltip={[
                        "time*averageDelay",
                        (time, averageDelay) => ({
                            title: moment(time).format("MM-DD HH:mm:ss"),
                            name: "延迟",
                            value: `${averageDelay} ms`
                        })
                    ]}
                    select={[
                        true,
                        {
                            mode: "single"
                        }
                    ]}
                />
            </Chart>
        </div>
    )
}