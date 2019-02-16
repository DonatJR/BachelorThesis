storiesOf('Button', module)
    .addDecorator(globalStyleDecorator)
    .addDecorator(withThemesProvider([normalTheme, darkTheme]))
    .addDecorator(withKnobs)
    .add('Default', () => <Button id={'1'} caption={text('caption', 'Some text')} />);
