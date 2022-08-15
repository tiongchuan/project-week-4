
import React, { useEffect, useState } from "react";
import { StyleSheet, Text, View, SafeAreaView, FlatList, ActivityIndicator } from "react-native";


const dataUrl = "https://student-database2022.herokuapp.com/general/tutors";

const getContent = () => {

    const [loading, setLoading] = useState(true);
    const [data, setData] = useState([]);

    // useEffect(() => {
    //     fetch(dataUrl)
    //         .then((response) => response.json())
    //         .then((json) => setData(json.name))
    //         .catch((error) => alert(error))
    //         .finally(setLoading(false))
    // });


      
    try {
        let response = await fetch(dataUrl);
        let responseJson = await response.json();
        console.log(responseJson);
        return responseJson
      } catch (e) {
        console.log(e);
      }
  
      


    return <SafeAreaView>
        {loading ? <ActivityIndicator /> : (
            <View>
                <FlatList data={data} />
            </View>
        )}
    </SafeAreaView>
}

export default getContent





async function getMoviesFromApi() {
    try {
    let response = await fetch(
    'Your URL to fetch data from',
    );
    let responseJson = await response.json();
    console.log(responseJSon);
    return responseJson;
    } catch (error) {
    console.error(error);
    }
    }