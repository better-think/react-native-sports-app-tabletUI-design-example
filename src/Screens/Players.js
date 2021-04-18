import React from 'react'
import { StyleSheet, Text, View, TouchableOpacity, ScrollView, Image } from 'react-native';
import Icon from 'react-native-vector-icons/AntDesign';
import Icon2 from 'react-native-vector-icons/FontAwesome';
import Icon3 from 'react-native-vector-icons/Ionicons';
const data = [
    {id:'1',player:'Fredman, Sandra',yob:'9/10/2003',position:'Attacker',side:'Left',games:'Games'},
    {id:'2',player:'Airaksinen,Venia',yob:'9/10/2003',position:'Defender',side:'Left',games:'Games'},
    {id:'3',player:'Kosonen, Tlia',yob:'9/10/2003',position:'Attacker',side:'Left',games:'Games'},
    {id:'4',player:'Sallstrom, Trista',yob:'9/10/2003',position:'Attacker',side:'Left',games:'Games'},
    {id:'5',player:'HastBacka, Nuppu',yob:'9/10/2003',position:'Defender',side:'Left',games:'Games'},
    {id:'6',player:'Luukkonen, Senni',yob:'9/10/2003',position:'Center Attacker',side:'Left',games:'Games'},
    {id:'7',player:'Vannien, Liina',yob:'9/10/2003',position:'Defender',side:'Left',games:'Games'},
    {id:'8',player:'Kalevo, Ella',yob:'9/10/2003',position:'Defender',side:'Left',games:'Games'},
    {id:'9',player:'Hellen, Eeva',yob:'9/10/2003',position:'center Attacker',side:'Left',games:'Games'},
    {id:'10',player:'Fredman,Sandra',yob:'9/10/2003',position:'Defender',side:'Left',games:'Games'},

];
const Players = ({navigation}) => {
    return (
        <View style={styles.container}>
        <View style={styles.header_main}>
        <View style={styles.header_sub_view}>
                <TouchableOpacity onPress={()=>navigation.navigate('selectgame')} style={styles.header_button}>
                        <Text style={styles.header_font}>Back</Text>
                </TouchableOpacity>
                <View>
                <Text style={styles.header_font}>Players</Text>
                </View>
                <TouchableOpacity style={styles.header_sub_add}>
                <Icon3 name="football" style={styles.header_icon} size={20} color="#4092ff" />
                <Text>Add Games</Text>
                </TouchableOpacity>
            </View>
            <View style={styles.header_sub_view2}>
                <TouchableOpacity onPress={()=>navigation.navigate('Teams')} style={styles.head_tile}>
                    <View style={styles.head_tile_img_container}>
                    <Image style={styles.head_img} source={require('../Images/team.png')} />
                    </View>
                        <Text style={styles.header_font}>Teams</Text>
                </TouchableOpacity>
                <TouchableOpacity onPress={()=>navigation.navigate('Players')} style={styles.head_tile}>
                    <View style={styles.head_tile_img_container}>
                    <Image style={styles.head_img} source={require('../Images/player.png')} />
                    </View>
                        <Text style={styles.header_font}>Players</Text>
                </TouchableOpacity>
                <TouchableOpacity onPress={()=>navigation.navigate('Games')} style={styles.head_tile}>
                    <View style={styles.head_tile_img_container}>
                    <Image style={styles.head_img} source={require('../Images/football.png')} />
                    </View>
                        <Text style={styles.header_font}>Games</Text>
                </TouchableOpacity>
            </View>
        </View>
        <View style={styles.table_header_view}>
            <View style={styles.table_header_id}>
            <Text style={styles.table_header_txt}>#</Text>
            </View>
            <View style={styles.table_header_gen}>
            <Text style={styles.table_header_txt}>Player</Text>
            </View>
            <View style={styles.table_header_gen}>
            <Text style={styles.table_header_txt}>Yob</Text>
            </View>
            <View style={styles.table_header_gen}>
            <Text style={styles.table_header_txt}>Position</Text>
            </View>
            <View style={styles.table_header_gen}>
            <Text style={styles.table_header_txt}>Side</Text>
            </View>
            <View style={styles.table_header_gen}>
            <Text style={styles.table_header_txt}>Games</Text>
            </View>
            <View style={styles.table_header_action}>
            <Text style={styles.table_header_txt}>Actions</Text>
            </View>
        </View>
        <ScrollView>
        {
            data.map(function(element, i) {
                return (
                    <View key={i} style={styles.table_entries_view}>
                        <View style={styles.table_header_id}>
                            <Text style={styles.table_entries_txt}>{element.id}</Text>
                        </View>
                        <View style={styles.table_header_gen}>
                            <Text style={styles.table_entries_txt}>{element.player}</Text>
                        </View>
                        <View style={styles.table_header_gen}>
                            <Text style={styles.table_entries_txt}>{element.yob}</Text>
                        </View>
                        <View style={styles.table_header_gen}>
                            <Text style={styles.table_entries_txt}>{element.position}</Text>
                        </View>
                        <View style={styles.table_header_gen}>
                            <Text style={styles.table_entries_txt}>{element.side}</Text>
                        </View>
                        <View style={styles.table_header_gen}>
                            <Text style={styles.table_entries_txt}>{element.games}</Text>
                        </View>
                        <View style={styles.table_entries_action}>
                            <TouchableOpacity>
                                <Icon2 name="edit" style={styles.header_icon} size={20} color="#4092ff" />
                            </TouchableOpacity>
                        </View>
                    </View>
                );
            })
        }
        </ScrollView>
        </View>
    )
}

export {Players};

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
    header_sub_add:{
        flexDirection:'row',justifyContent:'center',alignItems:'center',backgroundColor:'white',width:'50%',borderRadius:10
    },
    header_icon:{
        margin:5
    },
    header_sub_view2:{
        flexDirection:'row',justifyContent:'space-around',width:'20%',height:70,alignItems:'center'
    },
    head_tile:{
        justifyContent:'center',alignItems:'center'
    },
    head_tile_img_container:{
        height:35,width:35,backgroundColor:'white',borderRadius:35/2,justifyContent:'center',alignItems:'center'
    },
    head_img:{
        height:30,width:30,resizeMode:'contain'
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
    table_header_id:{
        width:'5%'
    },
    table_header_gen:{
        width:'15%',
    },
    table_header_action:{
        width:'10%',
    },
    table_header_txt:{
        textAlign:'center',fontSize:18,fontWeight:'bold'
    },
    table_entries_view:{
        backgroundColor:'white',height:50,width:'90%',alignSelf:'center',borderRadius:20,flexDirection:'row',justifyContent:'space-around',alignItems:'center',marginBottom:3
    },
    table_entries_txt:{
        textAlign:'center',fontSize:18,fontWeight:'bold',color:'#889bb3'
    },
    table_entries_action:{
        width:'10%',
        alignItems:'center',
        justifyContent:'center',
    }
})
