import styled from 'styled-components/native';
import { Dimensions } from 'react-native';
import { RectButton } from 'react-native-gesture-handler';

export const Container = styled(RectButton)`
    width: 100%;
    height: 50px;
    background-color: #06bd58;
    border-radius: ${Dimensions.get('window').width * 0.5}px;

    align-items: center;
    justify-content: center;
`;

export const TextButton = styled.Text`
    font-family: 'itc-avant-garde-gothic-std-demi';
    color: #ffffff;
    font-size:  ${Dimensions.get('window').width * 0.04}px;
    letter-spacing: ${Dimensions.get('window').width * 0.007}px;
`;
