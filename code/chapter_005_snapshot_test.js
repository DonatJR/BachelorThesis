test('Button should match snapshot', () => {
    expect(mount(<Button id={buttonId} caption={buttonCaption} />)).toMatchSnapshot();
});
