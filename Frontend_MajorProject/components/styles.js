import styled from 'styled-components';
import { View, Text } from 'react-native';
import Constants from 'expo-constants'
//colours 
export const Colours = { 
    primary: '#0F0445',
    secondary: '#213681',
    purple: '#6A5BFF',
    blue: '#75BEF4'

}
const {primary, secondary, purple, blue} = Colours;

export const PageTitle = styled.Text`
    font-size: 40px;
    text-align: center;
    font-weight: bold; 
    color: white; 
    padding: 10px;
`

export const SubText = styled.Text`
    font-size: 14px;
    margin-bottom: 5px;
    font-weight: bold; 
    color: white; 
   
`
export const SubTextRegister = styled.Text`
    font-size: 14px;
    margin-bottom: 14px;
    font-weight: bold; 
    color: white; 
    
`

