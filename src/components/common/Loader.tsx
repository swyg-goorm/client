import React from 'react';
import Image from 'next/image';

export default function Loader() {
  return (
    <div className="flex items-center justify-center">
      <Image
        alt=""
        src="https://dnynkguj26y10.cloudfront.net/images/etc/loading.gif"
        width="100"
        height="100"
      />
    </div>
  );
}
