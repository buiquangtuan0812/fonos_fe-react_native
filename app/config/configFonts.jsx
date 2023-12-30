import * as Font from 'expo-font';

const fontAssets = {
    Regular: require('../../assets/fonts/ShadowsIntoLight-Regular.ttf')
};

export default loadFonts = async () => {
    await Font.loadAsync(fontAssets);
}