import propertId from "@/stores/Properties/propertyId";
import Image from "next/image";
 const  DetailsTop=(imgurl )=>{
    return(
        <>
        <div className="gap-[Space/1600]">
          <div>
            <div>
          <img src={imgurl}  />
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