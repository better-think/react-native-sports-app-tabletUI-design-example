import React from 'react'
import { StyleSheet, Text, View, TouchableOpacity, ScrollView, Dimensions, Image ,
    StatusBar
} from 'react-native';
import Icon from 'react-native-vector-icons/Entypo';

const STATUSBAR_HEIGHT = StatusBar.currentHeight > 0 ? StatusBar.currentHeight : 0;
const APP_HEIGHT = Dimensions.get('window').height - STATUSBAR_HEIGHT - 75


const Period = ({navigation}) => {
    return (
    <View style={styles.container}>
        <View style={styles.header_main}>
            <View style={styles.header_sub_view}>
                <TouchableOpacity onPress={()=>navigation.navigate('selectgame')} style={styles.header_button}>
                    <Text style={styles.header_font}>Back</Text>
                </TouchableOpacity>
                <View style={styles.header_sub_one}>
                    <Text style={styles.header_sub_one_left}>Period</Text>
                    <View style={styles.header_sub_one_right}>
                        <View style={styles.header_sub_one_right_active}>
                            <Text style={styles.header_sub_one_right_active_txt}>1</Text>
                        </View>
                        <View style={styles.header_sub_one_right_inactive}>
                            <Text style={styles.header_sub_one_right_inactive_txt}>2</Text>
                        </View>
                        <View style={styles.header_sub_one_right_inactive}>
                            <Text style={styles.header_sub_one_right_inactive_txt}>3</Text>
                        </View>
                        <View style={styles.header_sub_one_right_inactive}>
                            <Text style={styles.header_sub_one_right_inactive_txt}>4</Text>
                        </View>
                    </View>
                </View>
            </View>
            <View style={styles.header_sub_two}>
                <TouchableOpacity style={styles.header_sub_two_btn}>
                    <Text style={styles.header_sub_two_btn_txt}>My Team</Text>
                </TouchableOpacity>
            </View>
            <View style={styles.header_sub_three}>
                <View>
                    <Text style={styles.header_sub_three_txt}>GOAL</Text>
                </View>
                <View>
                    <Text style={styles.header_sub_three_txt}>GOAL</Text>
                </View>
                <View>
                    <Text style={styles.header_sub_three_txt}>OPPONENT</Text>
                </View>
            </View>
            <View style={styles.header_sub_four}>
                <TouchableOpacity onPress={()=>navigation.navigate('gamelogs')} style={styles.header_sub_four_btn}>
                    <Text style={styles.header_sub_four_btn_txt}>Log</Text>
                </TouchableOpacity>
            </View>
        </View>
        {/* Starts Major Here */}
        <View style={styles.major_view}>
            <View style={styles.major_sub1}>
                <ScrollView>
                    <View style={styles.major_sub1_one}>
                        <Text style={styles.major_sub1_one_title}>1. LineUp & Players</Text>
                        <View style={styles.major_sub1_one_choices}>
                            <View style={styles.major_sub1_one_choice_active}>
                                <Text style={styles.major_sub1_one_choice_active_txt}>1</Text>
                            </View>
                            <View style={styles.major_sub1_one_choice_inactive}>
                                <Text style={styles.major_sub1_one_choice_inactive_txt}>2</Text>
                            </View>
                            <View style={styles.major_sub1_one_choice_inactive}>
                                <Text style={styles.major_sub1_one_choice_inactive_txt}>3</Text>
                            </View>
                            <View style={styles.major_sub1_one_choice_inactive}>
                                <Text style={styles.major_sub1_one_choice_inactive_txt}>4</Text>
                            </View>
                        </View>
                        <TouchableOpacity onPress={()=>navigation.navigate('updatelineup')} style={styles.major_sub1_one_btn}>
                            <Text style={styles.major_sub1_one_btn_txt}>Edit LineUp</Text>
                        </TouchableOpacity>
                    </View>
                    <View style={styles.major_sub1_two}>
                        <View style={styles.major_sub1_two_inactive}>
                            <Text>31, Fredman</Text>
                        </View>
                        <View style={styles.major_sub1_two_inactive}>
                            <Text>31, Fredman</Text>
                        </View>
                        <View style={styles.major_sub1_two_active}>
                            <Text>31, Fredman</Text>
                        </View>
                        <View style={styles.major_sub1_two_inactive}>
                            <Text>31, Fredman</Text>
                        </View>
                        <View style={styles.major_sub1_two_inactive}>
                            <Text>31, Fredman</Text>
                        </View>
                        <View style={styles.major_sub1_two_inactive}>
                            <Text>31, Fredman</Text>
                        </View>
                    </View>
                    <View>
                        <View style={styles.major_sub1_three}>
                            <Text>Time</Text>
                            <Text>xx</Text>
                        </View>
                        <View style={styles.major_sub1_three}>
                            <Text>GameID</Text>
                            <Text>xx</Text>
                        </View>
                        <View style={styles.major_sub1_three}>
                            <Text>Period</Text>
                            <Text>xx</Text>
                        </View>
                        <View style={styles.major_sub1_three}>
                            <Text>Player</Text>
                            <Text>xx</Text>
                        </View>
                        <View style={styles.major_sub1_three}>
                            <Text>LineUp</Text>
                            <Text>xx</Text>
                        </View>
                        <View style={styles.major_sub1_three}>
                            <Text>Location</Text>
                            <Text>xx</Text>
                        </View>
                        <View style={styles.major_sub1_three}>
                            <Text>Activity</Text>
                            <Text>xx</Text>
                        </View>
                    </View>
                </ScrollView>
            </View>
            <View style={styles.major_sub2}>
                <ScrollView>
                    <View style={styles.major_sub2_title}>
                        <View style={styles.major_sub2_title_view}>
                            <Text style={styles.major_sub2_title_txt}>2. Location Of Line</Text>
                        </View>
                    </View>
                    <View style={styles.major_sub2_two}>
                        <TouchableOpacity style={styles.major_sub2_two_btn}>
                            <Text style={styles.major_sub2_two_txt}>Visitor</Text>
                        </TouchableOpacity>
                        <Image style={styles.major_sub2_two_img} source={require('../Images/ground.png')} />
                        <TouchableOpacity onPress={()=>navigation.navigate('selectgame')} style={styles.major_sub2_two_btn}>
                            <Text style={styles.major_sub2_two_txt}>Home</Text>
                        </TouchableOpacity>
                    </View>
                </ScrollView>
            </View>
            <View style={styles.major_sub3}>
                <ScrollView>
                <View style={styles.major_sub3_one}>
                        <TouchableOpacity style={styles.major_sub2_title_view}>
                            <Text style={styles.major_sub2_title_txt}>3. Action</Text>
                        </TouchableOpacity>
                    </View>
                    <View style={styles.major_sub3_two}>
                        <View style={styles.major_sub3_two_active}>
                        <Image style={styles.major_sub3_two_img} source={require('../players/one.png')} />
                        <Text style={styles.major_sub3_two_txt}>Long Pass</Text>
                        </View>
                        <View style={styles.major_sub3_two_inactive}>
                        <Image style={styles.major_sub3_two_img} source={require('../players/one.png')} />
                        <Text style={styles.major_sub3_two_txt}>Shortg Pass</Text>
                        </View>
                        <View style={styles.major_sub3_two_inactive}>
                        <Image style={styles.major_sub3_two_img} source={require('../players/one.png')} />
                        <Text style={styles.major_sub3_two_txt}>Dual</Text>
                        </View>
                        <View style={styles.major_sub3_two_inactive}>
                        <Image style={styles.major_sub3_two_img} source={require('../players/one.png')} />
                        <Text style={styles.major_sub3_two_txt}>Stop Ball</Text>
                        </View>
                        <View style={styles.major_sub3_two_inactive}>
                        <Image style={styles.major_sub3_two_img} source={require('../players/one.png')} />
                        <Text style={styles.major_sub3_two_txt}>Foke</Text>
                        </View>
                        <View style={styles.major_sub3_two_inactive}>
                        <Image style={styles.major_sub3_two_img} source={require('../players/one.png')} />
                        <Text style={styles.major_sub3_two_txt}>Long Run</Text>
                        </View>
                        <View style={styles.major_sub3_two_inactive}>
                        <Image style={styles.major_sub3_two_img} source={require('../players/one.png')} />
                        <Text style={styles.major_sub3_two_txt}>Short Run</Text>
                        </View>
                        <View style={styles.major_sub3_two_inactive}>
                        <Image style={styles.major_sub3_two_img} source={require('../players/one.png')} />
                        <Text style={styles.major_sub3_two_txt}>Steal</Text>
                        </View>
                        <View style={styles.major_sub3_two_inactive}>
                        <Image style={styles.major_sub3_two_img} source={require('../players/one.png')} />
                        <Text style={styles.major_sub3_two_txt}>Block</Text>
                        </View>
                    </View>
                    <View style={styles.major_sub3_three}>
                        <View style={styles.major_sub3_three_left}>
                            <Text numberOfLines={2} style={styles.major_sub3_three_left_txt}>Own Team</Text>
                        </View>
                        <View style={styles.major_sub3_three_right}>
                        <View style={styles.major_sub3_three_active}>
                        <Image style={styles.major_sub3_two_img} source={require('../players/two.png')} />
                        <Text style={styles.major_sub3_two_txt}>Slap Shot</Text>
                        </View>
                        <View style={styles.major_sub3_three_inactive}>
                        <Image style={styles.major_sub3_two_img} source={require('../players/two.png')} />
                        <Text style={styles.major_sub3_two_txt}>Sweeper</Text>
                        </View>
                        <View style={styles.major_sub3_three_inactive}>
                        <Image style={styles.major_sub3_two_img} source={require('../players/two.png')} />
                        <Text style={{textAlign:'center'}}>Insweeper</Text>
                        </View>
                        <View style={styles.major_sub3_three_inactive}>
                        <Image style={styles.major_sub3_two_img} source={require('../players/two.png')} />
                        <Text style={styles.major_sub3_two_txt}>Backhand</Text>
                        </View>
                        <View style={styles.major_sub3_three_inactive}>
                        <Image style={styles.major_sub3_two_img} source={require('../players/two.png')} />
                        <Text style={styles.major_sub3_two_txt}>Steering</Text>
                        </View>
                        <View style={styles.major_sub3_three_inactive}>
                        <Image style={styles.major_sub3_two_img} source={require('../players/two.png')} />
                        <Text style={styles.major_sub3_two_txt}>Wristshot</Text>
                        </View> 
                        </View>
                    </View>
                    <View style={styles.major_sub3_four}>
                        <View style={styles.major_sub3_three_left}>
                            <Text numberOfLines={2} style={styles.major_sub3_three_left_txt}>Opponent Team</Text>
                        </View>
                        <View style={styles.major_sub3_four_right}>
                        <View style={styles.major_sub3_three_active}>
                        <Image style={styles.major_sub3_two_img} source={require('../players/three.png')} />
                        <Text style={styles.major_sub3_two_txt}>Slap Shot</Text>
                        </View>
                        <View style={styles.major_sub3_three_inactive}>
                        <Image style={styles.major_sub3_two_img} source={require('../players/three.png')} />
                        <Text style={styles.major_sub3_two_txt}>Sweeper</Text>
                        </View>
                        <View style={styles.major_sub3_three_inactive}>
                        <Image style={styles.major_sub3_two_img} source={require('../players/three.png')} />
                        <Text style={styles.major_sub3_two_txt}>Insweeper</Text>
                        </View>
                        <View style={styles.major_sub3_three_inactive}>
                        <Image style={styles.major_sub3_two_img} source={require('../players/three.png')} />
                        <Text style={styles.major_sub3_two_txt}>Backhand</Text>
                        </View>
                        <View style={styles.major_sub3_three_inactive}>
                        <Image style={styles.major_sub3_two_img} source={require('../players/three.png')} />
                        <Text style={styles.major_sub3_two_txt}>Steering</Text>
                        </View>
                        <View style={styles.major_sub3_three_inactive}>
                        <Image style={styles.major_sub3_two_img} source={require('../players/three.png')} />
                        <Text style={styles.major_sub3_two_txt}>Wristshot</Text>
                        </View>
                        </View>
                    </View>
                </ScrollView>
            </View>
            <View style={styles.major_sub4}>
                <ScrollView>
                    <View style={styles.major_sub4_one}>
                        <View style={styles.major_sub4_one_title}>
                            <Text style={styles.major_sub4_one_title_txt}>4. Result</Text>
                        </View>
                    </View>
                    <View style={styles.major_sub4_two}>
                        <TouchableOpacity style={styles.major_sub4_two_view}>
                        <Icon name="emoji-happy" size={25} color="white" />
                        </TouchableOpacity>
                        <TouchableOpacity style={styles.major_sub4_two_view2}>
                        <Icon name="emoji-sad" size={25} color="white" />
                        </TouchableOpacity>
                    </View>

                    <View style={styles.major_sub4_three}>
                        <View style={styles.major_sub4_three_active}>
                            <Image style={styles.major_sub4_three_img} source={require('../players/one.png')} />
                            <Text style={styles.major_sub4_three_txt}>Goal</Text>
                        </View>
                        <View style={styles.major_sub4_three_inactive}>
                            <Image style={styles.major_sub4_three_img} source={require('../players/one.png')} />
                            <Text style={styles.major_sub4_three_txt}>Saved</Text>
                        </View>
                        <View style={styles.major_sub4_three_inactive}>
                            <Image style={styles.major_sub4_three_img} source={require('../players/one.png')} />
                            <Text style={styles.major_sub4_three_txt}>Missed</Text>
                        </View>
                        <View style={styles.major_sub4_three_inactive}>
                            <Image style={styles.major_sub4_three_img} source={require('../players/one.png')} />
                            <Text style={styles.major_sub4_three_txt}>Blocked</Text>
                        </View>
                    </View>

                    <View style={styles.major_sub4_four}>
                        <View style={styles.major_sub4_three_active}>
                            <Image style={styles.major_sub4_three_img} source={require('../players/two.png')} />
                            <Text style={styles.major_sub4_three_txt}>Goal</Text>
                        </View>
                        <View style={styles.major_sub4_three_inactive}>
                            <Image style={styles.major_sub4_three_img} source={require('../players/two.png')} />
                            <Text style={styles.major_sub4_three_txt}>Saved</Text>
                        </View>
                        <View style={styles.major_sub4_three_inactive}>
                            <Image style={styles.major_sub4_three_img} source={require('../players/two.png')} />
                            <Text style={styles.major_sub4_three_txt}>Missed</Text>
                        </View>
                        <View style={styles.major_sub4_three_inactive}>
                            <Image style={styles.major_sub4_three_img} source={require('../players/two.png')} />
                            <Text style={styles.major_sub4_three_txt}>Blocked</Text>
                        </View>
                    </View>
                </ScrollView>
            </View>
        </View>
    </View>
    )
}

