import React from "react";
import {NavigationContainer} from "@react-navigation/native";
import {createNativeStackNavigator} from "@react-navigation/native-stack";

import {Routes} from "../constants/routes";

import {MovieList ,MovieDetails, CreateMovie} from "../features/movies  ";

const Stack = createNativeStackNavigator();

export default function AppRoutes() {
    return (
        <NavigationContainer>
            <Stack.Navigator initialRouteName={Routes.MOVIE_LIST}>
                <Stack.Screen
                name={Routes.MOVIE_LIST} 
                component={MovieList} 
                options={{ title: "filmes" }}
                />

                <Stack.Screen 
                name={Routes.MOVIE_DETAIL}
                component={MovieDetails} 
                options={{ title: "Detalhes do filme" }}
                 />

                <Stack.Screen 
                name={Routes.CREATE_MOVIE} 
                component={CreateMovie} 
                options={{ title: "Cadastrar filme" }}
                />

            </Stack.Navigator>
        </NavigationContainer>
    );
}


  