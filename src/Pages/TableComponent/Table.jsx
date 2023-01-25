import React, {
  useEffect,
  useState,
  useRef,
  forwardRef,
 
} from "react";
import { Container, Row, Col, Button, Form } from "react-bootstrap";
import Navbar from "Components/NavbarSales";
import axios from "axios";
import { PDFExport, savePDF } from "@progress/kendo-react-pdf";
import base from "base.js";
import "./Style/Style.css";



const Table = forwardRef((reff) => {
  const [customers, setCustomers] = useState([]);

  const PDFReport = useRef(null);

  useEffect(() => {
    axios.get(`${base.url}/api/customer`).then((res) => {
      console.log(res.data);

      setCustomers(res.data);
    });
  }, []);

  const handleExportWithFunction = (event) => {
   const save= savePDF(PDFReport.current, { paperSize: "A2" });

   console.log (save)

    
  };

  const handleExport = async () => {
    const pdfDatum =  savePDF(PDFReport.current, { paperSize: "A2" });
    
  const datas ={
      pdfData:pdfDatum
  }


    const respond =await axios.post(`http://localhost:5000/api/report`,datas)

    console.log(respond.data)
  };
  // const sendEmail = () => {
  //   // create a new transporter object
  //   let transporter = nodemailer.createTransport({
  //     service:"gmail",
  //     auth: {
  //       user: 'eaglelazan@gmail.com',
  //       pass: 'ywjartjtsmkgmyed',
  //     },
  //   });

  //   // setup email data
  //   let mailOptions = {
  //     from: 'eaglelazan@gmail.com',
  //     to: "danfrancix@gmail.com" ,
  //     subject: 'Daily sales Report',
  //     text: 'Please find the attached PDF file',
  //     attachments: [
  //       {
  //         filename: 'pdfFile.pdf',
  //         content: ""
  //       },
  //     ],
  //   };

  //   // send email
  //   transporter.sendMail(mailOptions, (error, info) => {
  //     if (error) {
  //       console.log(error);
  //     } else {
  //       console.log('Email sent: ' + info.response);
  //     }
  //   });
  // };


  //   useImperativeHandle(reff,() => {
  //     handleExportWithFunction  ()
  //    }
  //  )

  return (
    <React.Fragment>
      <Container fluid className='Tab'>
        <Navbar />
        <Container className='d-flex justify-content-between'>
            <h1>Purchases</h1>
            <Button
              className='border-0'
              style={{ backgroundColor: "rgb(26, 20, 100)" }}
              onClick={handleExport}
            >
              Download Report
            </Button>
          </Container>
        <Container ref={PDFReport}>
          <Row
            style={{
              borderBlock: "3px solid #2e180e",
              fontWeight: "600",
            }}
            className='py-3 mt-3'
          >
            <Col className='text-center trun' xs={2}>
              Customer Name
            </Col>
            <Col className='text-center trun' xs={2}>
              Phone Number
            </Col>
            <Col className='text-center trun' xs={3}>
              Items Bought
            </Col>
            <Col className='text-center trun' xs={1}>
              Total Amount Paid
            </Col>
            <Col className='text-center trun' xs={2}>
              Invoice Number
            </Col>
            <Col className='text-center trun' xs={1}>
              Site Location
            </Col>
            <Col className='text-center trun' xs={1}>
              Payment Method
            </Col>
          </Row>

          {customers &&
            customers.map((custom) => {
              return (
                <Row className='py-4 tb-row' key={custom._id}>
                  <Col xs={2}>
                    {custom.FirstName} {custom.LastName}
                  </Col>

                  <Col xs={2} className='text-center'>
                    {custom.PhoneNumber}
                  </Col>

                  <Col xs={3}>
                    {custom.itemsBought.map((item) => (
                      <div className="d-flex justify-content-center">
                        <ul>
                          <li style={{ listStyleType: "disc" }}>
                            {item.item} x {item.quantity}
                          </li>
                        </ul>
                      </div>
                    ))}
                  </Col>

                  <Col xs={1} className='text-center'>
                    {custom.TotalAmountPaid}
                  </Col>
                  <Col xs={2} className='text-center'>
                    {custom.InvoiceNumber}
                  </Col>
                  <Col xs={1} className='text-center'>
                    {custom.SiteLocation}
                  </Col>
                  <Col xs={1} className='text-center'>
                    {custom.PaymentMethod}
                  </Col>
                </Row>
              );
            })}
        </Container>
      </Container>
    </React.Fragment>
  );
});

export default Table;
