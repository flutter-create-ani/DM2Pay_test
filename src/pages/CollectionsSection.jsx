import React, { useEffect, useState } from 'react';
import { collectionById } from '../apis/collection';
import CollectionsCard from '../components/CollectionsCard';

const CollectionsSection = ({ collection }) => {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);
    collectionById(collection._id)  
      .then(res => setProducts(res.data.docs))
      .finally(() => setLoading(false));
  }, [collection._id]);

  if (loading) return <p>Loading {collection.name.trim()}…</p>;
  if (!products.length) return null;

  return (
    <section>
      <h2 style={{
        fontSize: '1.25rem',
        fontWeight: 'bold',
        marginBottom: '0.5rem',
        textTransform: 'capitalize'
      }}>
        {collection.name.trim()}
      </h2>

      <div style={{
        display: 'flex',
        overflowX: 'auto',
        gap: '1rem',
        paddingBottom: '1rem'
      }}>
        {products.map(prod => (
          <CollectionsCard
            key={prod._id}
            image={prod.productPhotos[0]}
            name={prod.name}
            price={prod.price}
          />
        ))}
      </div>
    </section>
  );
};

export default CollectionsSection;
