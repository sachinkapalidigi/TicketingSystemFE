import Image from "next/image";

const IssueCard = () => {
  return (
    <div className="flex flex-col justify-between max-w-md h-64 py-4 px-8 bg-white shadow-lg rounded-lg my-2">
      <div className="">
        <h2 className="text-gray-800 text-3xl font-semibold">Title</h2>
        <p className="mt-2 text-gray-600">Description</p>
      </div>
      <div className="">
        {/* Tags Section */}
      </div>
      <div className="flex justify-between mt-4">
        <div>
          <Image src="/double-up.svg" alt="Up vote" width={72} height={48} />
        </div>
        <div>
          <Image
            src="/double-down.svg"
            alt="Down vote"
            width={72}
            height={48}
          />
        </div>
        <div>
          <Image src="/resolved.svg" alt="Resolved" width={72} height={48} />
        </div>
      </div>
    </div>
  );
};

export default IssueCard;
