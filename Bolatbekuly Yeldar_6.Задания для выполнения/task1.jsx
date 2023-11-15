class Student extends React.Component {
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
      const { fullName, age } = this.props;
      const { isButtonClicked } = this.state;
  
      return (
        <div>
          <p>ФИО и возраст: {fullName}, {age} лет</p>
          <button onClick={this.handleButtonClick}>
            Изменить состояние
          </button>
          <p>Состояние: {isButtonClicked ? 'Кнопка нажата' : 'Кнопка не нажата'}</p>
        </div>
      );
    }
  }
  
  const App = () => {
    const studentProps = {
      fullName: 'Болатбекулы Елдар',
      age: 16,
    };
  
    return (
      <div>
        <Student {...studentProps} />
      </div>
    );
  };
  
  ReactDOM.render(<App />, document.getElementById('root'));
  