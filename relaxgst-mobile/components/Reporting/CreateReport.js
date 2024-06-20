import React, { useState, useContext } from 'react';
import { View, Text, TextInput, Button } from 'react-native';
import { ReportingContext } from '../../context/ReportingContext';

const CreateReport = () => {
  const { createReport } = useContext(ReportingContext);
  const [title, setTitle] = useState('');
  const [content, setContent] = useState('');

  const handleCreate = () => {
    createReport({ title, content });
  };

  return (
    <View>
      <Text>Create Report</Text>
      <TextInput placeholder="Title" value={title} onChangeText={setTitle} />
      <TextInput placeholder="Content" value={content} onChangeText={setContent} />
      <Button title="Create" onPress={handleCreate} />
    </View>
  );
};

export default CreateReport;
