import React from "react";
import { View } from "react-native";
import tw from 'tailwind-react-native-classnames';
import { useNavigation } from '@react-navigation/native';

import Settings from "./Settings";
import Back from "./Back";

interface MainLayoutProps {
    back?: boolean;
    settings?: boolean;

    top?: React.ReactNode;
    bottom?: React.ReactNode;
}

export const MainLayout: React.FC<MainLayoutProps> = ({ back, settings, top, bottom, children }) => {
    const navigation = useNavigation();

    return (
        <View style={[tw`w-full h-full`, {backgroundColor: '#333333'}]}>
            <View style={{zIndex: 20}}>
                {back && <Back onClick={() => navigation.goBack()}/>}
                {settings && <Settings onClick={() => navigation.navigate('Settings')}/>}
            </View>
            <View style={[tw`w-full h-full flex flex-col justify-between items-center`]}>
                <View style={[tw`w-full flex items-center justify-center`, {height: '15%'}]}>
                    {top}
                </View>
                <View style={[tw`w-full flex-shrink flex items-center justify-center`]}>
                    {children}
                </View>
                <View style={[tw`w-full flex items-center justify-center`, {height: '15%'}]}>
                    {bottom}
                </View>
            </View>
        </View>
    );
};