import MasterDetail from '@sakit-sa/react-master-detail';
import {MASTER_CLASS} from 'config/master-detail.config';
import { MasterHeader} from "./components/index";
import {isEmptyObject} from "utils/functions.util";
import {INPUT_CONFIG} from './CreateResource.config'
import {FormComponent} from 'components/Form/Form.component'


export const CreateResourceTemplate = (props) => {

    return (
        <div className="flex-column overflow-hidden flex-1 height-expand">
            <div className="flex-column overflow-hidden flex-1">
                <MasterDetail
                    centerAlign={false}
                    masterWidth={isEmptyObject(props.details) ? '100%' : '60%'}
                    adjustable={false}
                    className={MASTER_CLASS}
                    showDetail={!isEmptyObject(props.details)}
                    onClose={props.onClose}
                >
                    <div>
                        <MasterHeader
                            onReload={props.onReload}
                            /*  onCreate={props.onCreateCustomer}*/
                            onExcel={props.onExcel}
                        />
                        <FormComponent  configs={INPUT_CONFIG} submit={props.onSubmit} />
                    </div>
                </MasterDetail>
            </div>
        </div>

    );
}
