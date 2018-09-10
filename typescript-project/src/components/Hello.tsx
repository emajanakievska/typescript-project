import * as React from 'react';
import './Hello.css';

export interface Props {
    name: string;
    enthusiasmLevel?: number;
}

interface State {
    currentEnthusiasm: number;
}

class Hello extends React.Component<Props, State> {
    constructor(props: Props) {
        super(props);
        this.state = { currentEnthusiasm: props.enthusiasmLevel || 1 }
    }

    onDecrement = () => { this.updateEnthusiasm( this.state.currentEnthusiasm - 1 )}
    onIncrement = () => { this.updateEnthusiasm( this.state.currentEnthusiasm + 1 )}

    updateEnthusiasm(currentEnthusiasm: number){
        this.setState({currentEnthusiasm});
    }

    render(){
        const { name } = this.props;

        if(this.state.currentEnthusiasm <= 0){
            throw new Error(' Try to be more enthusiastic!! ');
        }

        return(
            <div className="hello">
                <div className="greeting">
                    Hello { name + getExclamationMarks(this.state.currentEnthusiasm)}
                </div>
                <button onClick={this.onDecrement}> - </button>
                <button onClick={this.onIncrement}> + </button>
            </div>
        );
    }
}

function getExclamationMarks( numChars: number) {
    return Array(numChars + 1).join('!');
}

export default Hello;


// function Hello( {name, enthusiasmLevel = 1 }: Props) {
//     if(enthusiasmLevel <= 0 ) {
//         throw new Error(' Try to be more enthusiastic!! ');
//     }

//     return (
//         <div className="hello">
//             <div className="greeting">
//                 Hello { name + getExclamationMarks(enthusiasmLevel)}
//             </div>
//         </div>
//     )
// }

