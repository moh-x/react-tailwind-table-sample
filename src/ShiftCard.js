function ShiftCard() {
  return (
    <div className="bg-white space-y-5 p-5 rounded-2xl">
      <div className="flex justify-between">
        <div className="flex space-x-3 align-middle items-center">
          <img
            src="https://res.cloudinary.com/moh-x/image/upload/v1618542907/fcc/portfolio/AvatarMaker_ipxz90.svg"
            alt="user's avatar"
            className="w-6 h-6 rounded-full border border-green-500"
          />
          <span>Babatunde Adenowo</span>
        </div>
        <div>09:00am - 12:00pm</div>
      </div>
      <div className="flex justify-between items-center">
        <div className="">
          <button className="flex justify-between text-center w-28 bg-white border-2 border-green-400 py-2 rounded-md">
            <p className="font-medium text-green-500 mx-auto">Edit Shift</p>
          </button>
        </div>
        <div className="text-red-500">Delete Shift</div>
      </div>
    </div>
  );
}

export default ShiftCard;
