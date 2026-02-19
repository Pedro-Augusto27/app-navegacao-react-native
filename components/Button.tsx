import { StyleSheet, Text, TouchableOpacity } from "react-native";

// Definindo o tipo das props com TypeScript
type ButtonProps = {
    title: string;
    onPress: () => void;
    color?: string; // ? signfica que é opcional
}

export default function Button({ title, onPress, color }: ButtonProps) {
    return (
        <TouchableOpacity style={[styles.button, { backgroundColor: color }]} onPress={onPress}>
            <Text style={styles.buttonText}>{title}</Text>
        </TouchableOpacity>
    );
}

const styles = StyleSheet.create({
    button: {
        backgroundColor: '#EC7000',
        width: '70%',
        paddingVertical: 12,
        paddingHorizontal: 30,
        borderRadius: 12,
    },

    buttonText: {
        color: '#fff',
        fontSize: 16,
        fontWeight: 600,
        textAlign: 'center',
    },
})