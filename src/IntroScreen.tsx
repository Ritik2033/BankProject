import React, { useState, useRef, useEffect } from 'react';
import { View, FlatList, StyleSheet, Text, TouchableOpacity, useColorScheme } from 'react-native';
import DotIndicator from 'react-native-indicators/src/components/dot-indicator';
import IntoOne from '../components/IntoOne';
import IntoTwo from '../components/IntoTwo';

const IntroScreen = ({navigation}) => {
  const data = [
    { id: '1', component: <IntoOne /> },
    { id: '2', component: <IntoTwo /> },
  ];

  const [activeIndex, setActiveIndex] = useState(0);
  const flatListRef = useRef(null);
  const isDarkMode = useColorScheme() === 'dark';

  const switchInterval = 5000; // Switch every 5 seconds
  const componentSwitchTimer = useRef(null);

  useEffect(() => {
    // Start the interval for switching components
    componentSwitchTimer.current = setInterval(() => {
      setActiveIndex((prevIndex) => (prevIndex === 0 ? 1 : 0));
      // Scroll to the newly active component
      flatListRef.current?.scrollToIndex({ index: activeIndex, animated: true });
    }, switchInterval);

    // Clear the interval when the component is unmounted
    return () => {
      clearInterval(componentSwitchTimer.current);
    };
  }, [activeIndex]);

  const renderItem = ({ item }) => (
    <View style={{ width: 380 }}>
      {item.component}
    </View>
  );

  const renderIndicator = () => (
    <DotIndicator
      color={isDarkMode ? 'white' : 'black'}
      count={data.length}
      size={8}
      style={{ marginTop: 10 }}
      selectedIndex={activeIndex}
    />
  );

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <View>
          <Text style={styles.title}>Welcome to PayPal</Text>
        </View>
        <View>
          <View></View>
          <View>
            <TouchableOpacity style={[styles.button, styles.skipbutton]}>
              <Text style={styles.buttontext}>Skip</Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>

      <View>
        <FlatList
          ref={flatListRef}
          data={data}
          keyExtractor={(item) => item.id}
          horizontal
          renderItem={renderItem}
          onScroll={(event) => {
            const offsetX = event.nativeEvent.contentOffset?.x || 0;
            const index = Math.floor(offsetX / 380);
            setActiveIndex(index);
          }}
          onMomentumScrollEnd={() => {
            const index = Math.round(flatListRef.current?.contentOffset?.x / 380) || 0;
            setActiveIndex(index);
          }}
        />
        {renderIndicator()}
      </View>

      <View style={styles.footer}>
        <View>
          <TouchableOpacity style={[styles.button, styles.logbutton]} onPress={()=>navigation.navigate("Login")}>
            <Text style={{ fontSize: 20, color: "#ffffff", fontWeight: "700" }}>Log in</Text>
          </TouchableOpacity>
        </View>
        <View>
          <TouchableOpacity style={[styles.button, styles.cretebutton]}  onPress={()=>navigation.navigate("Register")}>
            <Text style={{ fontSize: 20, color: "#1f43ce", fontWeight: "700" }}>Create an account</Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
  },
  title: {
    fontSize: 18,
    fontWeight: "600",
    color: "#686A6C",
  },
  button: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    borderRadius: 10,
    paddingHorizontal: 12,
    paddingVertical: 5,
  },
  buttontext: {
    fontSize: 17,
    color: "#000000",
    fontWeight: "bold",
  },
  header: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
  },
  skipbutton: {
    backgroundColor: "#dcdcdc",
  },
  cretebutton: {
    height: 50,
    backgroundColor: "#dcdcdc",
    marginVertical: 10,
  },
  logbutton: {
    height: 50,
    backgroundColor: "#1f43ce",
    marginVertical: 10,
  },
  footer: {
    flex: 1,
    justifyContent: "flex-end",
  },
});

export default IntroScreen;
