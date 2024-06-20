import React, { useContext, useEffect } from 'react';
import { View, Text } from 'react-native';
import { DocumentationContext } from '../../context/DocumentationContext';

const DocumentDetail = ({ route }) => {
  const { id } = route.params;
  const { document, fetchDocument } = useContext(DocumentationContext);

  useEffect(() => {
    fetchDocument(id);
  }, [id]);

  return (
    <View>
      <Text>Document Detail</Text>
      {document && (
        <View>
          <Text>{document.title}</Text>
          <Text>{document.content}</Text>
        </View>
      )}
    </View>
  );
};

export default DocumentDetail;
