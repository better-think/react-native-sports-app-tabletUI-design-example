import React,{useState} from 'react';
import { View, Text, Image, TouchableOpacity, StyleSheet } from 'react-native';
import { ScrollView } from 'react-native-gesture-handler';

const data = [
    {name: 'Teams', img:require('../Images/team.png')},
    {name: 'Players', img:require('../Images/player.png')},
    {name: 'Games', img:require('../Images/football.png')},
];
const styles = StyleSheet.create({
    container:{
        flex:1,
        justifyContent:'space-between',
        backgroundColor:'#166ff9',
    },
    header_main:{
        height:70,
        width:'100%', 
        backgroundColor:'#1479ff', 
        flexDirection:'row', 
        justifyContent:'space-between', 
        alignItems:'center'
    },
    header_sub_view:{
        flexDirection:'row',
        justifyContent:'space-around',
        width:'20%',
        height:70,
        alignItems:'center'
    },
    header_button:{
        backgroundColor:'#59a0ff',
        padding:10
    },
    header_font:{
        color:'white',
        fontWeight:'bold'
    },
    top_1_view:{
        width:'90%',
        justifyContent:'space-around',
        alignSelf:'center',
        alignItems:'center'
    },
    top_1_view_bold_txt:{
        fontSize:20,
        color:'white',
        fontWeight:'bold'
    },
    top_1_view_normal_txt:{
        fontSize:14,
        color:'white',
        letterSpacing:2,
        textAlign:'center'
    },
    major_view:{
        width:'90%',
        justifyContent:'space-around',
        alignSelf:'center',
        alignItems:'center',
        flexDirection:'row',
    },
    major_tile_main:{
        height:230,
        width:'32%',
        justifyContent:'center',
        alignItems:'center'
    },
    tile_img_container:{
        position:'relative',
        width:190,
        height:190,
        backgroundColor:'white',
        borderRadius:190/2,
        justifyContent:'center',
        alignItems:'center'
    },
    tile_image:{
        height:150,
        width:150,
        resizeMode:'contain'
    },
    selected_tile_txt:{
        fontWeight:'bold',
    },
    footer_view:{
        marginBottom: 15,
        width:'100%'
    },
    footer_button:{
        padding:10,
        alignSelf:'center',
        backgroundColor:'white',
        width:'30%',
        alignItems:'center',
        borderRadius:20
    },
    footer_button_txt:{
        color:'#1479ff',
        fontWeight:'bold'
    },
    outter2:{
        padding: 5,
        borderRadius: 10000,
        backgroundColor: '#166ff9',
        borderWidth:2,
        borderColor:'white'
    },
})

const SelectGame = ({navigation}) => {
    console.log("hi");
    const [selected,setselected] = useState('');
    const set =(val)=>{
        setselected(val);
    }
    return (
        <ScrollView>
            <View style={styles.container}>
                <View style={styles.header_main}>
                    <View style={styles.header_sub_view}>
                        <TouchableOpacity style={styles.header_button}>
                                <Text style={styles.header_font}>Back</Text>
                        </TouchableOpacity>
                        <View>
                        <Text style={styles.header_font}>Select Game</Text>
                        </View>
                    </View>
                    <View style={{margin:10}}>
                    <TouchableOpacity onPress={()=>navigation.navigate('period')} style={styles.header_button}>
                                <Text style={styles.header_font}>Go To Period Screen</Text>
                        </TouchableOpacity>
                    </View>
                </View>
                <View style={styles.top_1_view}>
                    <Text style={styles.top_1_view_bold_txt}>Choose Game and Continue</Text>
                    <Text style={styles.top_1_view_normal_txt}>Loreum Ipsum is simply dummy text of printing and typesetting industry. Loreum Ipsum has been the industry's standard dummy text ever since the 1500s.</Text>
                </View>
                <View style={styles.major_view} >

                {
                    data.map(function(element, i) {
                        if (element.name === selected) 
                            return(
                                <TouchableOpacity key={i} style={styles.major_tile_main} >
                                    <View style={styles.outter2}>
                                        <View style={styles.tile_img_container}>
                                            <Image style={styles.tile_image} source={element.img} />
                                            <Text style={styles.selected_tile_txt}>{element.name}</Text>
                                        </View>
                                    </View>
                                </TouchableOpacity>
                            )
                        else 
                            return(
                                <TouchableOpacity onPress={()=>set(element.name)} key={i} style={styles.major_tile_main} >
                                    <View style={styles.tile_img_container}>
                                        <Image style={styles.tile_image} source={element.img} />
                                        <Text>{element.name}</Text>
                                    </View>
                                </TouchableOpacity>
                            )
                    })
                }
                </View>
                <View style={styles.footer_view} >
                    <TouchableOpacity onPress={()=>navigation.navigate(selected)} style={styles.footer_button}>
                        <Text style={styles.footer_button_txt}>Continue</Text>
                    </TouchableOpacity>
                </View>

            </View>
        </ScrollView>
    )
}

export {SelectGame};