import React from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { isAuthenticated, signout } from '../auth'

const AdminSidebar = () => {
    const { user } = isAuthenticated()
    const navigate = useNavigate()
    return (
        <>
            <div className="d-flex justify-content-end">
                <div className="col-md-1 mt-3">
                    <button className="btn btn-success" data-bs-toggle="offcanvas" data-bs-target="#offcanvasRight"
                        aria-controls="offcanvasRight">
                        Menu
                    </button>
                    <div className="offcanvas offcanvas-end bg-light text-dark" tabIndex="-1" id="offcanvasRight"
                        aria-labelledby="offcanvasRightLabel" style={{ width: '300px' }}>
                        <div className="offcanvas-header">
                            <h5 id="offcanvasRightLabel">Admin Dashboard</h5>
                            <button type="button" className="btn-close text-reset" data-bs-dismiss="offcanvas" aria-label="Close"></button>
                        </div>
                        <div className="offcanvas-body">
                            <ul className="list-unstyled">
                                <li><Link to="/admin/dashboard" className="text-decoration-none text-dark">Dashboard</Link></li>
                                <li><Link to="user" className="text-decoration-none text-dark">Users</Link></li>
                                <li><Link to="/admin/product" className="text-decoration-none text-dark">Products</Link></li>
                                <li><Link to="/admin/category" className="text-decoration-none text-dark">Categories</Link></li>
                                <li><Link to="orders" className="text-decoration-none text-dark">Orders</Link></li>
                                <li><Link to="/" className="text-decoration-none text-dark">Go to Homepage</Link></li>
                                <li><Link to="/admin/addcategory" className="text-decoration-none text-dark">Add Category</Link></li>
                                <li><Link to="/admin/addproduct" className="text-decoration-none text-dark">Add Product</Link></li>
                            </ul>
                        </div>
                        <div className="offcanvas-body">
                            <ul className="list-unstyled">
                                <li><Link to="#" className="text-decoration-none text-dark">
                                    <b>Name : </b> {user.name}
                                </Link></li>
                                <li><Link to="#" className="text-decoration-none text-dark">
                                    <b>Email : </b> {user.email}
                                </Link></li>
                            </ul>
                            <button className='btn btn-danger'
                                onClick={() => signout(() => {
                                    navigate('/signin')
                                })}
                            >
                                Logout
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default AdminSidebar