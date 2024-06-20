import React, { useState, useContext } from 'react';
import { View, Text, TextInput, Button } from 'react-native';
import { DocumentationContext } from '../../context/DocumentationContext';

const CreateDocument = () => {
  const { createDocument } = useContext(DocumentationContext);
  const [title, setTitle] = useState('');
  const [content, setContent] = useState('');

  const handleCreate = () => {
    createDocument({ title, content });
  };

  return (
    <View>
      <Text>Create Document</Text>
      <TextInput placeholder="Title" value={title} onChangeText={setTitle} />
      <TextInput placeholder="Content" value={content} onChangeText={setContent} />
      <Button title="Create" onPress={handleCreate} />
    </View>
  );
};

export default CreateDocument;
