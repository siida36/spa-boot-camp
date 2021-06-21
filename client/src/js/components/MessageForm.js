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
    return (
      <form onSubmit={this.onSubmit}>
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