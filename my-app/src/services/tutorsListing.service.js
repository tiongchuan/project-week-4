
import React, { useEffect, useState } from "react";
import { StyleSheet, Text, View, SafeAreaView, FlatList, ActivityIndicator } from "react-native";
import API from "./API.service";
import { StatusBar } from "expo-status-bar";



export const GetData = () => {

  const [isLoading, setIsLoading] = useState(true);
  const [tutors, setTutors] = useState([]);

  useEffect(() => {
    listTutors()
  }, [])

  function listTutors(){
    API.get('./general/tutors')
    .then(function(response){
      console.log(response.data.data);
      setTutors(response.data.data);
    })
    .then(setIsLoading(false))
    .catch((e)=>(console.log(e)))
  }
  

  // const loadingContent=()=>{
  //   return <ActivityIndicator size="large"/>
  // }

  const Item = ({ name, experience,hourlyRate }) => (
    <View style={styles.item}>
      <Text style={styles.name}>
        Name: {name}
      </Text>
      <Text style={styles.name}>
        Experience: {experience} years
      </Text>
      <Text style={styles.name}>
        Hourly Rate: ${hourlyRate} 
      </Text>
    </View>
  );
  
  const renderItem = ({ item }) => <Item 
  id={item.id}
  name={item.name} 
  experience={item.experience}
  hourlyRate={item.hourlyRate}
  />;

    //  const renderItem = ({ item }) => (<View><Text>{item.name}</Text></View>
    // );

   
  const myListEmpty = () => {
    return (
      <View style={{ alignItems: "center" }}>
      <Text style={styles.item}>No data found</Text>
      </View>
      );
    };

    return (

      <SafeAreaView style={styles.container}>
      {isLoading ? <ActivityIndicator /> :
      <FlatList 
      data={tutors} 
      renderItem={renderItem} 
      // keyExtractor={item => item.id} 
      ListEmptyComponent={myListEmpty}
      ListHeaderComponent={() => (
        <Text style={{ fontSize: 30, textAlign: "center", marginTop: 20, fontWeight: 'bold', textDecorationLine: 'underline' }}>
          List of Tutors
        </Text>
      )}
      ListFooterComponent={() => (
        <Text style={{ fontSize: 30, textAlign: "center", marginBottom: 20, fontWeight: 'bold' }}>
          End of List</Text>
      )}
      />
      }
    </SafeAreaView>
    
  
  
    )
  }

  
  const styles = StyleSheet.create({
    container: {
      flex: 1,
      marginTop: StatusBar.currentHeight || 0,
    },
    item: {
      backgroundColor: '#9D2427',
      padding: 20,
      marginVertical: 8,
      marginHorizontal: 16,
    },
    name: {
      fontSize: 25,
    },
  });

  // const styles =  StyleSheet.create({
  //   container:{
  //       flex:1,
  //       justifyContent:'center',
  //       alignItems:'center'
  //   },
  //   item:{
  //       padding:5, 
  //       borderBottomWidth:1,
  //       borderBottomColor:'blue'
  //   }
  // })


//   <SafeAreaView style={styles.container}>
//   {loading ? <ActivityIndicator /> :
//     <FlatList style={styles.flatlist}
//       data={animals}
//       initialNumToRender={4}
//       renderItem={({ item }) => <Text style={styles.item} >{item.name}</Text>}
//       keyExtractor={(item) => item.id}
//       ListEmptyComponent={myListEmpty}
//       ItemSeparatorComponent={myItemSeparator}
//       ListHeaderComponent={() => (
//         <Text style={{ fontSize: 30, textAlign: "center", marginTop: 20, fontWeight: 'bold', textDecorationLine: 'underline' }}>
//           List of Tutors
//         </Text>
//       )}
//       ListFooterComponent={() => (
//         <Text style={{ fontSize: 30, textAlign: "center", marginBottom: 20, fontWeight: 'bold' }}>
//           Thank You</Text>
//       )}
//     />
//   }
//   {/* <View>{tutors[1].name}</View> */}
// </SafeAreaView>


// const GetActivity = () => {

    // const [loading, setLoading] = useState(true);
    // const [data, setData] = useState([]);

    // useEffect(() => {
    //     fetch(dataUrl)
    //         .then((response) => response.json())
    //         .then((json) => setData(json.name))
    //         .catch((error) => alert(error))
    //         .finally(setLoading(false))
    // });

 

