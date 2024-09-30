import React, { useEffect, useState } from 'react';
import { Row, Col } from "react-bootstrap";

// components
import HyperDatepicker from "../../../components/Datepicker";

import Statistics from "./Statistics";
import RevenueChart from "./RevenueChart";
import SalesAnalyticsChart from "./SalesAnalyticsChart";
import UsersBalances from "./UsersBalances";
import RevenueHistory from "./RevenueHistory";
import jwtDecode from 'jwt-decode'; // Sử dụng thư viện jwt-decode để giải mã token
import { Modal, Button } from 'react-bootstrap';
import { useNavigate} from 'react-router-dom';
import { balances, revenueHistory } from "./data";

const Dashboard1 = () => {
  const [selectedDate, setSelectedDate] = useState<Date>(new Date());
  const [showModal, setShowModal] = useState<boolean>(false);
  const [missingFields, setMissingFields] = useState<string[]>([]);
  const navigate = useNavigate(); // Khai báo biến navigate


  const checkToken = ()=>{
    const token = localStorage.getItem('jwtToken');
    if(token){
      try{
        const decodedToken:any = jwtDecode(token);
        console.log(jwtDecode(token));
        const requiredFields = ['gender', 'address', 'phoneNumber', 'identityCard'];
        const missing = requiredFields.filter(field=> !decodedToken[field]);
        console.log(missing);
        if(missing.length>0){
          setMissingFields(missing);

          setShowModal(true);
        }
      } catch (error) {
        console.error('Error decoding token:', error);
      }
    }
  }
  /*
   * handle date change
   */
  const handlaNavigate=()=>{
    navigate('/medical/examination-history');
  }
  const onDateChange = (date: Date) => {
    if (date) {
      setSelectedDate(date);
    }
  };
  useEffect(()=>{
    checkToken();
  },[])
  return (
    <>
      <Row>
        <Col>
          <div className="page-title-box">
            <div className="page-title-right">
              <form className="d-flex align-items-center mb-3">
                <div className="input-group input-group-sm">
                  <HyperDatepicker
                    value={selectedDate}
                    inputClass="border"
                    onChange={(date) => {
                      onDateChange(date);
                    }}
                  />
                </div>
                <button className="btn btn-blue btn-sm ms-2">
                  <i className="mdi mdi-autorenew"></i>
                </button>
                <button className="btn btn-blue btn-sm ms-1">
                  <i className="mdi mdi-filter-variant"></i>
                </button>
              </form>
            </div>
            <h4 className="page-title">Dashboard</h4>
          </div>
        </Col>
      </Row>

      <Statistics />

      <Row>
        <Col lg={4}>
          <RevenueChart />
        </Col>
        <Col lg={8}>
          <SalesAnalyticsChart />
        </Col>
      </Row>

      <Row>
        <Col xl={6}>
          <UsersBalances balances={balances} />
        </Col>
        <Col xl={6}>
          <RevenueHistory revenueHistory={revenueHistory} />
        </Col>
        
      </Row>
      <Modal show={showModal} onHide={() => setShowModal(false)}>
        <Modal.Header closeButton>
          <Modal.Title>Missing Information</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <p>The following fields are missing or empty in your profile:</p>
          <ul>
            {missingFields.map((field, index) => (
              <li key={index}>{field}</li>
            ))}
          </ul>
          <p>Please update your profile to include these fields.</p>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={() => setShowModal(false)}>
            Close
          </Button>
          <Button variant="primary" onClick={()=>handlaNavigate()}>
            Update
          </Button>
        </Modal.Footer>
      </Modal>
      
    </>
  );
};

export default Dashboard1;
