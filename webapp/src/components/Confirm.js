import React , {useState}from 'react'
import Step from './Step'
import './Confirm.css'

function Confirm(props) {
  const [order,setOrder] = useState(0)

  const updateOrder = () => {
    // setOrder(order+1)
    // console.log(order);
  }

  return (
    <div>
       <div>
        <div className="header">
          <Step steps="4" />
        </div>
        <div className="container">
          <form>
            {" "}
            <h3>CONFIRM ORDER <i class="fa fa-tag" aria-hidden="true"></i></h3>
            <div className='order'>
              <h4>Track Number : {order}</h4>
              <p>ชื่อ : {props.value.firstname}</p>
              <p>นามสกุล : {props.value.lastname}</p>
              <p>เลขบัตรประชาชน : {props.value.id_card}</p>
              <p>ที่อยู่ : {props.value.address}</p>
            </div>
            <div>
              <button onClick={props.prevStep}>Back</button>
              <button className='green' onClick={updateOrder()}>Confirm</button>
            </div>
          </form>
        </div>
      </div>
    </div>
  )
}

export default Confirm
