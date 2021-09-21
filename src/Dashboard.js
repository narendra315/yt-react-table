import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

function Home() {
    const [list, setList] = useState([]);

    useEffect(() => {
        document.title = "Employee List";
        onLoadData();
    })

    const onLoadData = () => {
        const json = require('./assets/data.json');
        setList(json);
    }

    return (
        <div className="container mt-5">
            <h3>Employee List</h3>
            <hr />
            <div className="row mb-3">
                <div className="col-12 text-right">
                    <button className="btn btn-link">Add New</button>
                </div>
            </div>
            <table className="table table-bordered table-striped">
                <thead>
                    <tr>
                        <th>#</th>
                        <th>Name</th>
                        <th>Designation</th>
                        <th>Department</th>
                        <th>Company</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        list.map((item, index) => {
                            return <tr>
                                <td>{index + 1}</td>
                                <td>
                                    <Link to={`/detail/${item.id}`}>
                                        <img src={item.avatar} style={{ height: '3rem', borderRadius: '50%', marginRight: '1rem' }} />
                                        {item.name}
                                    </Link>
                                </td>
                                <td>{item.designation}</td>
                                <td>{item.department}</td>
                                <td>{item.companyName}</td>
                            </tr>
                        })
                    }
                    {
                        list.length === 0 && <tr>
                            <td colSpan={5} className="text-center">No Records Found</td>
                        </tr>
                    }
                </tbody>
            </table>
            <div className="">
                <nav aria-label="Page navigation example" className="float-right">
                    <ul class="pagination">
                        <li class="page-item"><a class="page-link" href="#">Previous</a></li>
                        <li class="page-item"><a class="page-link" href="#">1</a></li>
                        <li class="page-item"><a class="page-link" href="#">2</a></li>
                        <li class="page-item"><a class="page-link" href="#">3</a></li>
                        <li class="page-item"><a class="page-link" href="#">Next</a></li>
                    </ul>
                </nav>
            </div>
        </div>
    )
}

export default Home;