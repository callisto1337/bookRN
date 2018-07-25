import React, {Component} from 'react';
import {StyleSheet, View, StatusBar, TextInput} from 'react-native';
import Image from 'react-native-remote-svg'

export default class extends Component {
    constructor() {
        super();
        this.state = {
            text: ``
        };
    }

    render() {
        return (
            <View style={main.bg}>
                <StatusBar hidden={true} />
                <View style={main.nav}>
                    <View style={main.logo}>
                        <Image source={require('../../assets/img/logo.svg')} />
                    </View>
                    <View style={main.btn}>
                        <Image source={require('../../assets/img/account.svg')} />
                    </View>
                    <View style={main.btn}>
                        <Image source={require('../../assets/img/settings.svg')} />
                    </View>
                    <View style={main.btn}>
                        <Image source={require('../../assets/img/plus.svg')} />
                    </View>
                </View>
                <TextInput
                    style={main.input}
                    onChangeText={(text) => this.setState({text})}
                    value={this.state.text}
                    underlineColorAndroid='transparent'
                />
            </View>
        );
    }
}

const main = StyleSheet.create({
    bg: {
        backgroundColor: `#035afd`,
        height: `100%`,
        padding: 24,

    },
    nav: {
        display: `flex`,
        flexDirection: `row`,
        justifyContent: `space-between`,
        alignItems: `center`
    },
    btn: {
        width: 40,
        height: 40,
        display: `flex`,
        alignItems: `center`,
        justifyContent: `center`,
        marginLeft: 30
    },
    logo: {
        flexGrow: 1
    },
    input: {
        marginTop: 42,
        backgroundColor: `white`,
        height: 40,
        paddingHorizontal: 15,
        borderWidth: 0
    }
});