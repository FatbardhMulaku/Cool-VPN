import React, { Component } from 'react'
import { GridSpinner } from "react-spinners-kit";

export default class SpinnerL extends Component {
	constructor(props) {
        super(props);
        this.state = {
            loading: true,
        };
    }
	render() {
		const { loading } = this.state;
		return (
			<div className="SpinnerLoad">
				<GridSpinner size={30} color="#000" loading={loading} />
			</div>
		)
	}
}
