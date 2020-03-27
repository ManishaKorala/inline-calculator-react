import React from "react";

/** @namespace React.Component */
export default class History extends React.Component {
  render() {
        return (
            <div className="panel panel-default">
                <div className="panel-heading">History
                </div>

                <div className="panel-body">
                  <ol>
                    {this.props.history.reverse().map(item => (
                      <li key={item}>{item}</li>
                    ))}
                  </ol>
                </div>
            </div>
        );
    }
}
