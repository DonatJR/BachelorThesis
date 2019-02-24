const InputValueHooks = () => {
    const [editing, setEditing] = useState(false);
    const [inputValue, setInputValue] = useState('');
    const [value, setValue] = useState('');
    const [borderColor, setBorderColor] = useState('blue');

    const input = useRef(null);

    const handleKeyPress = (e) => {
        if (e.key === 'Enter') {
            this.setState({value: this.state.inputValue})
        } else if (e.key === 'Escape') {
            this.input.current.value = this.state.value;
            this.setState({inputValue: this.state.value})
        }
    }

    return (
        <div>
            <input
                onFocus={() => {setEditing(true); setBorderColor('green');}}
                onBlur=={() => {setEditing(false); setBorderColor('blue');}}
                type="text"
                className={`inputForm ${editing ? 'editBorder' : 'normalBorder'}`}
                onChange={(event) => {setInputValue(event.target.value);}}
                onKeyDown={handleKeyPress}
                ref={input}
            />
            {editing ?
                <span>
                <span className="submitInfo">Press enter to save changes, </span>
                <span className="abortInfo">press esc to discard changes</span>
                </span> : null
            }
            <div>
                Current value: {value}
            </div>
        </div>
    )
}