const person = {
    name: 'Gregorio Y. Zara',
    theme: {
        backgroundColor: 'lightgreen',
        color: 'blue',

    },
    profile:{
        borderRadius: '50%',
    }
};
export default function JsxDemo() {
    //let style = '';
    return (<div style={person.theme}>
        {person.name}
        <img
            style={person.profile}
            src='https://i.imgur.com/7vQD0fPs.jpg' />
    </div>);
}