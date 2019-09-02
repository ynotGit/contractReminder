import React, { Component } from 'react'

class AddContract extends Component {
    render() {
        return (
            <form>
                <input
                    type="text"
                    name="company"
                    placeholder="Add Contact..."
                />
                <input
                    type="submit"
                    value="submit"
                    className="button"
                />
            </form>
        )
    }
}

export default AddContract;