const PropertyFilter = ({ selectedType, types = [], setType }) => {
    console.log("Property Types: ", types); // Add this line to debug
    return (
        <div className='flex justify-center sm:justify-end'>
            <div className="flex justify-center px-2 py-2 w-full max-w-[450px] h-[70px] rounded-[88px] gap-[16px] border border-white space-x-4 my-12 mx-4 sm:mx-12 md:mx-24 lg:mx-32">
                <div className='flex justify-center w-full'>
                    {types.length > 0 ? (
                        types.map((type) => (
                            <Link key={type} href={`/?type=${type}`} passHref>
                                <button
                                    className={`w-[80px] sm:w-[100px] md:w-[122px] h-[46px] rounded-[33px] flex items-center justify-center ${
                                        selectedType === type ? 'bg-white text-gray-500' : 'bg-dbg'
                                    }`}
                                    onClick={() => setType(type)} // Update type on button click
                                >
                                    {selectedType === type && <span className="ml-2">...</span>}
                                    <p className='mx-2'>{type}</p>
                                </button>
                            </Link>
                        ))
                    ) : (
                        <p>No property types available.</p>
                    )}
                </div>
            </div>
        </div>
    );
};
