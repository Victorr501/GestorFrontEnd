import React, {useEffect, useState} from "react"; 
import{
    View,
    Text,
    TextInput,
    Button,
    Alert,
    StyleSheet,
    SafeAreaView,
    TouchableOpacity,
    Platform
} from 'react-native';
import { useRoute } from "@react-navigation/native";

const EditarUsuarioScreen = () => {
    const route = useRoute();
    const user = route.params?.user || null;

    
}

return EditarUsuarioScreen