import AsyncStorage from "@react-native-async-storage/async-storage";

const COOKIE_STORAGE_KEY = "@BadLiar:Cookies";

export const saveCookies = async (cookies: string[]) => {
    try {
        await AsyncStorage.setItem(COOKIE_STORAGE_KEY, JSON.stringify(cookies));
    }
    catch (error) {
        console.log("Failed to store cookies in storage", error);
    }
};

export const getCookies = async () : Promise<string[] | null> => {
    try {
        const cookiesJSON = await AsyncStorage.getItem(COOKIE_STORAGE_KEY);
        if (cookiesJSON) {
            return JSON.parse(cookiesJSON);
        }
    }
    catch (error) {
        console.error("Error getting cookies: ", error);
    }
    return null;
};