import React from 'react';
import { Button, Text, View } from 'react-native';

import styles from './Styles/Hello.styles';

export interface Props {
    name: string
    enthusiasmLevel: number
    onIncrement?: () => void
    onDecrement?: () => void
}

interface State {
    enthusiasmLevel: number
}

export class Hello extends React.Component<Props, State> {
    constructor(props: Props) {
        super(props);

        if ((props.enthusiasmLevel || 0) <= 0) {
            throw new Error("You could be a little more enthusiastic. :D")
        }

        this.state = {
            enthusiasmLevel: props.enthusiasmLevel || 1
        }
    }

    onIncrement = () => this.setState({
        enthusiasmLevel: this.state.enthusiasmLevel + 1
    });

    onDecrement = () => this.setState({
        enthusiasmLevel: Math.max(0, this.state.enthusiasmLevel - 1)
    });

    getExclamationMarks = (numChars: number) => Array(numChars + 1).join('!');

    render() {
        const { name, enthusiasmLevel }=this.props

        return (
            <View style={styles.buttons}>
                <Text>
                    Hello {name + this.getExclamationMarks(enthusiasmLevel)}
                </Text>
                <View style={styles.button} >
                    <Button
                        title="-"
                        onPress={this.onDecrement}
                        accessibilityLabel="decrement"
                        color="red"
                    />
                </View>

                <View style={styles.button} >
                    <Button
                        title="+"
                        onPress={this.onIncrement}
                        accessibilityLabel="increment"
                        color="blue"
                    />
                </View>
            </View>
        )
    }
}

