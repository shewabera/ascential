
import React from "react";
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Box from '@mui/material/Box';
import Q1 from "./Q1";
import Q2 from "./Q2";
import Q3 from "./Q3";
import Q4 from "./Q4";
import Q5 from "./Q5";

class App extends React.Component {

  constructor(props) {
    super(props);
    this.state = { tabIndex: 0 };
  }

componentDidMount () {
}

 setTab = (index) =>{
   this.setState({tabIndex : index})
}

  render() {
    return(
    <Box style={{width : "80%", margin : "auto"}}>
      <Box >
        <Tabs value={this.state.tabIndex} >
          <Tab label="Question One" onClick={()=>this.setTab(0)}/>
          <Tab label="Question Two" onClick={()=>this.setTab(1)}/>
          <Tab label="Question three" onClick={()=>this.setTab(2)}/>
           <Tab label="Question four" onClick={()=>this.setTab(3)}/>
          <Tab label="Question five" onClick={()=>this.setTab(4)}/>
        </Tabs>
      </Box>
      <TabPanel value={this.state.tabIndex} index={0}>
        <Q1></Q1>
      </TabPanel>
      <TabPanel value={this.state.tabIndex} index={1}>
       <Q2></Q2>
      </TabPanel>
      <TabPanel value={this.state.tabIndex} index={2}>
        <Q3></Q3>
      </TabPanel>
      <TabPanel value={this.state.tabIndex} index={3}>
        <Q4></Q4>
      </TabPanel>
      <TabPanel value={this.state.tabIndex} index={4}>
       <Q5></Q5>
      </TabPanel>
     
    </Box>
    )
  }
}


function TabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box>
          <div>{children}</div>
        </Box>
      )}
    </div>
  );
}
export default App;
