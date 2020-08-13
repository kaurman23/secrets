import React,{useState, useEffect} from 'react';
import { connect} from 'react-redux';
import {getSecrets} from '../actions/secretsActions';
import PropTypes from 'prop-types'

function Dashboard (props)  {

    useEffect(() => {
        props.getSecrets();
    }, [])

    const {secrets} = props.secrets;
    console.log('Secrets is', secrets);

    return (
        <div>
            DASHBOARD HERE
            {
                secrets.map((item,i) => {
                   return <h1 key={i}>{item.text}</h1>
                })
            }
        </div>
    )
}

Dashboard.propTypes = {
    getSecrets: PropTypes.func.isRequired,
    secrets: PropTypes.object.isRequired
}

const mapStateToProps = (state) => ({
    secrets: state.secrets
})

export default connect(mapStateToProps, {getSecrets})(Dashboard);

//all action are this.props.getSecrets like so
