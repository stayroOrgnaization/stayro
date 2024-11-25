import { useEffect, useState } from 'react';
import Image from 'next/image';
import Cookies from 'js-cookie';
import Loading from './Loading'; // Assuming you have a loading spinner component
import imguser from '../../../public/imguser.png'; // Default image
import Link from 'next/link';

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
          const responseBody = await response.json();
          console.error('API response error:', responseBody);
          throw new Error(`Failed to fetch user data. Status: ${response.status}`);
        }

        const data = await response.json();
        setUser(data);  // Set the user data
      } catch (error) {
        console.error('Error fetching user data:', error);
        setError(error.message || 'An unexpected error occurred');
      } finally {
        setLoading(false);  // Ensure loading is turned off after data fetching
      }
    };

    fetchUserData();
  }, [token]);

  // Loading state
  if (loading) {
    return (
      <div className="flex items-center justify-center">
        
      </div>
    );
  }

  // Error state
  if (error) {
    console.error(error);
    return (
      <div className="flex items-center justify-center">
        <Link href='/Profile'>
        <Image
          src={imguser}
          alt="Default user image"
          width={40}
          height={40}
          className="rounded-full"
        />
        </Link>
      </div>
    );
  }

  // If data is fetched successfully
  return (
    <div className="flex items-center justify-center h-[32px] w-[32px] rounded-full bg-gray-200 overflow-hidden mx-4">
      {user?.imageSrc ? ( <Link href='/Profile'>
        <Image
          src={user.imageSrc}  // Assuming user.imageSrc is a valid URL to the image
          alt={user.name || 'User Image'}
          width={40}
          height={40}
          className="rounded-full object-cover"
        /></Link>
      ) : (
        <div className="flex items-center justify-center w-full h-full text-white bg-blue-500 rounded-full">
          {user?.name ? user.name.charAt(0) : '?'}
        </div>
      )}
    </div>
  );
};

export default UserImage;
