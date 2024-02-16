import colors from '../assets/style/colors'
import React, { useEffect, useRef, useState } from 'react'
import { View, StyleSheet, Animated, Text, Easing, SafeAreaView, ScrollView, useWindowDimensions, ImageBackground, Pressable } from 'react-native'
import { getId } from '../utils/utils'

const images = new Array(6).fill(
  'https://images.unsplash.com/photo-1556740749-887f6717d7e4'
)

export default function Slider({ pages, onPress = f => f }) {
  const [last, setLast] = useState(false)
  const scrollX = useRef(new Animated.Value(0)).current
  const scrollViewRef = useRef(null)

  const {width: windowWidth} = useWindowDimensions()

  const scrollToNextPage = () => {
    if (scrollViewRef.current) {
      const nextPageIndex = Math.floor(scrollX._value / windowWidth) + 1
      const offsetX = nextPageIndex * windowWidth
      scrollViewRef.current.scrollTo({ x: offsetX, animated: true })
    }
  }

  useEffect(() => {
    const scrollListener = scrollX.addListener(({ value }) => {
      // Value change listener
      if(windowWidth * (pages.length - 1) == value) {
        setLast(true)
      } else {
        setLast(false)
      }
      // Perform any actions or updates based on the scroll value change
    });

    // Cleanup the listener when the component is unmounted
    return () => {
      scrollX.removeListener(scrollListener);
    };
  })

  return (
    <>
      <SafeAreaView style={styles.container}>
        <View style={styles.scrollContainer}>
          <ScrollView
            ref={scrollViewRef}
            horizontal={true}
            pagingEnabled={true}
            showsHorizontalScrollIndicator={false}
            onScroll={Animated.event([
              {
                nativeEvent: {
                  contentOffset: {
                    x: scrollX
                  }
                }
              }
            ], {
              useNativeDriver: false
            })}
            scrollEventThrottle={1}
          >
            {
              pages.map((Page, imageIndex) => {
                const id = getId.next().value
                return <Page key={id} />
              })
            }
          </ScrollView>
          <View style={styles.indicatorContainer}>
            {
              pages.map((image, imageIndes) => {
                const id = getId.next().value
                const width = scrollX.interpolate({
                  inputRange: [
                    windowWidth * (imageIndes - 1),
                    windowWidth * imageIndes,
                    windowWidth * (imageIndes + 1),
                  ],
                  outputRange: [8, 18, 8],
                  extrapolate: 'clamp'
                })

                return (
                  <Animated.View
                    key={id}
                    style={[styles.normalDot, {width}]}
                  ></Animated.View>
                )
              })
            }
          </View>
        </View>
      </SafeAreaView>
      {
        !last && <View style={styles.btn}>
          <Pressable style={{flex: 1}} onPress={scrollToNextPage}>
            <Text style={{paddingHorizontal: 20, textAlign: 'center', width: '100%', borderWidth: 1, borderColor: colors.primary, paddingVertical: 10, color: 'white', backgroundColor: colors.primary, borderRadius: 8}}>
              Next
            </Text>
          </Pressable>
        </View>
      }
      {
        last && <View style={styles.btn}>
          <Pressable style={{flex: 1, justifyContent: 'center', height: 60, alignItems: 'center'}} onPress={onPress}>
            <Text style={{fontSize: 20, fontWeight: '500', paddingHorizontal: 20, paddingVertical: 15, textAlign: 'center', width: '80%', borderWidth: 1, borderColor: colors.primary, height: '100%', color: 'white', backgroundColor: colors.primary, borderRadius: 30}}>
              Get started
            </Text>
          </Pressable>
        </View>
      }
    </>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    width: '100%',
    alignItems: 'center',
    justifyContent: 'center'
  },
  scrollContainer: {
    flex: 1,
    width: "100%",
    alignItems: 'center',
    justifyContent: 'center'
  },
  card: {
    flex: 1,
    marginVertical: 4,
    marginHorizontal: 16,
    borderRadius: 5,
    overflow: 'hidden',
    alignItems: 'center',
    justifyContent: 'center'
  },
  textContainer: {
    backgroundColor: 'rgba(0,0,0,0.7)',
    paddingHorizontal: 24,
    paddingVertical: 8,
    borderRadius: 5
  },
  infoText: {
    color: 'white',
    fontSize: 16,
    fontWeight: 'bold'
  },
  indicatorContainer: {
    flexDirection: 'row',
    alignSelf: 'center',
    justifyContent: 'center'
  },
  normalDot: {
    height: 8,
    width: 8,
    borderRadius: 8,
    backgroundColor: '#0009',
    marginHorizontal: 4
  },
  btn: {
    position: 'absolute',
    bottom: 50,
    height: 60,
    width: '100%',
    flex: 1,
    gap: 5,
    paddingHorizontal: 15,
    flexDirection: 'row',
    justifyContent: 'flex-end',
    alignItems: 'center',
    zIndex: 10
  }
})