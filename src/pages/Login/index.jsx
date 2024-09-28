import '../../Styles/globals.css'
import Image from 'next/image';
import Calendar from '../../../public/CalendarPic.svg'

const Login = () => {
  return (
    <div className='flex justify-between bg-FFFFFF'>
      <div className='login side mx-10 mt-40'>
       <form>
        <div className='text-center text-lg font-bold text-black'>تسجيل الدخول </div>
        <div className='telephone input flex flex-col mt-8'>
        <label className='text-right '> رقم الهاتف</label>
          <input type='tel' className='bg-slate-100 text-gray-700 rounded-xl mt-3' /> 
          
        </div>
        <div className='password input flex flex-col mt-5'>
        <label className='text-right '> كلمة السر</label>
        <input type='password' className='bg-slate-100 text-gray-700 rounded-xl mt-3'/>
         
          

        </div>
        <div className='text-right mt-5 text-orange-500'>هل نسيت كلمة المرور</div>
        <button>تسجيل الدخول</button>
        <div>
        <p>هل لديك حساب جديد؟ </p>
        <p>تسجيل جديد</p>
        </div>
       </form>

      </div>
      <div className='pic side mt-20 mx-20'>
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