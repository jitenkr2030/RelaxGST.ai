import React, { useContext, useEffect } from 'react';
import { View, Text, FlatList } from 'react-native';
import { DocumentationContext } from '../../context/DocumentationContext';

const DocumentList = () => {
  const { documents, fetchDocuments } = useContext(DocumentationContext);

  useEffect(() => {
    fetchDocuments();
  }, []);

  return (
    <View>
      <Text>Document List</Text>
      <FlatList
        data={documents}
        renderItem={({ item }) => <Text>{item.title}</Text>}
        keyExtractor={(item) => item.id.toString()}
      />
    </View>
  );
};

export default DocumentList;
