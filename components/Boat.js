import React from "react";
import {Image, Text, View} from "react-native";
import {FontAwesome6} from "@expo/vector-icons";

const Boat = ({name, description, picture, icon_name, icon_color}) => {
    return (
        <View>
            <Text></Text>

            <Text style={{fontSize: 25}}>
                <FontAwesome6 name={icon_name} size={20} color={icon_color} />
                {name}
            </Text>

            <Text>
                {description}
            </Text>

            <Image source={picture}
                   style={{width:400, height:500}} />
        </View>
    );
};

export default Boat;