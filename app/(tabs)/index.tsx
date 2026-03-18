import { createHomeStyles } from "@/assets/styles/home.styles";
import useTheme from "@/hooks/useTheme";
import Header from "@/components/Header";
import { TouchableOpacity } from "react-native";
import { LoadingSpinner } from "@/components/loadingSpinner";
import { SafeAreaView } from "react-native-safe-area-context";
import { LinearGradient } from "expo-linear-gradient"; 
import AdicionarTodo from "@/components/Adicionar.Todo";
import {use} from "react";
import {useQuery} from "convex";
import {api} from "@/convex/_generated/api";

export default function Index() {
  const { toggleDarkMode, colors } = useTheme();
  const homeStyles = createHomeStyles(colors)

  return (
    <LinearGradient colors={colors.gradients.background} style={homeStyles.container}>
      <SafeAreaView style={homeStyles.safeArea}>
        <Header />
        <AdicionarTodo/>
        <TouchableOpacity onPress={toggleDarkMode}>MUDA TEMA</TouchableOpacity>
      </SafeAreaView>
      </LinearGradient>
  )
  
}