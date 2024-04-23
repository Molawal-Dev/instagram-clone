import Image from "next/image";

interface SugProps {
    name: string;
    imgUrl: string;
    action: string;
    status: string;
    blueTick?: boolean;
}

const Suggestions = ({name, imgUrl, action, status, blueTick} : SugProps) => {

  return (
    <div className="w-full flex justify-between items-center mt-4 ">
      <div className="flex justify-between gap-3">
        <Image
          src={imgUrl}
          alt="profile Photo"
          width={43}
          height={43}
          className=" rounded-full object-cover"
        />

        <div className="flex flex-col">
          <p className="font-bold text-sm flex gap-1">
            {name} {blueTick && (
                <Image 
                src='/icons/checked.svg'
                alt=""
                height={15}
                width={15}
                />
            )}
          </p>
          <p className="text-xs text-gray-400">{status}</p>
        </div>
      </div>

      <div>
        <p className=" text-blue-600 text-xs">{action}</p>
      </div>
    </div>
  )
}

export default Suggestions
