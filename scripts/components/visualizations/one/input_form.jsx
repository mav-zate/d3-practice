import React from 'react';


class InputForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      text: '',
    };

    this.update = this.update.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.render = this.render.bind(this);
  }


  update(e) {
    this.setState({ text: e.currentTarget.value });
  }

  handleSubmit() {
    console.log('submitted');
  }

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <textarea
          placeholder="Write some text here"
          onChange={this.update}
          value={this.state.text}
          >
        </textarea>
        <input
          type="submit"
          value="submit"
          >
        </input>
      </form>
    );
  }
}


export default InputForm;
