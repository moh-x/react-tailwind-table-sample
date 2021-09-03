function ShiftCard() {
  return (
    <div className="xl:flex xl:justify-between bg-white space-y-5 p-5 rounded-2xl">
      <div className="flex justify-between xl:space-x-28">
        <div className="flex space-x-3 xl:space-x-6 align-middle items-center">
          <img
            src="https://res.cloudinary.com/moh-x/image/upload/v1618542907/fcc/portfolio/AvatarMaker_ipxz90.svg"
            alt="user's avatar"
            className="w-6 h-6 rounded-full border border-green-500"
          />
          <span>Babatunde Adenowo</span>
        </div>

        <p className="hidden my-auto lg:block text-left text-gray-500 items-center">
          Developer
        </p>

        <p className="hidden my-auto lg:block text-left text-gray-500 items-center">
          Eyimofe Omotayo
        </p>

        <div className="my-auto">09:00am - 12:00pm</div>
      </div>

      <div className="flex justify-between items-center xl:space-x-12">
        <div className="my-auto">
          <button className="flex my-auto justify-between text-center w-28 bg-white border-2 border-green-400 py-2 rounded-md">
            <p className="font-medium text-green-500 mx-auto">Edit Shift</p>
          </button>
        </div>
        <p className="text-red-500 my-auto">Delete Shift</p>
      </div>
    </div>
  );
}

export default ShiftCard;
