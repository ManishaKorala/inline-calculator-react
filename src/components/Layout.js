import React from "react";
import Paragraph from "./Paragraph";
import History from "./History";
import Calculation from "../logic/calculation";

/** @namespace React.Component */
export default class Layout extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            value: '',
            content: '',
            history: []
        };

        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleChange(event) {
        let value = event.target.value;

        this.setState({value: value});
    }

    handleSubmit(event) {
        event.preventDefault();

        let content = 'Wrong input!';

        let result = new Calculation(this.state.value).calculate();
        if (result !== false) {

            // convert result separated by a space
            content = '';
            let expression = new Calculation(this.state.value).verifyInput(),
                len = expression.length;

            for (let i = 0; i < len; i++) {
                content += expression[i] + ' ';
            }
            content += '= ';
            content += result;
        }
        this.setState({content: content});

        let aHistory = this.state.history;
        aHistory.push(content);
        this.setState({history: aHistory});

    }

    render() {
        return (
            <div>
                <div className="row">
                    <h1 className="col-md-8 col-md-offset-2 text-center">React calculator</h1>
                </div>

                <div className="container">
                    <div className="row">
                        <form className="col-md-6 col-md-offset-3 text-center" onSubmit={this.handleSubmit}>
                            <input type="text" className="form-control col-md-9" placeholder="expression..."
                                   onChange={this.handleChange}/>
                            <input className="btn btn-success" type="submit" value="Submit"/>
                        </form>
                    </div>

                    <Paragraph content={this.state.content}/>
                    <History history={this.state.history}/>
                </div>
            </div>
        )
    }
}
