import { useState, useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';

function Detail() {
    const params = useParams();
    const [detail, setDetail] = useState(undefined);

    useEffect(() => {
        document.title = "Detail";
        const json = require('./assets/data.json');
        const detailArr = json.filter(i => i.id === params.id);
        setDetail(detailArr[0]);
    })

    return <div className="container mt-3">
        {
            detail === undefined
                ? 'Loading'
                : <div className="row">
                    <div className="col-12 text-right">
                        <Link to="/">Go Back</Link>
                    </div>

                    <div className="col-4 mb-3">
                        <div>{detail.name}</div>
                        <small>Name</small>
                    </div>
                    <div className="col-4 mb-3">
                        <div>{detail.designation}</div>
                        <small>Designation</small>
                    </div>
                    <div className="col-4 mb-3">
                        <div>{detail.department}</div>
                        <small>Department</small>
                    </div>
                    <div className="col-4 mb-3">
                        <div>{detail.companyName}</div>
                        <small>Company</small>
                    </div>
                    <div className="col-4 mb-3">
                        <div></div>
                        <small></small>
                    </div>
                </div>
        }
    </div>
}

export default Detail;