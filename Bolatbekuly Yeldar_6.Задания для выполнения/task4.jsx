import React, { Component } from 'react';

class MyComponent extends Component {
  constructor(props) {
    super(props);

    this.state = {
      isButtonClicked: false,
    };
  }

  handleButtonClick = () => {
    this.setState((prevState) => ({
      isButtonClicked: !prevState.isButtonClicked,
    }));
  };

  render() {
    return (
      <div>
        <p>Состояние: {this.state.isButtonClicked ? 'Кнопка нажата' : 'Кнопка не нажата'}</p>
        <button onClick={this.handleButtonClick}>
          Изменить состояние
        </button>
      </div>
    );
  }
}

export default MyComponent;
