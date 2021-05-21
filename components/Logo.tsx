import * as React from 'react';
import { Image } from 'react-native'

export const Logo: React.FC = () => {
    return (
        <Image 
            source={require('../assets/images/HomeScreen.png')} 
            style={{
                width: 400, 
                height: 125,
                resizeMode: 'contain',
                marginBottom: 10,
            }}
        />
    );
}