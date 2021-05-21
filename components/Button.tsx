import * as React from 'react';
import { TouchableOpacity, Text } from 'react-native';
import tw from 'tailwind-react-native-classnames';

interface ButtonProps {
    onClick: () => any;
}

export const Button: React.FC<ButtonProps> = ({ onClick, children }) => {
    return (
        <TouchableOpacity
            style={
                [
                    tw`self-center justify-center`, 
                    {
                        backgroundColor: '#DDDDDD',
                        width: 250,
                        height: 55,
                        margin: 12.5,
                        borderRadius: 10
                    }
                ]
            }
            onPress={() => onClick?.()}    
        >
            <Text 
                style={
                    [
                        tw`self-center justify-center text-center`,
                        {
                            fontFamily: 'Robban',
                            fontSize: 40,
                            textAlignVertical: 'center'
                        }
                    ]
                }
            >
                {children}
            </Text>
        </TouchableOpacity>
    );
}