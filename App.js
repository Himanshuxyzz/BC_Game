import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import ForgotPassword from "./App/Screens/ForgotPassword";
import Colors from "./App/Utils/Colors";
import Start from "./App/Screens/CreateYourProfile";
import CreateUrProfile from "./App/Screens/CreateYourProfile/CreateUrProfile";
import AddBankDetail from "./App/Screens/CreateYourProfile/AddBankDetail";
import VerificationPending from "./App/Screens/CreateYourProfile/VerificationPending";
import VerificationSuccessful from "./App/Screens/CreateYourProfile/VerificationSuccessful";
import NotVerified from "./App/Screens/CreateYourProfile/NotVerified";

import Dashboard from "./App/Screens/Dashboard";
import PlayOnline from "./App/Screens/Dashboard/PlayOnline";
import Auction from "./App/Screens/Dashboard/PlayOnline/Auction";
import Simple from "./App/Screens/Dashboard/PlayOnline/Simple";
import StartBC from "./App/Screens/Dashboard/PlayOnline/Auction/StartBC";

import OtpVerification from "./App/Screens/ForgotPassword/OtpVerification";

import WalletMain from "./App/Screens/WalletScreen";
import WalletMainVerified from "./App/Screens/WalletScreen/WalletMainVerified";
import FirstPage from "./App/Screens/SignUp";
import NewPassword from "./App/Screens/ForgotPassword/NewPassword";
import NotMatchedPassword from "./App/Screens/ForgotPassword/NotMatchedPassword";
import CorrectPassword from "./App/Screens/ForgotPassword/CorrectPassword";
import SignUpPage from "./App/Screens/SignUp/SignUpPage";
import LoginPage from "./App/Screens/SignUp/LoginPage";
import Refer from "./App/Screens/Refer&Termsconditions/Refer";
// import SignUpPage from './App/Screens/SignUp/SignUpPage'
// import Userdetail from "./App/Screens/UserProfile/Userdetail";
import ProfileDetail from "./App/Screens/UserProfile/ProfileDetail";
import EditProfile from "./App/Screens/UserProfile/EditProfile";
// import Phoneotp from "./App/Screens/UserProfile/OTPVerification/Phoneotp";
// import Phoneotptryagain from "./App/Screens/UserProfile/OTPVerification/Phoneotptryagain";
// import OTPverify from "./App/Screens/UserProfile/OTPverify";
// import EmailOTP from "./App/Screens/UserProfile/Emailverify/EmailOTP";
// import Emailotpwrong from "./App/Screens/UserProfile/Emailverify/Emailotpwrong";
// import Emaildone from "./App/Screens/UserProfile/Emailverify/Emaildone";
import Slide from "./App/Screens/UserProfile/Slidecomponent/Slide";
import BankAccount from "./App/Screens/UserProfile/BankAccount";
import Logout from "./App/Screens/UserProfile/Logout";
import Quicktask from "./App/Screens/UserProfile/Support/Quicktask";
import GenerateQuery from "./App/Screens/UserProfile/Support/GenerateQuery";
import CancelQuery from "./App/Screens/UserProfile/Support/CancelQuery";
import Backtdash from "./App/Screens/UserProfile/Support/Backtdash";
import Parent from "./App/Screens/UserProfile/Practics/Parent";
import Redirect from "./App/Screens/UserProfile/Redirect";

import Customedrawer from "./App/Screens/UserProfile/Support/Dreawer/Customedrawer";
const Stack = createNativeStackNavigator();



