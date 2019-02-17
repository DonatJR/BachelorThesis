// ThemedEdit can be used like a regular React component
const ThemedEdit = styled.input`
    color: ${(props: SimpleThemeProps) => props.theme.color}; // properties depending on theme
    width: 100%; // static css property
    ... // additional css properties;
`;
