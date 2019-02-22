// ThemedEdit can be used like a regular React component
const ThemedEdit = styled.input`
    // properties depending on theme (dynamic)
    color: ${(props: SimpleThemeProps) => props.theme.color};
    // static css property
    width: 100%;
    // additional css properties
    ...
`;