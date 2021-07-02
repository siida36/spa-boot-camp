import React from 'react';
import { connect } from "react-redux";
import { fetchTexts, helloWorld, helloWorldWithParameter } from "../actions/messageFormActions"

@connect((store) => {
  return {
    desc: store.messageFormReducer.desc,
    texts: store.messageFormReducer.texts,
  };
})

export default class MessageForm extends React.Component {

  constructor(props){
    super(props);
    this.state = {
      usstate: props.initState,
      desc: 'This is for a text area.',
      texts: []
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
    // helloWorld();
    // helloWorldWithParameter(this.state.desc);
    // this.props.dispatch(helloWorldWithParameter(this.state.desc));
    this.props.dispatch(fetchTexts(this.state.desc));
  }

  onTextAreaChange(e){
    this.setState({ desc: e.target.value });
  }

  render() {
    const {desc, texts} = this.props;
    console.log("current texts:")
    console.log(texts)

    return (
      <form onSubmit={this.onSubmit}>
        <textarea
          value={this.state.desc}
          onChange={this.onTextAreaChange}/>
        <textarea
          value={!texts.length? texts.result: ""}
          onChange={this.onTextAreaChange}/>
        <div>
          <button type="submit">OK</button>
        </div>
      </form>
    );
  }
}