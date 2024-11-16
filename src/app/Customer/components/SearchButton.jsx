"use client";

export default function SearchButton() {
  return (
    <button onClick={SearchButton} >
     <div className='rounded-full bg-orange-700 bg-opacity-50 h-[32px] w-[32px] flex justify-center item-center algin-center mx-2 '>
     <svg width="30" height="32" viewBox="-2 -4 22 30" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M8.68475 16.5404C12.7758 16.5404 16.0922 13.224 16.0922 9.133C16.0922 5.042 12.7758 1.72559 8.68475 1.72559C4.59375 1.72559 1.27734 5.042 1.27734 9.133C1.27734 13.224 4.59375 16.5404 8.68475 16.5404Z" stroke="#FF5B2D" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M17.9457 18.392L13.918 14.3643" stroke="#FF5B2D" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
</svg>
</div>
    </button>
  );
}
