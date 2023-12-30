import { View , Text, TouchableOpacity, TouchableWithoutFeedback} from "react-native";
import Icon from "react-native-vector-icons/FontAwesome";
import { useContext } from "react";
import MyContext, {MyContextProps} from "../../MyContext/MyContext";

import styles from "./success.style";

const Success: React.FC = () => {
    const {text, textButton, closeModal, navigation, id} = useContext(MyContext) as MyContextProps;

    const handleClick = () => {
        navigation.navigate("Home", {id: id});
    }

    return (
        <TouchableWithoutFeedback onPress={closeModal}>
            <View style = {styles.container}>
                <View style = {styles.content}>
                    <View style = {styles.header}>
                        <Icon name="check-circle" size={30} style = {styles.icon} />
                    </View>

                    <View style = {styles.body}>
                        <Text style = {styles.textBody}>{text}</Text>
                    </View>

                    <View style = {styles.footer}>
                        <TouchableOpacity style = {styles.buttonLogin} onPress={handleClick}>
                            <Text style = {{color: '#fff'}}>{textButton}</Text>
                        </TouchableOpacity>
                    </View>
                </View>
            </View>
        </TouchableWithoutFeedback>
    );
};

export default Success;