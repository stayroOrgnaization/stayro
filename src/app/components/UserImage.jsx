// components/UserImage.js
import { useEffect, useState } from 'react';
import Image from 'next/image';

const UserImage = ({ apiEndpoint, token }) => {
  const [user, setUser] = useState(null);

  useEffect(() => {
    const fetchUserData = async () => {
      try {
        const response = await fetch(apiEndpoint, {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        });
        const data = await response.json();
        setUser(data); // Adjust based on your API response structure
      } catch (error) {
        console.error('Error fetching user data:', error);
      }
    };

    fetchUserData();
  }, [apiEndpoint, token]);

  return (
    <div className="flex items-center justify-center h-[32px] w-[32px] rounded-full bg-gray-200 overflow-hidden">
      {user?.imageSrc ? (
        <Image src={user.imageSrc} alt={user.name} width={40} height={40} className="rounded-full" />
      ) : (
        <div className="flex items-center justify-center w-full h-full text-white bg-blue-500 rounded-full">
          {user?.name ? user.name.charAt(0) : '?'}
        </div>
      )}
    </div>
  );
};

export default UserImage;
