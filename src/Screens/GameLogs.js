import React from 'react'
import { StyleSheet, Text, View, TouchableOpacity, ScrollView } from 'react-native';
import Icon from 'react-native-vector-icons/AntDesign';
import Icon2 from 'react-native-vector-icons/FontAwesome';
const data = [
    {id:'1',timestamp:'00:00:000',gameid:'1',periodid:'1',player:'23-koson',lineup:'1',activity:'Long Pass',result:'Ok',location:'6:54'},
    {id:'2',timestamp:'00:00:000',gameid:'1',periodid:'1',player:'23-koson',lineup:'1',activity:'Long Pass',result:'Ok',location:'6:54'},
    {id:'3',timestamp:'00:00:000',gameid:'1',periodid:'1',player:'23-koson',lineup:'1',activity:'Long Pass',result:'Ok',location:'6:54'},
    {id:'4',timestamp:'00:00:000',gameid:'1',periodid:'1',player:'23-koson',lineup:'1',activity:'Long Pass',result:'Ok',location:'6:54'},
    {id:'5',timestamp:'00:00:000',gameid:'1',periodid:'1',player:'23-koson',lineup:'1',activity:'Long Pass',result:'Ok',location:'6:54'},
    {id:'6',timestamp:'00:00:000',gameid:'1',periodid:'1',player:'23-koson',lineup:'1',activity:'Long Pass',result:'Ok',location:'6:54'},
    {id:'7',timestamp:'00:00:000',gameid:'1',periodid:'1',player:'23-koson',lineup:'1',activity:'Long Pass',result:'Ok',location:'6:54'},
    {id:'8',timestamp:'00:00:000',gameid:'1',periodid:'1',player:'23-koson',lineup:'1',activity:'Long Pass',result:'Ok',location:'6:54'},
    {id:'9',timestamp:'00:00:000',gameid:'1',periodid:'1',player:'23-koson',lineup:'1',activity:'Long Pass',result:'Ok',location:'6:54'},
    {id:'10',timestamp:'00:00:000',gameid:'1',periodid:'1',player:'23-koson',lineup:'1',activity:'Long Pass',result:'Ok',location:'6:54'},
    {id:'11',timestamp:'00:00:000',gameid:'1',periodid:'1',player:'23-koson',lineup:'1',activity:'Long Pass',result:'Ok',location:'6:54'},
    {id:'12',timestamp:'00:00:000',gameid:'1',periodid:'1',player:'23-koson',lineup:'1',activity:'Long Pass',result:'Ok',location:'6:54'},
];
const GameLogs = ({navigation}) => {
    return (
        <View style={styles.container}>
        <View style={styles.header_main}>
            <View style={styles.header_sub_view}>
                <TouchableOpacity onPress={()=>navigation.navigate('period')} style={styles.header_button}>
                        <Text style={styles.header_font}>Back</Text>
                </TouchableOpacity>
                <View>
                <Text style={styles.header_font}>Game Logs</Text>
                </View>
            </View>
        </View>
        <View style={styles.table_header_view}>
            <View style={styles.table_header_view_id}>
            <Text style={styles.table_header_txt}>#</Text>
            </View>
            <View style={styles.header_time}>
            <Text style={styles.table_header_txt}>Time Stamp</Text>
            </View>
            <View style={styles.table_header_view_gen}>
            <Text style={styles.table_header_txt}>GameID</Text>
            </View>
            <View style={styles.table_header_view_gen}>
            <Text style={styles.table_header_txt}>Period</Text>
            </View>
            <View style={styles.table_header_view_gen}>
            <Text style={styles.table_header_txt}>Player</Text>
            </View>
            <View style={styles.table_header_view_gen}>
            <Text style={styles.table_header_txt}>Line-Up</Text>
            </View>
            <View style={styles.table_header_view_gen}>
            <Text style={styles.table_header_txt}>Activity</Text>
            </View>
            <View style={styles.table_header_view_gen}>
            <Text style={styles.table_header_txt}>Result</Text>
            </View>
            <View style={styles.table_header_view_gen}>
            <Text style={styles.table_header_txt}>Location</Text>
            </View>
            <View style={styles.table_header_view_gen}>
            <Text style={styles.table_header_txt}>Actions</Text>
            </View>
        </View>
        <ScrollView>
        {
            data.map(function(element, i) {
                return (
                    <View key={i} style={styles.table_entries_view}>
                    <View style={styles.table_header_view_id}>
                    <Text style={styles.table_entries_txt}>{element.id}</Text>
                    </View>
                    <View style={styles.header_time}>
                    <Text style={styles.table_entries_txt}>{element.timestamp}</Text>
                    </View>
                    <View style={styles.table_header_view_gen}>
                    <Text style={styles.table_entries_txt}>{element.gameid}</Text>
                    </View>
                    <View style={styles.table_header_view_gen}>
                    <Text style={styles.table_entries_txt}>{element.periodid}</Text>
                    </View>
                    <View style={styles.table_header_view_gen}>
                    <Text style={styles.table_entries_txt}>{element.player}</Text>
                    </View>
                    <View style={styles.table_header_view_gen}>
                    <Text style={styles.table_entries_txt}>{element.lineup}</Text>
                    </View>
                    <View style={styles.table_header_view_gen}>
                    <Text style={styles.table_entries_txt}>{element.activity}</Text>
                    </View>
                    <View style={styles.table_header_view_gen}>
                    <Text style={styles.table_entries_txt}>{element.result}</Text>
                    </View>
                    <View style={styles.table_header_view_gen}>
                    <Text style={styles.table_entries_txt}>{element.location}</Text>
                    </View>
                    <View style={styles.table_action_view}>
                        <TouchableOpacity>
                        <Icon2 name="edit" style={styles.table_icon} size={20} color="#4092ff" />
                        </TouchableOpacity>
                        <TouchableOpacity>
                        <Icon name="delete" style={styles.table_icon} size={20} color="#4092ff" />
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

export {GameLogs};

const styles = StyleSheet.create({
    container:{
        flex:1,justifyContent:'flex-start',backgroundColor:'#eff3f7',
    },
    header_main:{
        height:70,
        width:'100%',
        backgroundColor:'#1479ff'
    },
    header_sub_view:{
        flexDirection:'row',
        justifyContent:'space-around',width:'20%',height:70,alignItems:'center'
    },
    header_button:{
        backgroundColor:'#59a0ff',padding:10,borderRadius:10
    },
    header_font:{
        color:'white',fontWeight:'bold'
    },
    table_header_view:{
        backgroundColor:'#eef5fe',
        height:50,
        width:'90%',
        alignSelf:'center',
        marginBottom:30,
        borderRadius:20,
        flexDirection:'row',
        justifyContent:'space-around',
        alignItems:'center'
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
        backgroundColor:'white',
        height:50,
        width:'100%',
        alignSelf:'center',
        borderRadius:20,
        flexDirection:'row',
        justifyContent:'space-around',
        alignItems:'center',
        marginBottom:2
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
})
