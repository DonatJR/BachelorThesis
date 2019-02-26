class InputValue extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            editing: false,
            inputValue: '',
            value: '',
            borderColor: 'blue',
        };
        this.input = React.createRef();
        this.onFocus = this.onFocus.bind(this);
        this.onFocusLost = this.onFocusLost.bind(this);
        this.handleKeyPress = this.handleKeyPress.bind(this);
        this.onChange = this.onChange.bind(this);
    }
    onFocus() {
        this.setState({ editing: true, borderColor: 'green' });
    }
    onFocusLost() {
        this.setState({ editing: false, borderColor: 'blue' });
    }
    handleKeyPress(e) {
        if (e.key === 'Enter') {
            this.setState({ value: this.state.inputValue });
        } else if (e.key === 'Escape') {
            this.input.current.value = this.state.value;
            this.setState({ inputValue: this.state.value });
        }
    }
    onChange(event) {
        this.setState({ inputValue: event.target.value });
    }
    render() {
        return (
            <div>
                <input
                    onFocus={this.onFocus}
                    onBlur={this.onFocusLost}
                    type="text"
                    className={`inputForm ${this.state.editing ? 'editBorder' : 'normalBorder'}`}
                    onChange={this.onChange}
                    onKeyDown={this.handleKeyPress}
                    ref={this.input}
                />
                {this.state.editing ? (
                    <span>
                        <span className="submitInfo">Press enter to save changes, </span>
                        <span className="abortInfo">press esc to discard changes</span>
                    </span>
                ) : null}
                <div>Current value: {this.state.value}</div>
            </div>
        );
    }
}
