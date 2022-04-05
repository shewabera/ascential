
import React from "react";
import Alert from '@mui/material/Alert';
import { Util } from "./utility/util";
class Q4 extends React.Component {

  constructor(props) {
    super(props)
    this.state = {
      error : ""
    }
  }

componentDidMount () {
  Util.axiosGet(Util.endPoints.error)
  .then(res=>{console.log(res.data)})
  .catch(err => {
    console.log(err)
    this.setState({error : err.response.data.error})
    } )
}

  render() {
    return<Alert severity="error">{this.state.error}</Alert>;
  }
}

export default Q4;
