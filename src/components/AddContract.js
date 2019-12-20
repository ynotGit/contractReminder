import React, { Component } from 'react';

class AddContract extends Component {
    state = {}

    onSubmit = (e) => {
        e.preventDefault();
        const { company, endDate } = this.state;
        this.props.addContract(company, endDate);
        localStorage.setItem('company', company);
        localStorage.setItem('endDate', endDate);
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