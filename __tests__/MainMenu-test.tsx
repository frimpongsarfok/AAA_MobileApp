import { render } from '@testing-library/react-native';

import MainMenu from '@/app/(tabs)/MainMenu';

describe('MainMenu', () => {
    it('renders correctly', () => {
        const { getByText } = render(<MainMenu connectionHandler={function (state: boolean): void {
            throw new Error('Function not implemented.');
        } } joinHandler={function (state: {}): void {
            throw new Error('Function not implemented.');
        } } />);
        expect(getByText('Join Chalk')).toBeTruthy();
        expect(getByText('Connect Device')).toBeTruthy();
        expect(getByText('Pax Data')).toBeTruthy();
        expect(getByText('Let Go')).toBeTruthy();
        expect(getByText('Jump Data')).toBeTruthy();
    });
});
    // it('handles button press', () => {
    //     const { getByText } = render(<MainMenu />);
    //     const button = getByText('Join Chalk');
    //     fireEvent.press(button);
    //     expect(getByText('Join Chalk')).toBeTruthy();
    // }
    // it('handles button press', () => {
    //     const { getByText } = render(<MainMenu />);
    //     const button = getByText('Connect Device');
    //     fireEvent.press(button);
    //     expect(getByText('Connect Device')).toBeTruthy();
    // }
    // it('handles button press', () => {
    //     const { getByText } = render(<MainMenu />);
    //     const button = getByText('Pax Data');
    //     fireEvent.press(button);
    //     expect(getByText('Pax Data')).toBeTruthy();
    // }
    // it('handles button press', () => {
    //     const { getByText } = render(<MainMenu />);
    //     const button = getByText('Let Go');
    //     fireEvent.press(button);
    //     expect(getByText('Let Go')).toBeTruthy();
    // }
    // it('handles button press', () => {
    //     const { getByText } = render(<MainMenu />);
    //     const button = getByText('Jump Data');
    //     fireEvent.press(button);
    //     expect(getByText('Jump Data')).toBeTruthy();
    // }
    // it('handles button press', () => {
    //     const { getByText } = render(<MainMenu />);
    //     const button = getByText('Settings');
    //     fireEvent.press(button);
    //     expect(getByText('Settings')).toBeTruthy();
    // }
    // it('handles button press', () => {
    //     const { getByText } = render(<MainMenu />);
    //     const button = getByText('About');
    //     fireEvent.press(button);
    //     expect(getByText('About')).toBeTruthy();
    // }
    // it('handles button press', () => {  
    //     const { getByText } = render(<MainMenu />);
    //     const button = getByText('Help');
    //     fireEvent.press(button);
    //     expect(getByText('Help')).toBeTruthy();
    // }
    // it('handles button press', () => {
    //     const { getByText } = render(<MainMenu />);
    //     const button = getByText('Exit');
    //     fireEvent.press(button);
    //     expect(getByText('Exit')).toBeTruthy();
    // }
    // it('handles button press', () => {
    //     const { getByText } = render(<MainMenu />);
    //     const button = getByText('Settings');
    //     fireEvent.press(button);
    //     expect(getByText('Settings')).toBeTruthy();
    // }