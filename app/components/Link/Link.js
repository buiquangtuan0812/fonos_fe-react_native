import { Linking, Pressable, Alert, Text } from "react-native";
import { useCallback } from "react";

const Link = ({url, children, style}) => {
    const handlePress = useCallback(async () => {
        const supported = await Linking.canOpenURL(url);

        if (supported) {
            await Linking.openURL(url);
        }
        else {
            Alert.alert(`Don't know how to open the URL: ${url}`);
        }
    }, [url]);
    return (
        <Pressable onPress={handlePress}>
            <Text style = {style}>{children}</Text>
        </Pressable>
    );
}

export default Link;