import React, { Component } from 'react';

class AddContract extends Component {

    state = {
        company: ''
    }

    onSubmit = (e) => {
        e.preventDefault();
        this.props.addContract(this.state.company);
        this.setState({ company: '' });
    }

    onChange = (e) => this.setState({ [e.target.name]: e.target.value });

    render() {
        return (
            <form onSubmit={this.onSubmit}>
                <input
                    type="text"
                    name="company"
                    placeholder="Add Contact..."
                    value={this.state.company}
                    onChange={this.onChange}
                />
                <input
                    type="submit"
                    value="submit"
                    className="button"
                />
            </form>
        );
    }
}

export default AddContract;