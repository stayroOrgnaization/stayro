import '../../Styles/globals.css'
import Image from 'next/image';
import Calendar from '../../../public/CalendarPic.svg'

const Login = () => {
  return (
    <div className='flex justify-center bg-FFFFFF '>
      <div className='login side mx-10 mt-40  w-[50%] h-full '>
       <form className='border border-slate-200 rounded-lg w-[50%] h-[100%]'> 
        <div className='text-center text-lg font-bold text-black mx-2 mt-3'>تسجيل الدخول </div>
        <div className='telephone input flex flex-col mt-8'>
         <label className='text-right mx-2'> رقم الهاتف</label>
          <div className='flex justify-end space-x-2'>
          
          <select name="countryCode" class="border rounded-lg h-10 mt-3 w-20 bg-slate-100 text-gray-700">
    <option value="+1">+1 (USA)</option>
    <option value="+44">+44 (UK)</option>
    <option value="+91">+91 (India)</option>
  
  </select>
  <input type='tel' className=' border bg-slate-100 text-gray-700 rounded-lg mt-3 mx-2 w-[90%] h-10' /> 
          </div>
         
          
        </div>
        <div className='password input flex flex-col mt-5'>
        <label className='text-right mx-2'> كلمة السر</label>
        <input type='password' className='bg-slate-100 text-gray-700 rounded-lg mt-3 mx-2 w-[90%]'/>
         
          

        </div>
        <div className='text-right mt-5 mx-2 text-orange-500'>هل نسيت كلمة المرور؟</div>
        <div className='flex justify-center'>
        <button className='w-[90%] border bg-orange-600 rounded mx-2 mt-4 h-10'>تسجيل الدخول</button>
        </div>
        
        <div className='mt-4 mx-2 mb-4 flex justify-end space-x-2 '> 
        <p>تسجيل جديد</p>
        <p >هل لديك حساب جديد؟ </p>
        
        </div>
       </form>

      </div>
      <div className='pic side mt-20 mx-20 '>
       <div>
        <h3 className='font-bold text-4xl text-black text-center '> احجز براحة، اختر ستيرو</h3>
        <p className='font-normal text-lg text-gray-400 text-center mt-5'> اكتشف تجربة مميزة للحجوزات</p>
       </div>
       <div className='mt-20'>
        <Image src={Calendar} alt="Calendar" width={300} height={200}></Image>
       </div>
      

      </div>
    </div>
  )
}

export default Login