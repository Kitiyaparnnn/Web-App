import React, { Component} from "react";
import "./Confirm.css";
import Step from "./Step";

export class Confirm extends Component {
  back = (e) => {
    e.preventDefault();
    this.props.prevStep();
  };

  state = { order: 0 };

  updateOrder = () => {
    const { order } = this.state;
    this.setState({
      order: order + 1,
    });
  };

  render() {
    const { order } = this.state;
    const {
      value: {
        simFor,
        simTimeSN,
        simTimeDN,
        simSpeed,
        firstname,
        lastname,
        id_card,
        address,
        picture,
      },
    } = this.props;

    //กด confirm แล้ว เอาข้อมูล + staus ไปเก็บไว้ที่ server [ลูกค้า = {ชื่อ,ที่อยู่,แพ็กเกจซิม,สถานะ:ยังไม่ส่งสินค้า}]
    // const [data,setData] = useState([])

    // const saveData = () =>{
    //   setData({
    //     ...data,

    //   })
    // }

    return (
      <div>
        <div className="header">
          <Step steps="4" />
        </div>
        <div className="container">
          <form>
            {" "}
            <h3>CONFIRM ORDER</h3>
            <div className='order'>
              <h4>Track Number : {order}</h4>
              <p>ชื่อ : {firstname}</p>
              <p>นามสกุล : {lastname}</p>
              <p>เลขบัตรประชาชน : {id_card}</p>
              <p>ที่อยู่ : {address}</p>
            </div>
            <div>
              <button onClick={this.back}>Back</button>
              <button className='green' onClick={this.updateOrder}>Confirm</button>
            </div>
          </form>
        </div>
      </div>
    );
  }
}

export default Confirm;
