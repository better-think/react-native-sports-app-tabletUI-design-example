import React from 'react'
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';
import { ScrollView } from 'react-native-gesture-handler';
const data = [
    {name:'1st Line',coordinates:[{player:'05, Suohonen',status:true},{player:'27, Alraksin',status:false},{player:'31, Fredman',status:false},{player:'10, Huusko',status:false},{player:'01, Rautakoski',status:false},{player:'01, Rautakoski',status:false}]},
    {name:'2st Line',coordinates:[{player:'05, Suohonen',status:true},{player:'27, Alraksin',status:false},{player:'31, Fredman',status:false},{player:'10, Huusko',status:false},{player:'01, Rautakoski',status:false},{player:'01, Rautakoski',status:false}]},
    {name:'3st Line',coordinates:[{player:'05, Suohonen',status:true},{player:'27, Alraksin',status:false},{player:'31, Fredman',status:false},{player:'10, Huusko',status:false},{player:'01, Rautakoski',status:false},{player:'01, Rautakoski',status:false}]},
    {name:'4st Line',coordinates:[{player:'05, Suohonen',status:true},{player:'27, Alraksin',status:false},{player:'31, Fredman',status:false},{player:'10, Huusko',status:false},{player:'01, Rautakoski',status:false},{player:'01, Rautakoski',status:false}]},
];

const styles = StyleSheet.create({
    container:{
        flex:1,justifyContent:'flex-start',backgroundColor:'#eff3f7',
    },
    header_main:{
        height:70,width:'100%',backgroundColor:'#1479ff',justifyContent:'space-between',flexDirection:'row'
    },
    header_sub_view:{
        flexDirection:'row',justifyContent:'space-around',width:'30%',height:70,alignItems:'center'
    },
    header_sub_view2:{
        flexDirection:'row',justifyContent:'space-around',width:'10%',height:70,alignItems:'center'
    },
    header_sub_view2_button:{
        backgroundColor:'white',padding:10,borderRadius:10
    },
    header_sub_view2_txt:{
        color:'#1479ff',fontWeight:'bold'
    },
    header_button:{
        backgroundColor:'#59a0ff',padding:10,borderRadius:10
    },
    header_font:{
        color:'white',fontWeight:'bold'
    },
    table_header_view:{
        backgroundColor:'#eef5fe',height:50,width:'90%',alignSelf:'center',marginTop:30,marginBottom:30,borderRadius:20,flexDirection:'row',justifyContent:'space-around',alignItems:'center'
    },
    table_header_view_id:{
        width:'3%'
    },
    table_header_view_gen:{
        width:'10%'
    },
    table_header_txt:{
        textAlign:'center',fontSize:18,fontWeight:'bold'
    },
    table_entries_view:{
        backgroundColor:'white',height:50,width:'90%',alignSelf:'center',borderRadius:20,flexDirection:'row',justifyContent:'space-around',alignItems:'center',marginBottom:2
    },
    table_entries_txt:{
        textAlign:'center',fontSize:18,fontWeight:'bold',color:'#889bb3'
    },
    table_action_view:{
        width:'10%',flexDirection:'row',justifyContent:'center'
    },
    table_icon:{
        margin:5
    },
    header_time:{
        width:'12%'
    },
    tile_true:{
        width:'45%',
        backgroundColor:'white',
        justifyContent:'center',
        alignItems:'flex-start',
        borderRadius:20,padding:5,
        borderWidth:3,
        borderColor:'lightblue',
    },
    tile_false:{
        width:'45%',
        backgroundColor:'white',
        justifyContent:'center',
        alignItems:'flex-start',
        borderRadius:20,
        padding:5,
        borderWidth:0.8,
        borderColor:'#dde5ef',
    },
    major_view:{
        width:'95%',alignSelf:'center',marginTop:30,flexDirection:'row',flexWrap:'wrap',justifyContent:'space-around'
    },
    major_tile:{
        width:'45%',height:260,backgroundColor:'white',flexDirection:'row',marginBottom:20,borderRadius:20
    },
    major_tile_left:{
        width:'15%',justifyContent:'center',alignItems:'flex-start'
    },
    major_tile_left_txt:{
        transform: [{ rotate: "-90deg" }],fontSize:18,fontWeight:'bold'
    },
    major_tile_right:{
        width:'80%'
    },
    major_tile_right_one:{
        flexDirection:'row',height:60,justifyContent:'space-around',alignItems:'center'
    },
    major_tile_right_two:{
        height:60,justifyContent:'center',alignItems:'center'
    },
})

const UpdateLineUp = ({navigation}) => {
    return (
        <View style={styles.container}>
            <View style={styles.header_main}>
                <View style={styles.header_sub_view}>
                    <TouchableOpacity onPress={()=>navigation.navigate('period')} style={styles.header_button}>
                            <Text style={styles.header_font}>Back</Text>
                    </TouchableOpacity>
                    <View>
                        <Text style={styles.header_font}>Edit/Update Line Up</Text>
                    </View>
                </View>
                <View style={styles.header_sub_view2}>
                    <TouchableOpacity onPress={()=>alert('Data Updated Successfully..')} style={styles.header_sub_view2_button}>
                        <Text style={styles.header_sub_view2_txt}>Save</Text>
                    </TouchableOpacity>
                </View>
            </View>
            <ScrollView>
                <View style={styles.major_view}>
                {
                    data.map(function(element, i) {
                        return (
                            <View key={i} style={styles.major_tile}>
                                <View style={styles.major_tile_left}>
                                    <Text style={styles.major_tile_left_txt}>{element.name}</Text>
                                </View>
                                <View style={styles.major_tile_right}>
                                    <View style={styles.major_tile_right_one}>
                                        <View style={[element.coordinates[0].status ? styles.tile_true:styles.tile_false]}>
                                            <Text>{element.coordinates[0].player}</Text>
                                        </View>
                                        <View style={[element.coordinates[1].status ? styles.tile_true:styles.tile_false]}>
                                            <Text>{element.coordinates[1].player}</Text>
                                        </View>
                                    </View>
                                    <View style={styles.major_tile_right_two}>
                                        <View style={[element.coordinates[2].status ? styles.tile_true:styles.tile_false]}>
                                            <Text>{element.coordinates[2].player}</Text>
                                        </View>
                                    </View>
                                    <View style={styles.major_tile_right_one}>
                                        <View style={[element.coordinates[3].status ? styles.tile_true:styles.tile_false]}>
                                            <Text>{element.coordinates[3].player}</Text>
                                        </View>
                                        <View style={[element.coordinates[4].status ? styles.tile_true:styles.tile_false]}>
                                            <Text>{element.coordinates[4].player}</Text>
                                        </View>
                                    </View>
                                    <View style={styles.major_tile_right_two}>
                                        <View style={[element.coordinates[5].status ? styles.tile_true:styles.tile_false]}>
                                            <Text>{element.coordinates[5].player}</Text>
                                        </View>
                                    </View>
                                </View>
                            </View>
                        );
                    })
                }
                </View>
            </ScrollView>
        </View>
    )
}

export {UpdateLineUp};
