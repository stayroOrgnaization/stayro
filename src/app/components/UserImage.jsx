// components/UserImage.js
import { useEffect, useState } from 'react';
import Image from 'next/image';
import Cookies from 'js-cookie';
import Loading from './Loading';

const UserImage = () => {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  
  // Retrieve token from cookies
  const token = Cookies.get('access_token');
  const apiEndpoint = 'https://api.stayro.com/ar/customer/api/profile/';

  useEffect(() => {
    if (!token) {
      setError('No token provided');
      setLoading(false);
      return;
    }

    const fetchUserData = async () => {
      try {
        const response = await fetch(apiEndpoint, {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        });

        if (!response.ok) {
          // Log response status and message for debugging
          const responseBody = await response.json();
          console.error('API response error:', responseBody);
          throw new Error(`Failed to fetch user data. Status: ${response.status}`);
        }

        const data = await response.json();
        setUser(data);
      } catch (error) {
        console.error('Error fetching user data:', error);
        setError(error.message || 'An unexpected error occurred');
      } finally {
        setLoading(false);
      }
    };

    fetchUserData();
  }, [token]); // token is in the dependency array

  // Loading state
  if (loading) {
    return (
      <>
      </>
    );
  }

  // Error state
  if (error) {
    return (
     <></>
    );
  }

  // Display user image or initials if no image
  return (
    <div className="flex items-center justify-center h-[32px] w-[32px] rounded-full bg-gray-200 overflow-hidden mx-4">
      {user?.imageSrc ? (
        <Image
          src={user.imageSrc}
          alt={user.name || 'User Image'}
          width={40}
          height={40}
          className="rounded-full object-cover"
        />
      ) : (
        <div className="flex items-center justify-center w-full h-full text-white bg-blue-500 rounded-full">
          {user?.name ? user.name.charAt(0) : '?'}
        </div>
      )}
    </div>
  );
};

export default UserImage;
