import { Ionicons } from "@expo/vector-icons";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import React from "react";
import {
  FlatList,
  Image,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from "react-native";

const Stack = createNativeStackNavigator();

function TelaLogin({ navigation }) {
  const [email, setEmail] = React.useState("");
  const [password, setPassword] = React.useState("");

  return (
    <View style={styles.container}>
      <Image
        style={styles.tinyLogo}
        source={{
          uri: "https://marketplace.canva.com/A5alg/MAESXCA5alg/1/tl/canva-user-icon-MAESXCA5alg.png",
        }}
      />
      <View style={styles.container_inputs}>
        <Text>Email</Text>

        <TextInput style={styles.input} onChangeText={setEmail} value={email} />

        <Text>Senha</Text>

        <TextInput
          style={styles.input}
          onChangeText={setPassword}
          value={password}
        />
      </View>
      <View style={styles.container_btn}>
        <TouchableOpacity
          style={styles.botao}
          onPress={() => navigation.navigate("ListaContatos")}
        >
          <Text style={styles.texto}>Login</Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={styles.botao}
          onPress={() => navigation.navigate("Cadastro")}
        >
          <Text style={styles.texto}>Cadastre-se</Text>
        </TouchableOpacity>

        <Text onPress={() => navigation.navigate("EsqueciSenha")}>
          Esqueceu a senha
        </Text>
      </View>
    </View>
  );
}

function TelaCadastro({ navigation }) {
  const [nome, setNome] = React.useState("");
  const [cpf, setCpf] = React.useState("");
  const [email, setEmail] = React.useState("");
  const [senha, setSenha] = React.useState("");

  return (
    <View style={styles.container}>
      <View style={styles.container_inputs}>
        <Text>Nome</Text>
        <TextInput style={styles.input} onChangeText={setNome} value={nome} />

        <Text>Cpf</Text>
        <TextInput
          style={styles.input}
          onChangeText={setCpf}
          value={cpf}
          keyboardType="email-address"
          autoCapitalize="none"
        />

        <Text>Email</Text>
        <TextInput
          style={styles.input}
          onChangeText={setEmail}
          value={email}
          keyboardType="email-address"
          autoCapitalize="none"
        />

        <Text>Senha</Text>
        <TextInput
          style={styles.input}
          onChangeText={setSenha}
          value={senha}
          secureTextEntry
        />
      </View>

      <View style={styles.container_btn}>
        <TouchableOpacity
          style={styles.botao}
          onPress={() => alert("Botão de cadastro clicado!")}
        >
          <Text style={styles.texto}>Cadastrar</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

function TelaEsqueciSenha({ navigation }) {
  const [email, setEmail] = React.useState("");
  return (
    <View style={styles.container}>
      <Text>Email</Text>
      <TextInput
        style={styles.input}
        onChangeText={setEmail}
        value={email}
        keyboardType="email-address"
        autoCapitalize="none"
      />

      <View style={styles.container_btn}>
        <TouchableOpacity
          style={styles.botao}
          onPress={() => alert("Botão de recuperação de senha clicado!")}
        >
          <Text style={styles.texto}>Enviar</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

function TelaLista_Contatos({ navigation }) {
  const DATA = [
    { id: "1", title: "Marcos Andrade", number: "81 988553424" },
    { id: "2", title: "Patrícia Tavares", number: "81 988553424" },
    { id: "3", title: "Rodrigo Antunes", number: "81 988553424" },
  ];

  const [selectedId, setSelectedId] = React.useState(null);

  const renderItem = ({ item }) => {
    const backgroundColor = item.id === selectedId ? "#e2e2e2" : "#fffcff";
    const color = item.id === selectedId ? "white" : "black";

    return (
      <TouchableOpacity
        onPress={() => navigation.navigate("Alteracao")}
        style={[styles.item, { backgroundColor }]}
      >
        <Image
          style={styles.tinyLogo}
          source={{
            uri: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRLW3lNXGdlVP5uUSW_MznsmILJdTn_t5h2PA&s",
          }}
        />
        <Text style={[styles.title, { color }]}>{item.title}</Text>
        <Text style={[styles.number, { color }]}>{item.number}</Text>
      </TouchableOpacity>
    );
  };

  return (
    <View style={{ flex: 1 }}>
      <FlatList
        data={DATA}
        renderItem={renderItem}
        keyExtractor={(item) => item.id}
        extraData={selectedId}
      />
    </View>
  );
}

function TelaAlteracao({ navigation }) {
  const [nome, setNome] = React.useState("");
  const [email, setEmail] = React.useState("");
  const [password, setPassword] = React.useState("");

  return (
    <View style={styles.container}>
      <Image
        style={styles.tinyLogo}
        source={{
          uri: "https://marketplace.canva.com/A5alg/MAESXCA5alg/1/tl/canva-user-icon-MAESXCA5alg.png",
        }}
      />

      <View style={styles.container_inputs}>
        <Text>Nome</Text>
        <TextInput style={styles.input} onChangeText={setNome} value={nome} />

        <Text>Email</Text>

        <TextInput style={styles.input} onChangeText={setEmail} value={email} />

        <Text>Senha</Text>

        <TextInput
          style={styles.input}
          onChangeText={setPassword}
          value={password}
        />
      </View>
      <View style={styles.container_btn}>
        <TouchableOpacity
          style={styles.botao}
          onPress={() => navigation.navigate("Listacontatos")}
        >
          <Text style={styles.texto}>Salvar</Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={styles.botao}
          onPress={() => navigation.navigate("Lista_contatos")}
        >
          <Text style={styles.texto}>Excluir</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

function TelaCadastroContato({ navigation }) {
  const [nome, setNome] = React.useState("");
  const [email, setEmail] = React.useState("");
  const [telefone, setTelefone] = React.useState("");

  return (
    <View style={styles.container}>
      <Text>Nome</Text>
      <TextInput
        style={styles.input}
        onChangeText={setNome}
        value={nome}
        keyboardType="email-address"
        autoCapitalize="none"
      />

      <Text>Email</Text>
      <TextInput
        style={styles.input}
        onChangeText={setEmail}
        value={email}
        keyboardType="email-address"
        autoCapitalize="none"
      />

      <Text>Telefone</Text>
      <TextInput
        style={styles.input}
        onChangeText={setTelefone}
        value={telefone}
        keyboardType="email-address"
        autoCapitalize="none"
      />

      <View style={styles.container_btn}>
        <TouchableOpacity
          style={styles.botao}
          onPress={() => alert("Botão de recuperação de senha clicado!")}
        >
          <Text style={styles.texto}>Enviar</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Login" component={TelaLogin} />
        <Stack.Screen name="Cadastro" component={TelaCadastro} />

        <Stack.Screen
          name="ListaContatos"
          component={TelaLista_Contatos}
          options={({ navigation }) => ({
            title: "Contatos",
            headerTitleAlign: "center",
            headerRight: () => (
              <Ionicons
                name="add"
                size={28}
                color="black"
                style={{ marginRight: 15 }}
                onPress={() => navigation.navigate("Contato")}
              />
            ),
          })}
        />

        <Stack.Screen name="Contato" component={TelaCadastroContato} />
        <Stack.Screen name="Alteracao" component={TelaAlteracao} />
        <Stack.Screen name="EsqueciSenha" component={TelaEsqueciSenha} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#FAEBD7",
    alignItems: "center",
    justifyContent: "center",
  },

  tinyLogo: {
    width: 50,
    height: 50,
  },

  logo: {
    width: 66,
    height: 58,
  },

  input: {
    backgroundColor: "#fff",
    height: 40,
    margin: 12,
    borderWidth: 1,
    padding: 10,
  },

  botao: {
    backgroundColor: "#149e02ff",
    padding: 15,
    borderRadius: 8,
    alignItems: "center",
  },
  texto: {
    color: "#fff",
    fontWeight: "bold",
  },

  container_btn: {
    gap: 10,
    marginTop: 10,
    width: 200,
  },

  container_inputs: {
    width: 200,
    marginTop: 20,
  },

  item: {
    padding: 20,
    marginVertical: 8,
    marginHorizontal: 16,
    borderRadius: 8,
  },

  title: {
    fontSize: 18,
  },
});
