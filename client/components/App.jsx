import React from 'react';
import Editor from './Editor/Editor';
import Renderer from './Renderer/Renderer';
import './App.less';

export default class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      editorValue: '',
    };
  }

  onTextChange = (text) => {
    this.setState({
      editorValue: text,
    });
  }

  render() {
    const { editorValue } = this.state;
    return (
      <div className="container">
        <h1>Testing</h1>
        <div className="editor-wrap">
          <Editor
            wrap
            language="gfm"
            value={editorValue}
            onChange={this.onTextChange}
          />
        </div>
        <div className="renderer-wrap">
          <Renderer value={editorValue} />
        </div>
      </div>
    );
  }
}
