import React, { useState, useEffect } from 'react';
import { Meshs, SubMesh1, SubMesh2, SubMesh3 } from './MeshStyle';
import pic from './prod-design-2.png.webp'
const Mesh = () => {
  const Arr = ["orange", "pink", "purple", "green"];
  const Arr2 = ["blue", "orange", "red", "yellow"];
  const Arr3 = ["violet", "gray", "lightblue", "aqua"];
  const [currentColorIndex, setCurrentColorIndex] = useState(0);

  useEffect(() => {
    const timeout = setTimeout(() => {
      if (currentColorIndex < Arr.length - 1) {
        setCurrentColorIndex(currentColorIndex + 1);
      }
    }, 10000);

    return () => clearTimeout(timeout);
  }, [currentColorIndex]);

  return (
    <Meshs className='meshs' >
      {/* <img src={pic} alt="" /> */}
      <SubMesh1 style={{ backgroundColor: Arr[currentColorIndex] }} />
      <SubMesh2 style={{ backgroundColor: Arr2[currentColorIndex] }} />
      <SubMesh3 style={{ backgroundColor: Arr3[currentColorIndex] }} />
  
    </Meshs>
  );
};

export default Mesh;
