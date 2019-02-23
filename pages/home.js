import React from 'react'
import { Segment, Header, Grid } from 'semantic-ui-react'
const App =require('../connection/app');

class SegmentExampleRaisedSegments extends React.Component{

    state={
        meters:[{
          name:'0xd2Bd7C19D539c2F080f70Db89f6a345f6673Abe6'
        },
        {
          name:'0x96bd37f6d369B6F3c27d1102950e8870ea68C6f4'
        }
      ]
      }

    componentDidMount(){
      let result=App.getauthorisedIOTs()
    }
    render(){
        return (
            <Grid stackable>
                <Grid.Row>
                    <Grid.Column width={4}></Grid.Column>
                    <Grid.Column width={8}>
                    <Segment.Group raised>
            <Header textAlign='center' size='huge'>All IOT Meters</Header>
            <Header textAlign='center' size='small'>Device IDs</Header>
            {this.state.meters.map((meter,i)=>{
            return <Segment size='big' key={i} color='blue' textAlign='center'>{(i+1)+'. '+meter.name}</Segment>
            })}
        </Segment.Group>
                    </Grid.Column>
                    <Grid.Column width={4}></Grid.Column>
                </Grid.Row>
            </Grid>

          );

    }
}

export default SegmentExampleRaisedSegments
