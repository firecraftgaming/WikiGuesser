import React from "react";
import { TextInput } from "react-native";
import { set } from "../location";
import { FormObject } from "./Form";

export const OnlineMultiplayerView: React.FC = () => {
    return (
        <FormObject key="userInput">
            <TextInput
                placeholder="Username" 
                onChangeText={v => set('username', v)} 
                placeholderTextColor="#C4C4C4" 
                style={
                    {
                        borderRadius: 8,
                    
                        width: 305,
                        height: 40,
                    
                        paddingLeft: 10,
                        fontSize: 23,
                        color: '#C4C4C4',
                    
                        margin: 5,
                        backgroundColor: "#626262",
                    }
                }
            />
        </FormObject>
    );
}