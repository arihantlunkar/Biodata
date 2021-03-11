import React, { useState } from 'react';
import { SafeAreaView, ScrollView, StyleSheet, StatusBar, Text, View } from 'react-native';
import { SearchBar } from 'react-native-elements';
import { FAB } from 'react-native-paper';
import Card from './Card'
import { MenuProvider } from 'react-native-popup-menu';

const App = () => {
  const originalData = [
    {
      imageUrl: 'https://upload.wikimedia.org/wikipedia/commons/thumb/a/ac/Irrfan_Khan_May_2015.jpg/440px-Irrfan_Khan_May_2015.jpg',
      isFav: false,
      text1: 'Arihant Lunkar',
      text2: '27 yrs, 5\' 6"',
      text3: 'B.Tech in Computer Science & Engineering',
      text4: 'Senior Software Developer',
      text5: 'Cisco Systems',
      text6: 'Bengaluru, India',
      color: '#fbbc05',
      onImgClickCallback: function () { console.log('Pressed Image ' + originalData[0].text1); },
      onFavClickCallback: function () { originalData[0].isFav = !originalData[0].isFav; console.log('IsFav : ' + originalData[0].isFav); },
      onBiodataDownloadClickCallback: function () { console.log('Pressed Download' + originalData[0].text1); },
    },
    {
      imageUrl: 'https://m.media-amazon.com/images/M/MV5BZDk1ZmU0NGYtMzQ2Yi00N2NjLTkyNWEtZWE2NTU4NTJiZGUzXkEyXkFqcGdeQXVyMTExNDQ2MTI@._V1_UY1200_CR107,0,630,1200_AL_.jpg',
      isFav: true,
      text1: 'Vivek Lunkar',
      text2: '29 yrs, 5\' 7"',
      text3: 'B.E in Computer Science & Engineering',
      text4: 'Senior UI Developer',
      text5: 'C.H Robinson',
      text6: 'Mumbai, India',
      color: '#fbbc05',
      onImgClickCallback: function () { console.log('Pressed Image ' + originalData[1].text1); },
      onFavClickCallback: function () { originalData[1].isFav = !originalData[1].isFav; console.log('IsFav : ' + originalData[1].isFav); },
      onBiodataDownloadClickCallback: function () { console.log('Pressed Download' + originalData[1].text1); },
    },
    {
      imageUrl: 'https://st1.bollywoodlife.com/wp-content/uploads/2020/09/Deepika-Padukone-trolled.jpg',
      isFav: false,
      text1: 'Jeannie Lunkar',
      text2: '24 yrs, 5\' 0"',
      text3: 'B.E in Civil Engineering',
      text4: 'Assitant Manager',
      text5: 'HDFC Ltd.',
      text6: 'Mumbai, India',
      color: '#4285f4',
      onImgClickCallback: function () { console.log('Pressed Image ' + originalData[2].text1); },
      onFavClickCallback: function () { originalData[2].isFav = !originalData[2].isFav; console.log('IsFav : ' + originalData[2].isFav); },
      onBiodataDownloadClickCallback: function () { console.log('Pressed Download' + originalData[2].text1); },
    },
    {
      imageUrl: 'https://images.hindustantimes.com/img/2021/02/11/550x309/130875430_3808729922512052_1958100998535495637_n_1613035038099_1613035051625.jpg',
      isFav: false,
      text1: 'Usha Lunkar',
      text2: '49 yrs, 5\' 1"',
      text3: 'House Wife',
      text4: '',
      text5: '',
      text6: 'Mumbai, India',
      color: '#fbbc05',
      onImgClickCallback: function () { console.log('Pressed Image ' + originalData[3].text1); },
      onFavClickCallback: function () { originalData[3].isFav = !originalData[3].isFav; console.log('IsFav : ' + originalData[3].isFav); },
      onBiodataDownloadClickCallback: function () { console.log('Pressed Download' + originalData[3].text1); },
    },
    {
      imageUrl: 'https://images.hindustantimes.com/rf/image_size_630x354/HT/p2/2020/10/05/Pictures/_04663caa-0710-11eb-adc0-f7cc04e39ce3.jpg',
      isFav: true,
      text1: 'Amar Lunkar',
      text2: '58 yrs, 5\' 6"',
      text3: 'B.Com',
      text4: 'Digital Marketing Head',
      text5: 'Chemtronics India',
      text6: 'Mumbai, India',
      color: '#4285f4',
      onImgClickCallback: function () { console.log('Pressed Image ' + originalData[4].text1); },
      onFavClickCallback: function () { originalData[4].isFav = !originalData[4].isFav; console.log('IsFav : ' + originalData[4].isFav); },
      onBiodataDownloadClickCallback: function () { console.log('Pressed Download' + originalData[4].text1); },
    },
  ];
  const [searchQuery, setSearchQuery] = useState('');
  const [showLoading, setShowLoading] = useState(false);
  const [data, setData] = useState(originalData);

  const onChangeSearch = query => {
    setShowLoading(true);
    setSearchQuery(query);
    let queryToLowerCase = query.toLowerCase();
    setData(originalData.filter(element =>
      element.text1.toLowerCase().includes(queryToLowerCase) ||
      element.text2.toLowerCase().includes(queryToLowerCase) ||
      element.text3.toLowerCase().includes(queryToLowerCase) ||
      element.text4.toLowerCase().includes(queryToLowerCase) ||
      element.text5.toLowerCase().includes(queryToLowerCase) ||
      element.text6.toLowerCase().includes(queryToLowerCase)));
    setShowLoading(false);
  }

  return (
    <SafeAreaView style={styles.container}>
      <MenuProvider>
        <StatusBar
          animated={true}
          backgroundColor="#000" />

        <SearchBar
          leftIconContainerStyle={{ backgroundColor: '#fff' }}
          rightIconContainerStyle={{ backgroundColor: '#fff' }}
          inputContainerStyle={{ backgroundColor: '#fff' }}
          containerStyle={{
            backgroundColor: '#fff',
            borderBottomColor: 'transparent',
            borderTopColor: 'transparent'
          }}
          inputStyle={{ color: '#000' }}
          searchIcon={{ color: '#000' }}
          placeholderTextColor={'#000'}
          clearIcon={{ color: '#000' }}
          placeholder="Search"
          onChangeText={onChangeSearch}
          value={searchQuery}
          showLoading={showLoading}
        />
        {null == data || 0 == data.length ? <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}><Text style={{ color: '#fff' }}>No Results Found.</Text></View> : (
          <ScrollView>
            {
              data.map((n, i) => (
                <Card key={i} data={n}></Card>
              ))
            }
          </ScrollView>
        )}
        <FAB
          style={styles.fab}
          small={false}
          icon="filter"
          color={'#fff'}
          onPress={() => console.log('Pressed')}
        />
      </MenuProvider>
    </SafeAreaView>
  );
};

export default App;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#000',
  },
  fab: {
    position: 'absolute',
    margin: 16,
    right: 0,
    bottom: 0,
    backgroundColor: '#00af91'
  },
});
