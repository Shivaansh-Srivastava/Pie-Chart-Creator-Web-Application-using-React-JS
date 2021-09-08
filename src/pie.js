import React from "react";
import data from "./db";
import Information from "./indexes";
import Paper from '@material-ui/core/Paper';
import {
  Chart,
  PieSeries,
  Title
} from '@devexpress/dx-react-chart-material-ui';

class Pie extends React.Component {
    render(){
        const newlist = data.map(item => <Information info={item} />)
        return(
            <div>
            <Paper>
                <Chart data={data}>
                    <PieSeries valueField="value" argumentField="argument" />
                    <Title text="Generated Pie Chart" />
                </Chart>
            </Paper>
            <h2>Indices to help understand the graph:</h2>
                {newlist}
            </div>
        )
    }
}

export default Pie