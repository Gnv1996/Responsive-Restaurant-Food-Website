import React, { Component } from 'react';
import './Functionals.css';

export class Contact extends Component {
  constructor(props) {
    super(props)
  
    this.state = {
       name:null,
       email:null,
       phone:null,
       address:null,
       msg:null,

    }
  }

  formSubmitHandler=(event)=>{
    event.preventDefault();
    console.log(this.state);
    const name=event.target.name.value;
    const email=event.target.email.value;
    const phone=event.target.phone.value;
    const address=event.target.address.value;
    const msg=event.target.msg.value;
    this.setState({name,email,phone,address,msg},()=>{
      console.log(this.state);
    })
    

  }
  buttonClickFunction=()=>{
    alert("Data are save Successfully")
  }
  
  render() {
    return (
      <div className='bg'>
      <div className='container'>
      <form onSubmit={this.formSubmitHandler}>
        <h1 className='text-center'>Contact Us</h1>
        <div className='form-group'>
          <label>Name:</label>
          <input className='form-control' placeholder='Enter Your Name' name='name' type='text'/>

        </div>

        <div className='form-group'>
          <label>Email:</label>
          <input className='form-control' placeholder='Enter Your Email' name='email' type='email'/>

        </div>

        <div className='form-group'>
          <label>Mobile Number:</label>
          <input className='form-control' placeholder='Enter Your Mobile Number' name='phone' type='number'/>

        </div>

        <div className='form-group'>
          <label>Address:</label>
          <input className='form-control' placeholder='Enter Your Address' name='address' type='text'/>

        </div>


        <div className='form-group'>
          <label>Message:</label>
          <textarea row='5' col='30' className='form-control' name='msg' placeholder='Message / Comment please write..'/>
  

        </div>
        <div className='form-group'>
          <button className='btn btn-primary form-control' type='submit' onClick={this.buttonClickFunction}>Submit</button>

        </div>
        </form>
</div>
        
      </div>
    )
  }
}

export default Contact;




