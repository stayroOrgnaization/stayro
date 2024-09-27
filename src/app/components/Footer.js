'use client';

export default function Footer() {
  return (
    <footer className="bg-dbg text-gray-300 w-full py-8 transition-colors duration-300 " dir="rtl">
      {/* First Part: Content */}
      <div className="container mx-auto grid grid-cols-1 md:grid-cols-3 gap-8">
        {/* Column 1 */}
        <div>
          <h3 className="text-white text-lg font-semibold mb-4">Column 1</h3>
          <ul className="space-y-2">
            <li><a href="#" className="hover:text-white transition-colors">Link 1</a></li>
            <li><a href="#" className="hover:text-white transition-colors">Link 2</a></li>
            <li><a href="#" className="hover:text-white transition-colors">Link 3</a></li>
          </ul>
        </div>
        
        {/* Column 2 */}
        <div>
          <h3 className="text-white text-lg font-semibold mb-4">Column 2</h3>
          <ul className="space-y-2">
            <li><a href="#" className="hover:text-white transition-colors">Link 4</a></li>
            <li><a href="#" className="hover:text-white transition-colors">Link 5</a></li>
            <li><a href="#" className="hover:text-white transition-colors">Link 6</a></li>
          </ul>
        </div>
        
        {/* Column 3 */}
        <div>
          <h3 className="text-white text-lg font-semibold mb-4">Column 3</h3>
          <ul className="space-y-2">
            <li><a href="#" className="hover:text-white transition-colors">Link 7</a></li>
            <li><a href="#" className="hover:text-white transition-colors">Link 8</a></li>
            <li><a href="#" className="hover:text-white transition-colors">Link 9</a></li>
          </ul>
        </div>
      </div>

      {/* Second Part: Bottom (Copyright and Social Media) */}
      <div className="container mx-auto flex justify-between items-center border-t border-gray-600 pt-4 mt-8" >
        {/* Left side: Copyright */}
        <div>
          <p>&copy; 2024 Styro. All rights reserved.</p>
        </div>

        {/* Right side: Social Media Icons */}
        <div className="flex space-x-4 " dir='ltr'>
          <a href="#" className="text-gray-300 hover:text-white transform hover:scale-110 transition-transform duration-300">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="w-6 h-6"
              fill="currentColor"
              viewBox="0 0 24 24"
            >
              {/* Facebook Icon */}
              <path
                d="M22.675 0h-21.35C.595 0 0 .593 0 1.326v21.348C0 23.406.595 24 1.326 24H12.82v-9.294H9.692v-3.622h3.129V8.413c0-3.1 1.894-4.788 4.66-4.788 1.325 0 2.464.099 2.797.143v3.24h-1.92c-1.506 0-1.797.716-1.797 1.764v2.312h3.594l-.468 3.622h-3.125V24h6.125C23.407 24 24 23.407 24 22.675V1.326C24 .593 23.407 0 22.675 0z"
              />
            </svg>
          </a>
          <a href="#" className="text-gray-300 hover:text-white transform hover:scale-110 transition-transform duration-300">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="w-6 h-6"
              fill="currentColor"
              viewBox="0 0 24 24"
            >
              {/* Twitter Icon */}
              <path d="M24 4.557c-.883.392-1.832.656-2.828.775a4.932 4.932 0 002.165-2.724 9.863 9.863 0 01-3.127 1.196A4.916 4.916 0 0016.616 3c-2.766 0-5.007 2.24-5.007 5.002 0 .392.044.775.13 1.142C7.691 8.946 4.066 6.961 1.64 3.722a5.003 5.003 0 00-.676 2.514c0 1.736.884 3.266 2.227 4.165a4.914 4.914 0 01-2.265-.626v.063c0 2.428 1.728 4.452 4.014 4.91a4.936 4.936 0 01-1.264.167c-.309 0-.608-.029-.9-.085a4.923 4.923 0 004.59 3.417A9.868 9.868 0 010 21.54a13.94 13.94 0 007.548 2.213c9.053 0 14.002-7.504 14.002-14.002 0-.214-.004-.428-.015-.64A10.006 10.006 0 0024 4.557z" />
            </svg>
          </a>
        </div>
      </div>
    </footer>
  );
}
