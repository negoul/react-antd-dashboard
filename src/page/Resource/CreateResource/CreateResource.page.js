import {useEffect, useState} from 'react';
import {useDispatch} from 'react-redux';
import {CreateResourceTemplate} from './CreateResource.template';
import {useLocation, useNavigate} from "react-router-dom";
import {successToast} from 'utils/functions.util';
import {createResource} from "redux/action/resource/resource.action";


const CreateResource = () => {
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const [loading, setLoading] = useState(false);
    const {search: query, pathname} = useLocation();


    const fetchData = async (data) => {
        setLoading(true)
        try {
           const result =  await dispatch(createResource(data));
            successToast(`done! new Id is ${result.id}`)
           // navigate('/where you want! ')
        } catch (e) {
            setLoading(false)
        } finally {
            setLoading(false)
        }
    };


    return (
        <CreateResourceTemplate
            onSubmit={fetchData}
        />
    );
}


export {CreateResource};
