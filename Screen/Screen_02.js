import React, { useEffect, useState } from "react";
import { View, Text, StyleSheet, TouchableOpacity, ImageBackground} from "react-native";
import { MaterialIcons } from "@expo/vector-icons";


export default function Screen_02({navigation}){
    const [ima, setImage] = useState(require('../assets/vs_blue.jpg'));
    const [color, setColor] = useState('Xanh')
   

    useEffect(() => {
        if(ima == (require('../assets/vs_blue.jpg')))
            setColor('Xanh');
        else if(ima == (require('../assets/vs_red.jpg')))
            setColor('Đỏ');
        else if(ima == (require('../assets/vs_black.jpg')))
            setColor('Đen');
        else if(ima == (require('../assets/vs_silver.jpg')))
            setColor('Bạc');
    },[ima]) // hàm sẽ chạy khi có thay đổi về giá trị ở ima
    return(
        <View style={styles.container}>
            <View style={styles.top}>
                <ImageBackground
                    source={ima}
                    style={{width: '100px', height: '120px'}}
                >
                </ImageBackground>
                <View style={styles.top_1}>
                    <Text style={{fontWeight: '500'}}>Điện thoại Vsmart Joy 3 {'\n'}
                    Hàng chính hãng
                    </Text>
                    <Text style={{fontWeight: '500'}}>Màu: <Text style={{fontWeight: '700'}}>{color}</Text></Text>
                    <Text style={{fontWeight: '500'}}>Cung cấp bởi <Text style={{fontWeight: '700'}}>Tiki Tradding</Text></Text>
                    <Text style={{fontWeight: '700'}}>1.790.000 đ</Text>
                </View>
               

            </View>

            <View style={styles.bottom}>
                <Text style={{position: 'relative', right: '70px', fontSize: '19px', fontWeight: '600'}}>Chọn một màu bên dưới:</Text>

                <TouchableOpacity style={{backgroundColor: '#C5F1FB', width: '85px', height: '80px'}} 
                                    onPress={() => {setImage(require('../assets/vs_silver.jpg'))}}>

                </TouchableOpacity>

                <TouchableOpacity style={{backgroundColor: '#F30D0D', width: '85px', height: '80px'}}
                                    onPress={() => {setImage(require('../assets/vs_red.jpg'))}}>
                    
                </TouchableOpacity>

                <TouchableOpacity style={{backgroundColor: '#000000', width: '85px', height: '80px'}}
                                    onPress={() => {setImage(require('../assets/vs_black.jpg'))}}>
                    
                </TouchableOpacity>

                <TouchableOpacity style={{backgroundColor: '#234896', width: '85px', height: '80px'}}
                                    onPress={() => {setImage(require('../assets/vs_blue.jpg'))}}>
                    
                </TouchableOpacity> 

                <TouchableOpacity style={{backgroundColor: '#234896', width: '80%', height: '44px', borderRadius: '10px', justifyContent: 'center', alignItems: 'center'}} 
                                    onPress={() => navigation.navigate('Screen_04',{
                                        hihi: ima
                                    }
                                    )}>
                    <Text style={{fontSize: '20px', fontWeight: '700', color: 'white'}}>Xong</Text>
                </TouchableOpacity>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1
    },

    top:{
        height: '20%',
        flexDirection: 'row',
        backgroundColor: 'white'
    },

    bottom:{
        height: '80%',
        backgroundColor: '#C4C4C4',
        justifyContent: 'space-evenly',
        alignItems: 'center',
        flexDirection: 'column'
    },

    top_1:{
        justifyContent: 'space-around',
        marginLeft: '30px'
    }
})