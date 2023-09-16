import React from "react";

class USerClass extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      count: 0,
    };
  }

  render() {
    return (
      <div className="m-4 p-4 w-[250px] rounded-lg bg-gray-800">
        <h2>Name: {this.props.name}</h2>
        <h3>Location: Pune</h3>
        <h4>Contact: @vishal11</h4>
        <h4>{this.state.count}</h4>
        <button
          onClick={() => {
            this.setState({
              count: this.state.count + 1,
            });
          }}
        >
          Increase count
        </button>
      </div>
    );
  }
}

export default USerClass;
