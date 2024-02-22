import React, {useState, useEffect, useRef} from 'react';
import {
  View,
  StyleSheet,
  Text,
  Image,
  Pressable,
  ScrollView,
  Dimensions,
  StatusBar,
} from 'react-native';
import Screen from '../../../components/Screen';
// import { Ionicons } from "@expo/vector-icons";
import colors from '../../../assets/style/colors';
import {useNavigation} from '@react-navigation/native';

function UtilCard({text, image, to, navigation}) {
  const windowHeight = Dimensions.get('window').height;

  return (
    <Pressable
      onPress={() => navigation.navigate(to)}
      style={{
        width: '31%',
        height: (windowHeight - 250) / 3.5,
        flexDirection: 'column',
        borderRadius: 10,
        borderColor: colors['gray-300'],
        borderWidth: 1,
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: 10,
        // backgroundColor: colors.primary
      }}>
      <Image style={{height: 60, width: 60}} source={image}></Image>

      {/* <Ionicons name="home" size={24} color="rgb(255, 0, 0)" /> */}
      <Text style={{color: colors['gray-500']}}>{text}</Text>
    </Pressable>
  );
}

const data = [
  {
    image: require('../../../assets/images/workicon-removebg-preview.png'),
    text: 'How it Works',
    to: '',
  },
  {
    image: require('../../../assets/images/my_policy-removebg-preview.png'),
    text: 'My Policy Doc',
    to: 'mypolicy',
  },
  {
    image: require('../../../assets/images/changPremium-removebg-preview.png'),
    text: 'Premium Mode',
  },
  {
    image: require('../../../assets/images/report-removebg-preview.png'),
    text: 'Handset Report',
    to: 'Quality Check',
  },
  {
    image: require('../../../assets/images/profile-removebg-preview.png'),
    text: 'Profile',
    to: 'profileDetail',
  },
  {
    image: require('../../../assets/images/aboutCompany-removebg-preview(1).png'),
    text: 'About Company',
  },
  {
    image: require('../../../assets/images/contact_and_support-removebg-preview.png'),
    text: 'Contact & Support',
    to: 'contact',
  },
  {
    image: require('../../../assets/images/claim-removebg-preview.png'),
    text: 'Track Claim',
  },
  {
    image: require('../../../assets/images/history-removebg-preview.png'),
    text: 'Transaction History',
  },
];

function Home({navigation}) {
  const goToProfileScreen = () => {
    navigation.navigate('myPolicy');
  };
  const images = [
    require('../../../assets/images/ethio_tele.png'),
    require('../../../assets/images/image2.jpeg'),
    require('../../../assets/images/image4.jpeg'),
  ];

  const carouselRef = useRef(null);
  const [currentIndex, setCurrentIndex] = useState(0);

  const screenHeight = Dimensions.get('window').height;
  const screenWidth = Dimensions.get('window').width;

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentIndex(prevIndex =>
        prevIndex === images.length - 1 ? 0 : prevIndex + 1,
      );
    }, 2000);

    return () => {
      clearInterval(timer);
    };
  }, []);

  return (
    <>
      <Screen barStyle="dark-content">
        <View style={{width: '100%', overflow: 'hidden'}}>
          <View style={{overflow: 'hidden', height: 250, flex: 1}}>
            <View>
              <Image
                source={images[currentIndex]}
                style={{width: screenWidth, height: screenHeight * 0.35}}
                resizeMode="cover"
              />
            </View>
            <View
              style={{
                overflow: 'hidden',
                position: 'absolute',
                width: '100%',
                height: '100%',
                backgroundColor: '#0009',
                justifyContent: 'flex-end',
              }}>
              <Text
                style={{
                  color: 'white',
                  fontSize: 40,
                  fontWeight: '800',
                  marginLeft: 14,
                  lineHeight: 38,
                }}>
                Mobile
              </Text>
              <Text
                style={{
                  color: 'white',
                  fontSize: 40,
                  fontWeight: '800',
                  marginLeft: 14,
                  lineHeight: 38,
                }}>
                Insurance
              </Text>
            </View>
          </View>
        </View>
        <View
          style={{
            padding: 5,
            flexWrap: 'wrap',
            flexDirection: 'row',
            justifyContent: 'space-between',
            gap: 10,
            flexGrow: 1,
          }}>
          {data.map(el => {
            return (
              <UtilCard
                to={el.to}
                navigation={navigation}
                key={el.text}
                text={el.text}
                image={el.image}
              />
            );
          })}
        </View>
      </Screen>
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    justifyContent: 'center',
    alignItems: 'center',
    // backgroundColor: "red",
  },
  image: {
    width: 300,
    height: 200,
  },
  textContainer: {
    justifyContent: 'center',
    alignItems: 'center',
    height: '75%',
  },
  text: {
    fontSize: 18,
    fontWeight: 'bold',
  },
});

export default Home;
