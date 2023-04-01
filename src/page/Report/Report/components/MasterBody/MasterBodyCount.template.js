import {Line} from '@ant-design/plots';
import {Spin} from "antd";
import {LoadingOutlined} from "@ant-design/icons";

const MasterBodyCountTemplate = ({data, loading}) => {

    const COLOR_PLATE_10 = [
        '#5B8FF9',
        '#5AD8A6',
        '#5D7092',
        '#F6BD16',
        '#E8684A',
        '#6DC8EC',
        '#9270CA',
        '#FF9D4D',
        '#269A99',
        '#FF99C3',
    ];
    const config = {
        data,
        xField: 'year',
        yField: 'value',
        seriesField: 'category',
        color: COLOR_PLATE_10,
        //for shamsiDate
        /* point: {
             shape:  'circle' ,
             style: ({ shamsyDate }) => {
                 return {
                     r: Number(shamsyDate) % 4 ? 0 : 3, // 4 个数据示一个点标记
                 };
             },
         },*/
        appendPadding: 20,
        legend: {
            position: 'bottom',
            margin: 20
        }

    };

    if (loading) {
        return <Spin className="box-center height-expand" indicator={<LoadingOutlined style={{fontSize: 34}} spin/>}/>;
    }

    return <div style={{direction: 'ltr'}}><Line {...config} /></div>;
};

export {MasterBodyCountTemplate};