export {Period};

const styles = StyleSheet.create({
    container:{
        flex:1,justifyContent:'flex-start',backgroundColor:'#eff3f7',
    },
    header_main:{
        height: 70,
        width:'100%',
        backgroundColor:'#1479ff',
        flexDirection:'row',
        justifyContent:'space-around'
    },
    header_sub_view:{
        flexDirection:'row',
        justifyContent:'space-around',
        width:'30%',
        height:70,
        alignItems:'center',
    },
    header_button:{
        backgroundColor:'#59a0ff',padding:10,borderRadius:10
    },
    header_font:{
        color:'white',fontWeight:'bold'
    },
    header_sub_one:{
        flexDirection:'row',width:'75%',justifyContent:'space-around',alignItems:'center'
    },
    header_sub_one_left:{
        fontSize:16,fontWeight:'bold',color:'white',textAlign:'center'
    },
    header_sub_one_right:{
        flexDirection:'row'
    },
    header_sub_one_right_active:{
        height:30,width:30,borderRadius:30/2,backgroundColor:'white',margin:3,justifyContent:'center',alignItems:'center'
    },
    header_sub_one_right_active_txt:{
        color:'#1479ff',fontSize:16,fontWeight:'bold'
    },
    header_sub_one_right_inactive:{
        height:30,width:30,borderRadius:30/2,margin:3,justifyContent:'center',alignItems:'center',borderWidth:1,borderColor:'white'
    },
    header_sub_one_right_inactive_txt:{
        color:'white',fontSize:16,fontWeight:'bold'
    },
    header_sub_two:{
        width:'10%',justifyContent:'center',alignItems:'center'
    },
    header_sub_two_btn:{
        padding:10,borderWidth:2,borderColor:'white',borderRadius:10
    },
    header_sub_two_btn_txt:{
        fontSize:16,fontWeight:'bold',color:'white',textAlign:'center'
    },
    header_sub_three:{
        width:'40%',flexDirection:'row',justifyContent:'space-around',alignItems:'center'
    },
    header_sub_three_txt:{
        fontSize:16,fontWeight:'bold',color:'white',textAlign:'center'
    },
    header_sub_four:{
        width:'10%',justifyContent:'center',alignItems:'center'
    },
    header_sub_four_btn:{
        padding:15,backgroundColor:'white',borderRadius:10
    },
    header_sub_four_btn_txt:{
        fontSize:16,fontWeight:'bold',color:'#1479ff',textAlign:'center'
    },
    major_view:{
        width:'100%',
        flexDirection:'row',
        justifyContent:'space-around'
    },
    major_sub1:{
        width:'20%',
        height: APP_HEIGHT
    },
    major_sub1_one:{
        alignItems:'center',justifyContent:'space-around'
    },
    major_sub1_one_title:{
        fontSize:18,fontWeight:'bold',color:'#193b68',textAlign:'center',margin:5
    },
    major_sub1_one_choices:{
        flexDirection:'row',justifyContent:'space-around',width:'90%',margin:5
    },
    major_sub1_one_choice_active:{
        height:30,width:30,borderRadius:30/2,backgroundColor:'#1479ff',justifyContent:'center',alignItems:'center'
    },
    major_sub1_one_choice_active_txt:{
        color:'white',fontWeight:'bold'
    },
    major_sub1_one_choice_inactive:{
        height:30,width:30,borderRadius:30/2,backgroundColor:'#f3f8ff',justifyContent:'center',alignItems:'center'
    },
    major_sub1_one_choice_inactive_txt:{
        color:'#1479ff',fontWeight:'bold'
    },
    major_sub1_one_btn:{
        width:'50%',backgroundColor:'#eef5fe',padding:10,borderRadius:20,margin:5
    },
    major_sub1_one_btn_txt:{
        textAlign:'center',color:'#1479ff',fontWeight:'bold',fontSize:16
    },
    major_sub1_two:{
        alignItems:'center',justifyContent:'space-around'
    },
    major_sub1_two_active:{
        height:35,width:'90%',backgroundColor:'white',borderRadius:20,margin:5,padding:5,borderWidth:2,borderColor:'#1479ff'
    },
    major_sub1_two_inactive:{
        height:35,width:'90%',backgroundColor:'white',borderRadius:20,margin:5,padding:5,borderWidth:2,borderColor:'#e2e8f1'
    },
    major_sub1_three:{
        width:'80%',flexDirection:'row',justifyContent:'space-between',alignItems:'center',margin:5,alignSelf:'center'
    },
    major_sub2:{
        width:'20%',
        height: APP_HEIGHT
    },
    major_sub2_title:{
        width:'95%',
        justifyContent:'center',
        alignSelf:'center',
        marginTop:10,
    },
    major_sub2_title_view:{
        backgroundColor:'white',borderRadius:20,width:'100%',padding:5
    },
    major_sub2_title_txt:{
        fontSize:18,fontWeight:'bold',color:'#193b68',textAlign:'center'
    },
    major_sub2_two:{
        alignItems:'center',
        backgroundColor:'white',
        width:'90%',
        alignSelf:'center',
        borderRadius:20,
        marginTop:40,
    },
    major_sub2_two_btn:{
        width:'40%',
        borderRadius:20,
        backgroundColor:'#eef5fe',
        alignItems:'center',
        justifyContent:'center',
        margin:15
    },
    major_sub2_two_txt:{
        color:'#1479ff',fontWeight:'bold'
    },
    major_sub2_two_img:{
        height: APP_HEIGHT,
        width:'85%',
        resizeMode: 'contain',
    },
    major_sub3:{
        width:'45%',
        height: APP_HEIGHT
    },
    major_sub3_one:{
        width:'95%',justifyContent:'center',alignSelf:'center',marginTop:10
    },
    major_sub3_two:{
        alignItems:'center',width:'95%',alignSelf:'center',backgroundColor:'white',borderRadius:20,flexDirection:'row',flexWrap:'wrap',justifyContent:'center',marginTop:5
    },
    major_sub3_two_active:{
        width:'16%',height:80,padding:5,backgroundColor:'white',margin:5,borderRadius:10,justifyContent:'center',alignItems:'center',borderWidth:2,borderColor:'#1479ff'
    },
    major_sub3_two_img:{
        height:40,width:'80%',resizeMode:'contain'
    },
    major_sub3_two_txt:{
        textAlign:'center'
    },
    major_sub3_two_inactive:{
        width:'16%',height:80,padding:5,backgroundColor:'white',margin:5,borderRadius:10,justifyContent:'center',alignItems:'center',borderWidth:1,borderColor:'#e2e8f1'
    },
    major_sub3_three:{
        alignItems:'center',width:'95%',alignSelf:'center',backgroundColor:'white',borderRadius:20,flexDirection:'row',justifyContent:'space-between',marginTop:10
    },
    major_sub3_three_left:{
        width:'18%',height:160,justifyContent:'center',alignItems:'center'
    },
    major_sub3_three_left_txt:{
        transform: [{ rotate: "-90deg" }],
        fontSize: 14,
        fontWeight:'bold',
        textAlign:'center',
        width: 100
    },
    major_sub3_three_right:{
        width:'82%',flexDirection:'row',flexWrap:'wrap',justifyContent:'center'
    },
    major_sub3_three_active:{
        width:'20%',height:80,padding:5,backgroundColor:'white',margin:5,borderRadius:10,justifyContent:'center',alignItems:'center',borderWidth:2,borderColor:'#1479ff'
    },
    major_sub3_three_inactive:{
        width:'20%',height:80,padding:5,backgroundColor:'white',margin:5,borderRadius:10,justifyContent:'center',alignItems:'center',borderWidth:1,borderColor:'#e2e8f1'
    },
    major_sub3_four:{
        alignItems:'center',width:'95%',alignSelf:'center',backgroundColor:'white',borderRadius:20,flexDirection:'row',justifyContent:'space-between',marginTop:10
    },
    major_sub3_four_right:{
        width:'82%',
        flexDirection:'row',
        flexWrap:'wrap',
        justifyContent:'center'
    },
    major_sub4:{
        width:'15%',
        height: APP_HEIGHT
    },
    major_sub4_one:{
        width:'95%',justifyContent:'center',alignSelf:'center',margin:10,
    },
    major_sub4_one_title:{
        backgroundColor:'white',borderRadius:20,width:'100%',padding:5,alignSelf:'center'
    },
    major_sub4_one_title_txt:{
        fontSize:18,fontWeight:'bold',color:'#193b68',textAlign:'center'
    },
    major_sub4_two:{
        alignItems:'center',width:'95%',alignSelf:'center',backgroundColor:'white',borderRadius:20
    },
    major_sub4_two_view:{
        padding:15,backgroundColor:'green',margin:5,borderRadius:10
    },
    major_sub4_two_view2:{
        padding:15,backgroundColor:'red',margin:5,borderRadius:10
    },
    major_sub4_three:{
        alignItems:'center',
        width:'95%',
        alignSelf:'center',
        borderRadius: 20,
        margin: 5,
        flexDirection:'row',
        flexWrap:'wrap',
        justifyContent:'center',
        paddingTop: 10,
        paddingBottom: 5,
        backgroundColor:'white',
    },
    major_sub4_three_active:{
        height: 80,
        width: '40%',
        padding: '2%',
        margin: '2%',
        backgroundColor:'white',
        borderRadius: 10,
        alignItems: 'center',
        justifyContent:'center',
        borderWidth: 2,
        borderColor:'#1479ff'
    },
    major_sub4_three_inactive:{
        height:80,
        width: '40%',
        padding: '2%',
        margin: '2%',
        backgroundColor:'white',
        borderRadius:10,
        alignItems:'center',
        justifyContent:'center',
        borderWidth:1,
        borderColor:'#e2e8f1'
    },
    major_sub4_three_img:{
        height:50,
        width:'80%',
        resizeMode:'contain'
    },
    major_sub4_three_txt:{
        width:'100%',
        fontSize:10,
        textAlign:'center'
    },
    major_sub4_four:{
        alignItems:'center',width:'95%',alignSelf:'center',backgroundColor:'white',borderRadius:20,margin:5,flexDirection:'row',flexWrap:'wrap',justifyContent:'center',paddingTop:10,paddingBottom:5
    },

})
