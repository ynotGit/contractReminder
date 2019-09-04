import React, { Component } from 'react';

class AddContract extends Component {

    state = {
        company: ''
    }

    onChange = (e) => this.setState({ company: e.target.value });

    render() {
        return (
            <form>
                <input
                    type="text"
                    name="company"
                    placeholder="Add Contact..."
                    value={this.state.title}
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