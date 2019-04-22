import React from 'react';
import {connect} from 'react-redux';
import _ from 'lodash';
import {listStream,editStream} from '../../actions';
import StreamForm from './StreamForm';

class StreamEdit extends React.Component{
    componentDidMount(){
        this.props.listStream(this.props.match.params.id);
    }
    onSubmit=(formValues)=>{
        this.props.editStream(this.props.match.params.id,formValues);
    }
    render(){
        if(!this.props.stream){
            return <div>Loading...</div>
        }
        return(
            <div>
                <h3>Edit a stream</h3>
                <StreamForm 
                    onSubmit={this.onSubmit} 
                    initialValues={_.pick(this.props.stream,'title','description')}
                />
            </div>
        );
    }
}

const mapStateToProps=(state,ownProps)=>{
    return {stream:state.stream[ownProps.match.params.id]}
};
export default connect(mapStateToProps,{listStream,editStream})(StreamEdit);