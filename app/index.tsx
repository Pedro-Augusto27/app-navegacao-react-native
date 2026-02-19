import { useRouter } from "expo-router";
import { StyleSheet, Text, View } from "react-native";


import Card from "@/components/Card";

export default function Home() {
    const router = useRouter();

    const handlePress = () => {
        console.log("Botão clicado!");

    }

    return (
        <View style={styles.container}>
            <Text style={styles.title}>Bem Vindo ao React Native!</Text>
            <Text style={styles.subtitle}>Esta é a tela inicial do nosso app.</Text>

            {/* 

            <TouchableOpacity style={styles.button}
               onPress={() => router.push('/detalhes')}>
                <Text style={styles.buttonText}>Ir para detelhes</Text>
            </TouchableOpacity>


            <TouchableOpacity style={styles.button}
                onPress={() => router.push('/sobre')}>
                <Text style={styles.buttonText}>Ir para Sobre</Text>
            </TouchableOpacity>

            */}

            <Card
                title="Detalhes do App"
                description="Aqui nós mostramos os detalhes do nosso app."
                onButtonPress={() => router.push('/detalhes')}
                buttonTitle="Ir para Detalhes"
                buttonColor="#EC7000"
            />
            <Card
                title="Sobre o App"
                description="Aqui você descobre mais sobre o nosso app."
                onButtonPress={() => router.push('/sobre')}
                buttonTitle="Ir para Sobre"
                buttonColor="#2E8B57"
            />

            {/* 

            Botão usando o componente Button do React Native

            <Button title="Ir para Detalhes" onPress={() => router.push('/detalhes')} />
            <Button title="Ir para Sobre" onPress={() => router.push('/sobre')} />
            
           */}
        </View>

    );
}

const styles = StyleSheet.create({
    container: {
        gap: 8,
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