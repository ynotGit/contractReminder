import React, { Component } from 'react';

class AddContract extends Component {
    state = {
        company: '',
        endDate: ''
    }

    onSubmit = (e) => {
        e.preventDefault();
        this.props.addContract(this.state.company, this.state.endDate);
        this.setState({ company: '', endDate: '' });
    }

    onChange = (e) => this.setState({ [e.target.name]: e.target.value });

    render() {
        return (
            <form onSubmit={this.onSubmit}>
                <input
                    type="text"
                    name="company"
                    placeholder="Add Contract..."
                    value={this.state.company}
                    onChange={this.onChange}
                />
                <input
                    type="date"
                    name="endDate"
                    placeholder="Contract End Date..."
                    value={this.state.endDate}
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