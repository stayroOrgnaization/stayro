import propertId from "@/stores/Properties/propertyId";
import Image from "next/image";
 const  DetailsTop=(imgurl )=>{
    return(
        <>
        <div className="gap-[Space/1600]">
          <div>
            <div>
          <Image src={imgurl}  />
            </div>
          </div>
          <div>
            <div>
                <div>

                </div>
                <div>

                </div>
                <div>

                </div>
            </div>
          </div>
        </div>
        </>
    );
};
export default DetailsTop;