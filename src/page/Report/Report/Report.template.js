import MasterDetail from '@sakit-sa/react-master-detail';
import {MASTER_CLASS} from 'config/master-detail.config';
import { MasterBody} from "./components/index";
import {isEmptyObject} from "utils/functions.util";
import {ActionBar} from "components";


export const ReportTemplate = (props) => {
    return (
        <div className="flex-column overflow-hidden flex-1 height-expand">
{/*
            <ActionBar title={'Reports-Charts'}/>
*/}
            <div className="flex-column overflow-hidden flex-1">
                <MasterDetail
                    centerAlign={false}
                    masterWidth={isEmptyObject(props.details) ? '100%' : '60%'}
                    adjustable={true}
                    className={MASTER_CLASS}
                    showDetail={!isEmptyObject(props.details)}
                >
                    <div>
                        <MasterBody
                            data={props.data}
                            loading={props.loading}
                        />
                    </div>
                </MasterDetail>
            </div>
        </div>
    );
}
