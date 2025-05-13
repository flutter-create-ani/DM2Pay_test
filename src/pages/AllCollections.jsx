import React, { useEffect, useState } from 'react';
import { categoryCollection } from '../apis/collection';
import CollectionsSection from './CollectionsSection';

const AllCollections = () => {
  const [collections, setCollections] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);
    categoryCollection()          
      .then(res => setCollections(res.collections))
      .finally(() => setLoading(false));
  }, []);

  if (loading) return <p>Loading collections…</p>;

  return (
    <div style={{ padding: '1.5rem', display: 'flex', flexDirection: 'column', gap: '2rem' }}>
      {collections.map(coll => (
        <CollectionsSection key={coll._id} collection={coll} />
      ))}
    </div>
  );
};

export default AllCollections;
