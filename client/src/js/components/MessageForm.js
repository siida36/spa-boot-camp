import React from 'react';
import { connect } from "react-redux";
import { Button, TextField } from '@material-ui/core';
import { makeStyles, styled } from '@material-ui/core/styles';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Box from '@material-ui/core/Box';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';

import { fetchTexts, helloWorld, helloWorldWithParameter } from "../actions/messageFormActions"
import { mergeClasses } from '@material-ui/styles';

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  title: {
    flexGrow: 1,
  },
}));

const MyButton = styled(Button)({
  background: 'linear-gradient(45deg, #FE6B8B 30%, #FF8E53 90%)',
  border: 0,
  borderRadius: 3,
  boxShadow: '0 3px 5px 2px rgba(255, 105, 135, .3)',
  color: 'white',
  height: 32,
  padding: '0 30px',
  position: "absolute",
  top: 120,
  left: 450
});

const InputTextField = styled(TextField)({
  position: "absolute",
  top: 100,
  left: 100,
  width: 300,
});

const OutputTextField = styled(TextField)({
  position: "absolute",
  top: 100,
  left: 600,
  width: 300,
});

function InputTextField2(props) {
  // const classes = useStyles();
  return (
    // <div className={classes.dummy}>
      <InputTextField
          inputProps={{style: {fontSize: 18, lineHeight: 2}}}
          multiline
          variant="outlined"
          value={props.value}
          onChange={props.event}/>
     // </div>
  );
}

function OutputTextField2(props) {
  // const classes = useStyles();
  return (
    // <div className={classes.dummy}>
      <OutputTextField
          inputProps={{style: {fontSize: 18, lineHeight: 2}}}
          multiline
          variant="outlined"
          value={props.value}
          onChange={props.event}/>
     // </div>
  );
}

function Header(props) {
  const classes = useStyles();
  return (
    <AppBar position="static">
      <Toolbar>
        <IconButton edge="start" className={classes.menuButton} color="inherit" aria-label="menu">
          <MenuIcon />
        </IconButton>
        <Typography variant="h6" className={classes.title}>
          News
        </Typography>
        <Button color="inherit">Login</Button>
      </Toolbar>
    </AppBar>
  );
}

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
        <div>
          <Header/>
        </div>
        <div>
        <InputTextField2
          value={this.state.desc}
          event={this.onTextAreaChange}/>
        <OutputTextField2
          value={!texts.length? texts.result: ""}
          event={this.onTextAreaChange}/>
        </div>
        <div>
          <MyButton type="submit">Run</MyButton>
        </div>
      </form>
    );
  }
}