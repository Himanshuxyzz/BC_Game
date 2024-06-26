import {
    View,
   Text,
   StyleSheet,
Image ,
TextInput,
TouchableOpacity,
ScrollView} from 'react-native'
import React from 'react'
import { LinearGradient } from 'expo-linear-gradient'

const Bankaccount = ({navigation}) => {
  return (
    <View style={styles.fullcontainer}>
    <ScrollView>
      <Text style={{color:"rgba(255, 255, 255, 1)", fontSize:22, fontWeight:"bold", textAlign:"center", top:70 }}>Your Bank Account Details</Text>
      <View style={styles.icon_content}>
        <View>
            <Image style={{width:60 , height:60}} source={require('../../../assets/icici logo.png')}/>
        </View>
        <View >
        <Text style={{color:"white", fontSize:22, fontWeight:"700"}}>ICICI Bank</Text>
        </View>
      </View>
      <View style={styles.input_box}>
          <View style={styles.nameinput}>
             <Text style={{color:"#FFFFFF", fontSize:18}}>Account holder name</Text>
             <TextInput
                placeholder=''
                placeholderTextColor={"#FFFFFF" }
                style ={{borderBottomColor:"rgba(255, 255, 255, 0.5)",width:280, borderBottomWidth:1, color:"white", fontSize:18 , paddingBottom:5, textTransform:"capitalize"}}
                />
          </View>
          <View style={styles.nameinput}>
             <Text style={{color:"#FFFFFF", fontSize:18}}>Account Number</Text>
             <TextInput
                placeholder=''
                placeholderTextColor={"#FFFFFF"}
                style ={{borderBottomColor:"rgba(255, 255, 255, 0.5)",width:280, borderBottomWidth:1, color:"white", fontSize:18,paddingBottom:5, textTransform:"capitalize"}}
                />
          </View>
          <View style={styles.nameinput}>
             <Text style={{color:"#FFFFFF" , fontSize:18}}>IFSC Code</Text>
             <TextInput
                placeholder=''
                placeholderTextColor={"#FFFFFF"}
                style ={{borderBottomColor:"rgba(255, 255, 255, 0.5)",width:280, borderBottomWidth:1, color:"white", fontSize:18 ,paddingBottom:5, textTransform:"capitalize"}}
                />
          </View>
          <View style={styles.nameinput}>
             <Text style={{color:"#FFFFFF" , fontSize:18}}>Branch Name</Text>
             <TextInput
                placeholder=''
                placeholderTextColor={"#FFFFFF"}
                style ={{borderBottomColor:"rgba(255, 255, 255, 0.5)",width:280, borderBottomWidth:1, color:"white", fontSize:18,paddingBottom:5, textTransform:"capitalize"}}
                />
          </View>
          <View style={styles.nameinput}>
             <Text style={{color:"#FFFFFF" , fontSize:18}}>Bank Name</Text>
             <TextInput
                placeholder=''
                placeholderTextColor={"#FFFFFF"}
                style ={{borderBottomColor:"rgba(255, 255, 255, 0.5)",width:280, borderBottomWidth:1, color:"white", fontSize:22,paddingBottom:5, textTransform:"capitalize"}}
                />
          </View>
      </View>
      <TouchableOpacity
      onPress={()=> navigation.navigate("Home")}
      >
        <LinearGradient
         colors = {['#EA59E4','#C508BD','#910C8C']}
         style={styles.btnstyle}
         start = {{x :0.0 , y : 0.0}}
         end = {{x:0.5 , y : 0.15}}>
         <Text style={{textAlign:"center", color:"#FFFFFF",padding:6, fontSize:22, fontWeight:"bold"}}>Back</Text>
        </LinearGradient>
      </TouchableOpacity>
      </ScrollView>
    </View>
  )
}

export default Bankaccount

const styles = StyleSheet.create({
    fullcontainer:{
        flex:1,
        backgroundColor:"black"
    },
    icon_content:{
        flexDirection:"row",
        alignItems:"center",
        marginHorizontal:70,
        top:100,
        gap:20,
    },
    input_box:{
        alignSelf:"center",
        marginVertical:160,
        flexDirection:"column",
        gap:20,
      

    },
    btnstyle:{
      width:300,
      marginVertical:-100,
      alignSelf:"center",
      borderWidth:1,
      padding:8,
      borderColor:"#FFFFFF",
      borderRadius:15,
    }
})