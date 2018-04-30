const Stars = (props) => {
    const numberOfStars = 1 + Math.floor(Math.random()*9);
    let stars = [];
    for (let i = 0; i < numberOfStars; i++) {
        stars.push(<i key={i} className="fa fa-star"></i>)
    }
    return (
        <div className="col-5">
            {stars}
        </div>
    );
}

const Button = (props) => {
    return (
        <div className="col-5">
            <button>=</button>
        </div>
    );
}

const Answer = (props) => {
    let answer = [];
    for (let i = 0; i < props.selectedNumbers.length; i++) {
        answer.push(<span key={i}>{props.selectedNumbers[i]}</span>)
    }
    return (
        <div>
            {answer}
        </div>
    );
}

const Numbers = (props) => {
    const numberClassName = (number) => {
        if (props.selectedNumbers.indexOf(number) >= 0) {
            return 'selected';
        }
    }

    return (
        <div className="card text-center">
            <div>
                {Numbers.list.map((number, i) =>
                        <span key={i} className={numberClassName(number)}
                              onClick={() => props.selectNumber(number)}>
          {number}
          </span>
                )}
            </div>
        </div>
    );
}

Numbers.list = _.range(1, 10);

class Game extends React.Component {
    state = {
        selectedNumbers: [],
    };
    // selectNumber = (clickedNumber) => {
    // 	this.setState(prevState => ({
    //   	selectedNumbers: prevState.selectedNumbers.concat(clickedNumber)
    //   }));
    // };

    render() {
        return (
            <div>
                <h3>Game Nine</h3>
                <hr />
                <div className="row" style={{margin: 10}}>
                    <Stars />
                    <Button />
                    <Answer selectedNumbers={this.state.selectedNumbers}/>
                </div>
                <br />
                <Numbers selectedNumbers={this.state.selectedNumbers}
                         selectNumber={this.selectNumber} />
            </div>
        );
    }
}

class App extends React.Component {
    render() {
        return (
            <div>
                <Game />
            </div>
        );
    }
}

ReactDOM.render(<App />, mountNode);