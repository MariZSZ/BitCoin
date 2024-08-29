import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
    formContext:{
        width: "100%",
        height:"100%",
        bottom:0,
        backgroundColor: "#fec6cc",
        alignItems: "center",
        borderTopLeftRadius:30,
        borderTopRightRadius:30,
        marginTop:30,
    },

    form:{
        width:"100%",
        height:"auto",
        marginTop:30,
        padding:10,
    },

    formLabel:{
        color:"#FF1493",
        fontSize:18,
        paddingLeft:20,
        fontSize:20,
        fontWeight:"bold",
    },

    input:{
        width:"90%",
        borderRadius:50,
        backgroundColor:"#ffecee",
        height:40,
        margin:12,
        paddingLeft:10,
    },

    buttomCalculator:{
        borderRadius:50,
        alignItems:"center",
        justifyContent:"center",
        width:"90%",
        backgroundColor:"#FF1493",
        paddingTop:14,
        marginLeft:12,
        marginTop:30,
    },

    textButtonCalculator:{
        fontSize:25,
        color:"#FFFAFA",
        fontWeight:"bold",
    },
    erroMessage:{
        fontSize:12,
        color:"#C71585",
        fontWeight:"bold",
        paddingLeft:20,

    },
});

export default styles

