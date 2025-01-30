import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom';
import { handleError, handleSuccess } from '../utils';
import { ToastContainer } from 'react-toastify';
import "../pages/petHome.css"

function Home() {
    const [loggedInUser, setLoggedInUser] = useState('');
    const [products, setProducts] = useState('');
    const navigate = useNavigate();
    useEffect(() => {
        setLoggedInUser(localStorage.getItem('loggedInUser'))
    }, [])

    const handleLogout = (e) => {
        localStorage.removeItem('token');
        localStorage.removeItem('loggedInUser');
        handleSuccess('User Loggedout');
        setTimeout(() => {
            navigate('/login');
        }, 1000)
    }

    const fetchProducts = async () => {
        try {
            const url = "http://localhost:8080/products";
            const headers = {
                headers: {
                    'Authorization': localStorage.getItem('token')
                }
            }
            const response = await fetch(url, headers);
            const result = await response.json();
            console.log(result);
            setProducts(result);
        } catch (err) {
            handleError(err);
        }
    }
    useEffect(() => {
        fetchProducts()
    }, [])

    return (
        <div className="container">
            <div className="sidebar">
            <h1 className="logo">PAWTASTIC</h1>
            <ul className="steps">
          <li className="step completed">Human profile</li>
          <li className="step active">Pet basics</li>
          <li className="step">Pet details</li>
          <li className="step">Confirm</li>
        </ul>
        <div className="dog-photo">
          <img
            src="D:\Project\Pet_Project\frontend\src\pages\petc.jpg" // Replace with a dog image
            alt="Dog"
          />
          <p>Save and exit</p>
        </div>
      </div>

      <div className="form-container">
        <h2 className="heading">
          Yay, we love dogs! Give us the basics about your pup.
        </h2>
        <form className="form">
          <div className="form-group">
            <label>Name</label>
            <input type="text" placeholder="Pet's name" />
            <button className="upload-btn">📷</button>
          </div>
          <div className="form-group">
            <label>Breed</label>
            <input type="text" placeholder="Pet's breed" />
          </div>
          <div className="form-group">
            <label>Birthday</label>
            <input type="date" />
          </div>
          <div className="form-group">
            <label>Gender</label>
            <div className="radio-group">
              <label>
                <input type="radio" name="gender" value="female" />
                Female
              </label>
              <label>
                <input type="radio" name="gender" value="male" />
                Male
              </label>
            </div>
          </div>
          <div className="form-group">
            <label>Spayed or Neutered</label>
            <div className="radio-group">
              <label>
                <input type="radio" name="spayed" value="yes" />
                Yes
              </label>
              <label>
                <input type="radio" name="spayed" value="no" />
                No
              </label>
            </div>
          </div>
          <div className="form-group">
            <label>Weight</label>
            <div className="radio-group">
              <label>
                <input type="radio" name="weight" value="0-25" />
                0-25 lbs
              </label>
              <label>
                <input type="radio" name="weight" value="25-50" />
                25-50 lbs
              </label>
              <label>
                <input type="radio" name="weight" value="50-100" />
                50-100 lbs
              </label>
              <label>
                <input type="radio" name="weight" value="100+" />
                100+ lbs
              </label>
            </div>
          </div>
          <div className="button-group">
            <button type="button" className="back-btn">
              Back
            </button>
            <button type="submit" className="next-btn">
              Next
            </button>
            <button onClick={handleLogout}>Logout</button>
            <div>
                {
                    products && products?.map((item, index) => (
                        <ul key={index}>
                            <span>{item.name} : {item.price}</span>
                        </ul>
                    ))
                }
            </div>
            <ToastContainer />
          </div>
        </form>
      </div>
    </div>
    );
    <div>
            <button onClick={handleLogout}>Logout</button>
            <div>
                {
                    products && products?.map((item, index) => (
                        <ul key={index}>
                            <span>{item.name} : {item.price}</span>
                        </ul>
                    ))
                }
            </div>
            <ToastContainer />
        </div>
};

export default Home
