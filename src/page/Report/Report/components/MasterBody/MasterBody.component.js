import {useLocation, useNavigate} from 'react-router-dom';
import {MasterBodyCountTemplate} from './MasterBodyCount.template';
import {Card, Space} from 'antd';
import {LineChartOutlined} from '@ant-design/icons';

const MasterBody = props => {
    const navigate = useNavigate();
    const {search: query} = useLocation();

    return (
        <>
            <Card
                headStyle={{backgroundColor: '#dff0d8'}}
                title={<Space><LineChartOutlined/>fuel Resource</Space>}
            >
                <MasterBodyCountTemplate
                    {...props}
                />
            </Card>
        </>
    );

}
export {MasterBody};