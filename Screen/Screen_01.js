import React, { useState } from "react";
import { View, Text, StyleSheet, TouchableOpacity, ImageBackground,TextInput, Button, CheckBox} from "react-native";
import { MaterialIcons } from "@expo/vector-icons";
import { Feather, Entypo ,AntDesign, FontAwesome   } from '@expo/vector-icons';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

export default function Screen_01({navigation}){
    const [image, setImage] = useState(require('../assets/vs_blue.jpg'));

    return(
        <View style={styles.containter}>
            <View style={styles.top}>
                <ImageBackground 
                    source={image}
                    style={styles.hinh}
                ></ImageBackground>

            </View>
            <View style={styles.center}>
                <View style={styles.center_1}>           
                    <Text style={{fontSize: '15px', fontWeight: '500'}}>Điện thoại Vsmart Joy 3 - Hàng chính hãng</Text>
                  
                    {/* <Text>{route.params.uriImage_1}</Text> */}
                </View>
                <View style={styles.center_2}>
                {
                    [...Array(5)].map(() =>{
                        return(
                            <ImageBackground
                                source={require('../assets/star.jpg')}
                                style={styles.ngoisao}
                            ></ImageBackground>                         
                        )
                    })
                }
                    <Text style={{marginTop: '4px', marginLeft: '20px',fontWeight: '500'}} >(Xem 828 đánh giá)</Text>
                </View>
                <View style={styles.center_3}>
                    <Text style={{fontSize: '17px', fontWeight: '700'}}>1.790.000 đ</Text>
                    <Text style={{fontSize: '15px', fontWeight: '700', marginLeft: '60px', textDecorationLine: 'line-through', marginTop: '2px', color: '#808080'}}>1.790.000 đ</Text>
                </View>
                <View style={styles.center_4}>
                    <Text style={{fontSize: '12px', fontWeight: '700', color: 'red'}}>Ở ĐÂU RẺ HƠN HOÀN TIỀN</Text>
                    <TouchableOpacity style={styles.circle}>
                        <Text>?</Text>
                    </TouchableOpacity>
                </View>
            </View>
            <View style={styles.bottom}>
                <View style={styles.bottom_1}>
                    <TouchableOpacity style={{borderWidth: 1.5, width: '100%', height: '40px',justifyContent: 'center', alignItems: 'center', borderRadius: '10px'}} onPress={() => navigation.navigate('Screen_02')}>
                        <Text style={{fontWeight: '500', fontSize: '16px'}}>4 MÀU-CHỌN MÀU</Text>
                    </TouchableOpacity>
                    <ImageBackground 
                        source={require('../assets/Vector.jpg')}
                        style={{height: '15px', width: '15px', position: 'absolute', right: '20px'}}>
                            
                        </ImageBackground>
                </View>
                
                <View style={styles.bottom_2}>
                    <TouchableOpacity style={{borderWidth: 0.4, width: '100%', height: '40px',justifyContent: 'center'
                                        , alignItems: 'center', borderRadius: '10px', backgroundColor: 'red'}}>
                        <Text style={{fontWeight: '600', fontSize: '16px', color: 'white'}}>CHỌN MUA</Text>
                    </TouchableOpacity>
                </View>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    containter:{
        flex: 1,
        backgroundColor: 'white'
    },
    
    hinh:{
        width: '330px',
        height: '105%'
    },
    
    top:{
        height: '50%',
        justifyContent: 'center',
        alignItems: 'center',
        marginTop: '20px'
    },

    ngoisao:{
        height: '23px',
        width: '23px',
        marginRight: '3px'
    },

    center:{
        marginTop: '32px',
        justifyContent: 'center',
        alignItems: 'center',
        flexDirection: 'column',
        height: '20%',
        justifyContent: 'space-between'
    },

    center_1:{
        flexDirection: 'row',
        width: '80%'
        
    },
    center_2:{
        flexDirection: 'row',
        width: '80%'
    },
    center_3:{
        flexDirection: 'row',
        width: '80%'
    },
    center_4:{
        flexDirection: 'row',
        width: '80%'
    },

    circle:{
        width: '20px',
        height: '20px',
        borderWidth: 1.5,
        borderRadius: '50%',
        justifyContent: 'center', 
        alignItems: 'center',
        marginLeft: '5px'
    },

    bottom:{
        height: '20%',
        marginTop: '10px',
        alignItems: 'center',
        justifyContent: 'space-between'
    },

    bottom_1:{
        flexDirection: 'row',
        width: '85%',
        justifyContent: 'center',
        alignItems: 'center'
    },

    bottom_2:{
        flexDirection: 'row',
        width: '83%',
        justifyContent: 'center',
        alignItems: 'center'
    },
})