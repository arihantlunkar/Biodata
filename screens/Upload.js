import React, { useState } from 'react';
import { TouchableOpacity } from 'react-native';
import { ScrollView } from 'react-native';
import { SafeAreaView, StyleSheet, View, StatusBar, Text } from 'react-native';
import { Button, Avatar, ProgressBar } from 'react-native-paper';


const App = () => {
  const themeColor = '#00af91';
  const [currentState, updateCurrentState] = useState(2);
  const [uploadData, updateUploadData] = useState([
    {
      bottomButtonIcon: 'select-drag',
      bottomButtonText: 'Drag Biodata',
      instructions1: 'Step 1 : Browse and choose the biodata you want to upload',
      instructions2: 'Preferable format : *.pdf, *.jpeg, *.png',
      instructions3: 'Max file size allowed is 5 MB.',
      leftIconName: ['file-pdf', 'image-outline', 'image-outline', 'image-outline', 'image-outline', 'image-outline'],
      rightIconName: ['lock-open-variant', 'lock', 'lock', 'lock', 'lock', 'lock'],
      fileName: ['Biodata.pdf', 'Photo1.png', 'Photo2.png', 'Photo3.png', 'Photo4.png', 'Photo5.png'],
      fileSize: ['Max 5 MB', ' Max 4 MB', ' Max 4 MB', ' Max 4 MB', 'Max 4 MB', 'Max 4 MB'],
      progress: [0, 0, 0, 0, 0, 0],
      isAdded: [false, false, false, false, false, false],
      isDisabled: false
    },
    {
      bottomButtonIcon: 'select-multiple',
      bottomButtonText: 'Drag Photos',
      instructions1: 'Step 2 : Select multiple bride or groom photos',
      instructions2: 'Preferable format : *.jpeg, *.png',
      instructions3: 'Min 1 & Max 5 photos are allowed.',
      leftIconName: ['file-pdf', 'image-outline', 'image-outline', 'image-outline', 'image-outline', 'image-outline'],
      rightIconName: ['lock', 'lock-open-variant', 'lock-open-variant', 'lock-open-variant', 'lock-open-variant', 'lock-open-variant'],
      fileName: ['Arihant Biodata.pdf', 'Photo1.png', 'Photo2.png', 'Photo3.png', 'Photo4.png', 'Photo5.png'],
      fileSize: ['3.5 MB', 'Max 4 MB', 'Max 4 MB', 'Max 4 MB', 'Max 4 MB', 'Max 4 MB'],
      progress: [0, 0, 0, 0, 0, 0],
      isAdded: [true, false, false, false, false, false],
      isDisabled: false
    },
    {
      bottomButtonIcon: 'upload',
      bottomButtonText: 'Upload',
      leftIconName: ['file-pdf', 'image-outline', 'image-outline', 'image-outline',],
      rightIconName: ['check', 'check', 'check', 'check'],
      fileName: ['Biodata.pdf', 'Photo1.png', 'Photo2.png', 'Photo3.png'],
      fileSize: ['3.5 MB', '4 MB', '4.2 MB', '1.4 MB'],
      progress: [100, 100, 100, 100],
      isAdded: [true, true, true, true],
      instructions2: 'Uploaded Successful',
      instructions3: 'Biodata under review & will take some time to get reflected.',
      isDisabled: true
    }]);
  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: '#000' }}>
      <StatusBar
        animated={true}
        backgroundColor="#000" />
      <View style={{ flex: 1, flexDirection: 'column', backgroundColor: '#fff' }}>
        <View style={{ flex: 1, flexDirection: 'column' }}>
          <ScrollView style={{ flex: 1 }}>
            <View style={{ backgroundColor: '#f1fcfc' }}>
              {
                uploadData[currentState].leftIconName.map((data, index) => (
                  <View style={{ flexDirection: 'row', margin: 15 }} key={index}>
                    <Avatar.Icon icon={uploadData[currentState].leftIconName[index]} color='#fff' style={{ backgroundColor: '#5b8c85', borderRadius: 0 }} />
                    <View style={{ flex: 1, alignSelf: 'center', padding: 15, flexDirection: 'column' }}>
                      <View style={{ flexDirection: 'row', justifyContent: 'space-between', paddingBottom: 4 }}>
                        <View style={{ flexDirection: 'row' }}>
                          <Text style={{ color: '#70757a' }}>{uploadData[currentState].fileName[index]}</Text>
                          {
                            uploadData[currentState].isAdded[index] ?
                              (<Avatar.Icon icon='check' size={16} color='#fff' style={{ marginStart: 5, backgroundColor: themeColor, alignSelf: 'center', borderColor: themeColor }} />)
                              : null
                          }
                        </View>
                        <Text style={{ color: '#70757a' }}>{uploadData[currentState].fileSize[index]}</Text>
                      </View>
                      <ProgressBar progress={uploadData[currentState].progress[index] / 100} color={themeColor} />
                    </View>
                    <Avatar.Icon icon={uploadData[currentState].rightIconName[index]} size={48} color='#fff' style={{ backgroundColor: '#434e52', alignSelf: 'center', borderColor: themeColor }} />
                  </View>
                ))}
            </View>
          </ScrollView>
          <View style={{ alignItems: 'center', padding: 15 }}>
            <Text style={{ paddingBottom: 5, color: '#434e52' }}>{uploadData[currentState].instructions1}</Text>
            <Text style={{ color: '#e7b2a5', paddingBottom: 5 }}>{uploadData[currentState].instructions2}</Text>
            <Text style={{ color: '#c4b6b6' }}>{uploadData[currentState].instructions3}</Text>
          </View>
        </View>
        <Button disabled={uploadData[currentState].isDisabled} icon={uploadData[currentState].bottomButtonIcon} mode="contained" style={{ backgroundColor: themeColor, borderRadius: 0, height: 48, justifyContent: 'center' }} uppercase={false} onPress={() => console.log('Pressed' + currentState)}>
          {uploadData[currentState].bottomButtonText}
        </Button>
      </View>
    </SafeAreaView>
  );
};

export default App;

const styles = StyleSheet.create({
});
