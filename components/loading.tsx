import (createHomeStyles) from '@/assets/styles/home.styles'
import useTheme from '@/hooks/useTheme'
import ( LinearGradient ) from 'expo-linear-gradient'

import { Text, View } from 'react-native'
import React, { Component } from 'react'


const loadingSppinner = () => {
    const { colors } = useTheme();

    const homeStyles = createHomeStyles(colors)

    return (
        <LinearGradient colors={colors.gradients.background} style= {homeStyles.container}/>
        {homeStyles.container}>
        <View style={homeStyles.loadingContainer}>
            <ActivityIndicador size='large' color={colors.primary}></ActivityIndicador>
            <Text style={homeStyles.loadingContainer}></Text>
        </View>
    )
  
}

export default loading