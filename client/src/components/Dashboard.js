import React,{useState, useEffect} from 'react';
import { connect} from 'react-redux';
import {getSecrets, addSecrets} from '../actions/secretsActions';
import PropTypes from 'prop-types';

function Dashboard (props)  {

    const [post, postSecret] = useState('');

    useEffect(() => {
        props.getSecrets();
    }, [])

    const {secrets} = props.secrets;
    // console.log('Secrets is', secrets);

    const addPost = () => {
        const newPost = {
            text: post
        }

        props.addSecrets(newPost);
    }

    return (
        <div>
            DASHBOARD HERE
            <input placeholder="Add secrets" value={post} onChange={(e) => postSecret(e.target.value)}></input>
            <button type="button" onClick={() => addPost()}>ADD</button>
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
    secrets: PropTypes.object.isRequired,
    addSecrets: PropTypes.func.isRequired
}

const mapStateToProps = (state) => ({
    secrets: state.secrets
})

export default connect(mapStateToProps, {getSecrets, addSecrets})(Dashboard);

//all action are this.props.getSecrets like so
