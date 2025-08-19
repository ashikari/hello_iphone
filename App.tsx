import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';

export default function App() {
  return (
    <View style={styles.container}>
      <Text style={{ fontSize: 28, fontWeight: 'bold', textAlign: 'center' }}>
        👋✨ Hello Abbas! 🚀😎🎉
        {"\n"}
        You are a real software engineer now 🤓💾🧑‍💻😂
      </Text>
      <StatusBar style="light" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
