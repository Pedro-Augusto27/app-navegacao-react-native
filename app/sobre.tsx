import Button from "@/components/Button";
import { useRouter } from "expo-router";
import { StyleSheet, Text, View } from "react-native";

export default function Sobre() {
    const router = useRouter();
    return (
        <View style={styles.container}>
            <Text style={styles.title}>Bem Vindo a tela de Sobre!</Text>
            <Text style={styles.subtitle}>Esta é a tela Sobre, feita como uma atividade do Wagner.</Text>

            {/* 
            <TouchableOpacity style={styles.button}
                onPress={() => router.back()}>
                <Text style={styles.buttonText}>Voltar</Text>
            </TouchableOpacity>
            */}

            {/* Botão usando o componente Button do React Native*/}
            <Button title="Voltar" onPress={() => router.back()} />
        </View>
    );

}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        padding: 16,
        backgroundColor: '#f4ff22',
    },

    title: {
        fontSize: 24,
        fontWeight: '700',
        color: '#333',
        marginBottom: 16,
    },

    subtitle: {
        fontSize: 18,
        fontWeight: 500,
        color: '#555',
        marginBottom: 28,
    },

    button: {
        backgroundColor: '#EC7000',
        paddingVertical: 12,
        paddingHorizontal: 30,
        borderRadius: 12,
    },

    buttonText: {
        color: '#fff',
        fontSize: 16,
        fontWeight: 600,
    },
});