export default function App() {
  return (
    <NavigationContainer>
      <StatusBar style="light" />
      <View style={styles.container}>
        <Stack.Navigator>
          {/* esha starting page */}
          
          {/* <Stack.Screen
            name="Start"
            component={Start}
            options={{ headerShown: false }}
          />  */}

          {/* <Stack.Screen
            name="Createurprofile"
            component={CreateUrProfile}
            options={{ headerShown: false }}
          />  */}
          {/* <Stack.Screen
            name="Addbankdetail"
            component={AddBankDetail}
            options={{ headerShown: false }}
          />  */}
           {/* <Stack.Screen
            name="Verificationpending"
            component={VerificationPending}
            options={{ headerShown: false }}
          />  */}
           {/* <Stack.Screen
            name="Verificationsuccessful"
            component={VerificationSuccessful}
            options={{ headerShown: false }}
          />  */}
          {/* <Stack.Screen
            name="Notverified"
            component={NotVerified}
            options={{ headerShown: false }}
          />  */}
          {/* <Stack.Screen
            name="Dashboard"
            component={Dashboard}
            options={{ headerShown: false }}
          />  */}
           {/* <Stack.Screen
            name="Playonline"
            component={PlayOnline}
            options={{ headerShown: false }}
          />  */}
          {/* <Stack.Screen
            name="Auction"
            component={Auction}
            options={{ headerShown: false }}
          />  */}
           {/* <Stack.Screen
            name="Simple"
            component={Simple}
            options={{ headerShown: false }}
          />  */}
           {/* <Stack.Screen
            name="Startbc"
            component={StartBC}
            options={{ headerShown: false }}
          />  */}
          {/* Esha - end */}

          {/* {Bhavesh} */}
           
            {/* <Stack.Screen
            name="WelcomePage"
            component={FirstPage}
            options={{ headerShown: false }}
          />  */}

           {/* <Stack.Screen
            name="SignUpPage"
            component={SignUpPage}
            options={{ headerShown: false }}
          />  */}

          {/* {Bhavesh end} */}

          {/* Himanshu */}

           {/* <Stack.Screen
            name="forgotPassword"
            component={ForgotPassword}
            options={{ headerShown: false }}
          /> */}
          
          {/* <Stack.Screen
            name="otpVerification"
            component={OtpVerification}
            options={{ headerShown: false }}
          /> */}
          {/* <Stack.Screen
            name="newPassword"
            component={NewPassword}
            options={{ headerShown: false }}
          /> */}
          {/* <Stack.Screen
            name="inCorrectPassword"
            component={NotMatchedPassword}
            options={{ headerShown: false }}
          /> */}

          {/* <Stack.Screen
            name="correctPassword"
            component={CorrectPassword}
            options={{ headerShown: false }}
          />  */}

          {/* Himanshu - end */}

          {/* Sakshi */}

           {/* <Stack.Screen
            name="WalletMain"
            component={WalletMain}
            options={{ headerShown: false }}
          /> */}
          {/* <Stack.Screen
            name="WalletMainVerified"
            component={WalletMainVerified}
            options={{ headerShown: false }}
          />  */}

          {/* Sakshi - end */}

          {/* samraat start */}

          {/* <Stack.Screen
            name="Slide"
            component={Slide}
            options={{ headerShown: false }}
          />  */}

        
          {/* <Stack.Screen
            name="Redirect"
            component={Redirect}
            options={{headerShown: false}}
           /> */}
       

          <Stack.Screen
            name="Parent"
            component={Parent}
            options={{headerShown: false}}
           />

            <Stack.Screen
            name="EditProfile"
            component={EditProfile}
            options={{ headerShown: false }}
          /> 
          <Stack.Screen
            name="ProfileDetail"
            component={ProfileDetail}
            options={{ headerShown: false }}
          /> 
        
          <Stack.Screen 
            name="BankAccount"
            component={BankAccount}
            options={{headerShown :false}}
          />
          
          <Stack.Screen
            name="Customedrawer"
            component={Customedrawer}
          />
        

          <Stack.Screen 
            name="Quicktask"
            component={Quicktask}
            options={{headerShown : false}}
          />
     
          <Stack.Screen
            name="GenerateQuery"
            component={GenerateQuery }
            options={{headerShown:false}}
          />
         
          <Stack.Screen
            name="CancelQuery"
            component={CancelQuery}
            options={{headerShown:false}}
          />
          <Stack.Screen
            name="Backtdash"
            component={Backtdash}
            options={{headerShown:false}}
          />
          <Stack.Screen 
            name="Logout"
            component={Logout}
            options={{headerShown :false}}
          />   
        

           
          

           {/* samraat end */}


        </Stack.Navigator>
      </View>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.PRIMARY,
    paddingTop: "12%",
  },
});
