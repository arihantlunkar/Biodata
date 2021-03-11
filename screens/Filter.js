import React, { useState } from 'react';
import { TouchableOpacity } from 'react-native';
import { ScrollView } from 'react-native';
import { SafeAreaView, StyleSheet, View, StatusBar, Text } from 'react-native';
import { Button } from 'react-native-paper';
import CheckBox from 'react-native-check-box'


const App = () => {
  const [filterData, updateFilterData] = useState([
    {
      filterBy: 'Looking For',
      selectedCount: 0,
      values: ['Bride', 'Groom'],
      isChecked: [],
      isPressed: true
    },
    {
      filterBy: 'Place',
      selectedCount: 0,
      values: ['Andaman and Nicobar Islands', 'Andhra Pradesh', 'Arunachal Pradesh', 'Assam', 'Bihar', 'Chandigarh', 'Chhattisgarh', 'Dadra and Nagar Haveli', 'Daman and Diu', 'Delhi', 'Goa', 'Gujarat', 'Haryana', 'Himachal Pradesh', 'Jammu', 'Jharkhand', 'Karnataka', 'Kashmir', 'Kerala', 'Ladakh', 'Lakshadweep', 'Madhya Pradesh', 'Maharashtra', 'Manipur', 'Meghalaya', 'Mizoram', 'Nagaland', 'Odisha', 'Puducherry', 'Punjab', 'Rajasthan', 'Sikkim', 'Tamil Nadu', 'Telangana', 'Tripura', 'Uttarakhand', 'Uttar Pradesh', 'West Bengal'],
      isChecked: [],
      isPressed: false
    },
    {
      filterBy: 'Age',
      selectedCount: 0,
      values: ['18 - 21 yrs', '21 - 25 yrs', '25 - 30 yrs', '30 - 35 yrs', '35 - 40 yrs', '40 - 50 yrs', '50+ yrs'],
      isChecked: [],
      isPressed: false
    },
    {
      filterBy: 'Height',
      selectedCount: 0,
      values: ['< 5 ft', '5 - 5.2 ft', '5.2 - 5.4 ft', '5.4 - 5.6 ft', '5.6 - 5.8 ft', '5.8 - 5.10 ft', '5.10 - 6 ft', '6 ft+'],
      isChecked: [],
      isPressed: false
    },
    {
      filterBy: 'Dosha',
      selectedCount: 0,
      values: ['Manglik', 'Non Manglik', 'Unknown'],
      isChecked: [],
      isPressed: false
    },
    {
      filterBy: 'Marital Status',
      selectedCount: 0,
      values: ['Single', 'Widow', 'Divorcee'],
      isChecked: [],
      isPressed: false
    },
    {
      filterBy: 'Sampradaya',
      selectedCount: 0,
      values: ['Shwetambar', 'Digambar'],
      isChecked: [],
      isPressed: false
    },
    {
      filterBy: 'Education',
      selectedCount: 0,
      values: ['Under Graduate & Below', 'Graduate', 'Post Graduate', 'C.A', 'C.S', 'ICWA', 'Diploma', 'Doctor', 'Engineer', 'MS', 'PhD', 'Lawyer', 'M.B.A', 'M.C.A & Equivalent', 'Other'],
      isChecked: [],
      isPressed: false
    },
    {
      filterBy: 'Profession',
      selectedCount: 0,
      values: ['Software Developer', 'Dentist'],
      isChecked: [],
      isPressed: false
    },
    {
      filterBy: 'Occupation',
      selectedCount: 0,
      values: ['In Service', 'In Business', 'Not Working', 'In Profession'],
      isChecked: [],
      isPressed: false
    },
  ]);

  const themeColor = '#00af91';

  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: '#000' }}>
      <StatusBar
        animated={true}
        backgroundColor="#000" />
      <View style={{ flexDirection: 'column' }}>
        <View style={{ flexDirection: 'row', height: '100%' }}>
          <View style={{ backgroundColor: '#f3f3f3', flex: 1 }}>
            <ScrollView>
              {
                filterData.map((data, index) => (
                  <TouchableOpacity key={index} style={{ flexDirection: 'row', padding: 15, alignItems: 'flex-start', backgroundColor: data.isPressed ? '#fff' : '#f3f3f3' }} onPress={() => {
                    for (let i = 0; i < filterData.length; ++i) {
                      filterData[i].isPressed = (i == index);
                    }
                    updateFilterData([...filterData])
                  }}>
                    <Text style={{ alignItems: 'flex-start', flex: 3 }}>{data.filterBy}</Text>
                    {
                      0 == data.selectedCount ? (null) : (
                        <View style={{ alignItems: 'flex-end', flex: 1 }}>
                          <Text style={{ color: '#00af91' }}>{data.selectedCount}</Text>
                        </View>
                      )
                    }
                  </TouchableOpacity>
                ))
              }
            </ScrollView>
          </View>
          <View style={{ backgroundColor: '#fff', flex: 2, padding: 15 }}>
            <ScrollView>
              {
                filterData.map((data) => {
                  if (null != data && null != data.values && data.isPressed) {
                    return data.values.map((text, index) => (
                      <CheckBox
                        key={index}
                        style={{ paddingBottom: 15 }}
                        rightTextStyle={{ paddingLeft: 2 }}
                        onClick={() => {
                          data.isChecked[index] = !data.isChecked[index];
                          data.selectedCount = data.isChecked[index] ? data.selectedCount + 1 : data.selectedCount - 1;
                          updateFilterData([...filterData])
                        }}
                        isChecked={data.isChecked[index]}
                        rightText={text}
                        checkedCheckBoxColor={themeColor}
                      />
                    ))
                  }
                })
              }
            </ScrollView>
          </View>
        </View>
        <View style={{ position: 'absolute', bottom: 0, flexDirection: 'row', padding: 15, backgroundColor: '#fff', elevation: 15 }}>
          <View style={{ flex: 1, alignItems: 'flex-start', flexDirection: 'column' }}>
            <Text style={{ fontWeight: 'bold' }}>1000</Text>
            <Text>Profiles Found</Text>
          </View>
          <View style={{ flex: 1, alignItems: 'flex-end' }}>
            <View style={{ flexDirection: 'row' }}>
              <Button mode="contained" style={{ backgroundColor: '#00af91', borderRadius: 0, marginEnd: 15 }} uppercase={false} onPress={() => console.log('Pressed')}>Clear
              </Button>
              <Button mode="contained" style={{ backgroundColor: '#00af91', borderRadius: 0 }} uppercase={false} onPress={() => console.log('Pressed')}>Apply
              </Button>
            </View>
          </View>
        </View>
      </View>
    </SafeAreaView>
  );
};

export default App;

const styles = StyleSheet.create({
});
