import {useEffect, useState} from 'react';
import {useDispatch} from 'react-redux';
import {ReportTemplate} from './Report.template';
import {useLocation, useNavigate} from "react-router-dom";


const Report = () => {
    const dispatch = useDispatch();
    const [chartData, setChartData] = useState([]);
    const [loading, setLoading] = useState(false);
    const navigate = useNavigate();
    const {search: query, pathname} = useLocation();

    useEffect(() => {
        (async () => {
            await asyncFetch();
        })();
    }, [query]);


    const asyncFetch = () => {
        fetch('https://gw.alipayobjects.com/os/bmw-prod/55424a73-7cb8-4f79-b60d-3ab627ac5698.json')
            .then((response) => response.json())
            .then((json) => {
                setChartData(json);
            })
            .catch((error) => {
                console.log('fetch data failed', error);
            });
    };

//for your main APi

    /*   const asyncFetch = async (firstLoad = true, preLocation = null) => {
       console.log('tt')
           setLoading(true)
           try {
               const result = await dispatch(fetchChartData(query));
               setChartData(result.map((i) => {
                   return {
                       ...i,
                   }
               }))

           } catch (e) {
               setLoading(false)
               setChartData([])
           } finally {
               setLoading(false)
           }
       };*/


    return (
        <ReportTemplate
            data={chartData}
            loading={loading}
        />
    );
}

export {Report};


