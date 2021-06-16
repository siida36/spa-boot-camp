import React from 'react';

export default class MessageForm extends React.Component {

  constructor(props){
    super(props);
    this.state = {
      usstate: props.initState,
      desc: 'This is for a text area.'
    };
    this.onChange = this.onChange.bind(this);
    this.onSubmit = this.onSubmit.bind(this);
    this.onTextAreaChange = this.onTextAreaChange.bind(this);
  }

  onChange(e){
    console.log(e.target.value);
    this.setState({ usstate: e.target.value});
  }

  onSubmit(e){
    e.preventDefault();
    console.log("onSubmit");
    console.log(this.state);
  }

  onTextAreaChange(e){
    this.setState({ desc: e.target.value });
  }

  render() {
    var states = [
      { code: "CA", name: "California" },
      { code: "HI", name: "Hawaii" },
      { code: "TX", name: "Texas"},
      { code: "WA", name: "Washington"} ];
    var options = states.map(
      (n)=>(
        <option key={n.code} value={n.code}>
          {n.name}
        </option>
      )
    );
    return (
      <form onSubmit={this.onSubmit}>
        <div>
          <select
            value={this.state.usstate}
            onChange={this.onChange}>
            {options}
          </select>
        </div>
        <textarea
          value={this.state.desc}
          onChange={this.onTextAreaChange}/>
        <div>
          <button type="submit">OK</button>
        </div>
      </form>
    );
  }
}