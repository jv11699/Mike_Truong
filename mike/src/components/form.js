import Button from 'react-bootstrap/Button';
import React, { useState } from 'react';
import emailjs from 'emailjs-com';
import Form from 'react-bootstrap/Form';
import "../css/Form.css"

const Forms = () => {
    const [phoneNumber, setPhoneNumber] = useState('');
    const [email, setEmail] = useState('');
    const [name, setName] = useState('');
    const handleSubmit = (event) => {
        event.preventDefault()
        // Redirect the user to the desired webpage when the button is clicked
        emailjs.send("service_ndkvxcu", "template_173c5ao", {
            from_name: name,
            email: email,
            phone_number: phoneNumber,
        },"CNIZVqbCJ1A9-grYc").then(
            (result) => {
              console.log('Email sent successfully:', result.text);
              window.location.href = 'https://michaeltruong.exprealty.com/';
            },
            (error) => {
              console.error('Failed to send email:', error);
              alert('Form submission failed. Please try again later.');
            }
          );
         window.location.href = 'https://michaeltruong.exprealty.com/';
    }



return (
    <div class="row">
        <div class="mx-auto">
            <Form>
                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Control type="name" placeholder="Enter Name"
                        value={name}
                        onChange={(e) => setName(e.target.value)} 
                      />
                    <Form.Control type="email" placeholder="Enter email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)} 
                        style={{marginTop:"10px"}}/>
                    <Form.Control type="tel" placeholder="Enter Phone Number"
                        value={phoneNumber}
                        onChange={(e) => setPhoneNumber(e.target.value)}
                        style={{marginTop:"10px", marginBottom:"10px"}} />
                    <Form.Text className="text-muted">
                        We'll never share your email or phone number with anyone else.
                    </Form.Text>
                </Form.Group>
                <Button variant="primary" type="submit" onClick={handleSubmit}
                        id='FormSubmitButton'>
                    Submit
                </Button>
            </Form>
        </div>
    </div>
);
}

export default Forms;
