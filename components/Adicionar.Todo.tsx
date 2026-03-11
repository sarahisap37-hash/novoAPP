import { createHomeStyles } from '@/assets/styles/home.styles';
import { api } from '@/convex/_generated/api';
import useTheme from "@/hooks/useTheme";
import { Ionicons } from '@expo/vector-icons';
import { useMutation } from 'convex/react';
import { LinearGradient } from 'expo-linear-gradient';
import React, { useState } from 'react';
import { Alert, Image, TextInput, TouchableOpacity, View } from 'react-native';

const AdicionarTodo = () => {
    const {colors} = useTheme ();
    const homeStyles = createHomeStyles(colors);

    const [newTodo, setNewTodo] = useState(" ");
    const addTodo = useMutation(api.todo.addTodo);

    const handleAppTodo= async() =>{
      if(newTodo.trim()) {
        try{
          await addTodo({ text:newTodo.trim()})
        } catch (error) {
            console.log("Error ao adicionar todo" , error);
            Alert.alert("Error", "Erro ao adicionar");
        }
      }
    }  
  return (
    <View style={homeStyles.inputSection}>
      <View style={homeStyles.inputWrapper}>  
        <TextInput style={homeStyles.input} placeholder='Digite uma tarefa' placeholderTextColor={colors.textMuted} multiline value={newTodo} onChangeText={setNewTodo}/>
        {/*onSubmitEditing=(handAppTodo)*/}
        <TouchableOpacity onPress= {handleAppTodo} disabled={!newTodo.trim()}>
          <LinearGradient style={homeStyles.addButton} colors={colors.gradients.primary}>
            <Ionicons name='add' size={24} color={"#ffff"} ></Ionicons>
          </LinearGradient>
        </TouchableOpacity>
      </View>
        <Image style={homeStyles.img} source={{uri:"https://repository-images.githubusercontent.com/613620748/060af7bd-c967-4e09-8d2e-b15bd29ba771"}} />
        
    </View>

 )
}

export default AdicionarTodo