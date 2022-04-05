
import React from "react";
import { Util } from "./utility/util";
import BasicCard from "./BasicCard";

class Q3 extends React.Component {

  constructor(props) {
    super(props);
    this.state= {
        searchResults : []
    }
  }
  
componentDidMount () {
   Util.axiosGet(Util.endPoints.search).then(res=>{
        this.setState({searchResults : res.data.ancients})
        }).catch(err => console.log(err) )
}
 
 render() {
    return (
        <div>
            {this.state.searchResults.map((entry, index) => {
                 return  <BasicCard {...entry} key = {index}></BasicCard>
            })}
        </div>
       
    )
  }
}

export default Q3;
