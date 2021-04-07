import React from 'react';
import './MyClock.css';

class MyClock extends React.Component {
	constructor(props){
  	super(props)
    this.state = {
    	time: new Date()
    }
  }
  
  componentDidMount(){
  	this.interval = setInterval(()=>{
    	this.setState({
      	time: new Date()
      })
    }, 1)
  }
  
  formatSet(data){
  	return data < 10 ? '0' + data : data;
  }
  
  formatMsSet(data){
  	return data < 100 ? (data < 10 ? '00' + data : '0'+data) : data;
  }
  
  render() {
  	const { time } = this.state;
    const h = this.formatSet(time.getHours());
    const m = this.formatSet(time.getMinutes());
    const s =  this.formatSet(time.getSeconds());
    const ms = this.formatMsSet(time.getMilliseconds());
    const yyyy = time.getFullYear().toString();
    const mm = (time.getMonth() + 1).toString(); // 0-11을 반환
    const dd = time.getDate().toString();
    
		
		return (		
      <div className="clockBox" style={{color:this.props.color}}>        
        <div>
          <h1>{this.props.text}</h1>
          <div className="date">{yyyy}-{mm}-{dd}</div>
          <span className="time">{h}:{m}:{s}</span><span className="ms">{ms}</span>
        </div>        
      </div>
      )
  	}
}

export default MyClock;
