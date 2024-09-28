// import StayroLogo from '../../public/St.svg'



export default function Home() {
  return (
    <div className="grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]">
      <header className="items-center justify-center text-red-500"> NAVBAR </header>
      <main className=" items-center ">
       <p>styro</p>
       {/* <div>
      <Image src={StayroLogo} alt="Stayro Logo" width={300} height={200} />
    </div> */}
       
      </main>
      <footer className="items-center justify-center">
        <p>footer</p>
        
      </footer>
    </div>
  );
}
