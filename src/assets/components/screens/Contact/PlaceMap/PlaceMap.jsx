import React from 'react';

const PlaceMap = () => {
  return (
    <div>
        <iframe 
        src="https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d12779.735144865526!2d6.639106125245954!3d46.51925085404208!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e0!3m2!1sru!2sua!4v1696983659799!5m2!1sru!2sua" 
        width="800" 
        height="500" 
        style={{
            borderRadius: "3%",
            border:"none"
        }}
        allowfullscreen="" 
        loading="lazy" 
        referrerpolicy="no-referrer-when-downgrade"
        ></iframe>
    </div>
  );
};

export default PlaceMap;
