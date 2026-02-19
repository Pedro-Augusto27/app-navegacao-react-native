import { StyleSheet, Text, View } from "react-native";

import Button from "@/components/Button";

type CardProps = {
    title: string;
    description: string;
    onButtonPress: () => void;
    buttonColor: string;
    buttonTitle: string;
}

export default function Card({ title, description, onButtonPress, buttonTitle, buttonColor }: CardProps) {
    return (
    <View style={styles.cardContainer}>
        <Text style={styles.title}>{title}</Text>
        <Text style={styles.description}>{description}</Text>
        <Button title={buttonTitle} color={buttonColor} onPress={onButtonPress} />
        </View>
    )
}

const styles = StyleSheet.create({
    cardContainer:{
        width: '100%',
        backgroundColor: '#fff',
        padding: 16,
        borderRadius: 8,
        marginBottom: 16,
        // gap: 4,
    },

     title: {
        fontSize: 18,
        fontWeight: '700',
        color: '#333',
        marginBottom: 16,
    },

    description: {
        fontSize: 14,
        fontWeight: 500,
        color: '#555',
        marginBottom: 28,
    },

})

