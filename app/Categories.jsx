export default function Categories() {
  return (
    <div className="flex items-start justify-center h-screen pt-8">
      <div className="p-6 border-2 border-gray-300 rounded-2xl w-96">
        <div className="w-[90]">
          <h1 className="block text-2xl font-bold text-center">
            Please mark your interests!
          </h1>
          <p className="flex items-center justify-center pt-4 text-sm font-normal">
            We will keep you notified.
          </p>
          <h4 className="pt-4 font-semibold">My saved interests!</h4>
          <form action="">
            <div className="flex items-center justify-start gap-3 pt-3">
              <input
                type="checkbox"
                id="vehicle1"
                name="vehicle1"
                value="Bike"
                className="w-4 h-4"
              />
              <label for="vehicle1" className="font-medium"> I have a bike</label>
            </div>
            <div className="flex items-center justify-start gap-3 pt-3">
              <input
                type="checkbox"
                id="vehicle1"
                name="vehicle1"
                value="Bike"
                className="w-4 h-4"
              />
              <label for="vehicle1" className="font-medium"> I have a bike</label>
            </div>
            <div className="flex items-center justify-start gap-3 pt-3">
              <input
                type="checkbox"
                id="vehicle1"
                name="vehicle1"
                value="Bike"
                className="w-4 h-4"
              />
              <label for="vehicle1" className="font-medium"> I have a bike</label>
            </div>
            <div className="flex items-center justify-start gap-3 pt-3">
              <input
                type="checkbox"
                id="vehicle1"
                name="vehicle1"
                value="Bike"
                className="w-4 h-4"
              />
              <label for="vehicle1" className="font-medium"> I have a bike</label>
            </div>
            <div className="flex items-center justify-start gap-3 pt-3">
              <input
                type="checkbox"
                id="vehicle1"
                name="vehicle1"
                value="Bike"
                className="w-4 h-4"
              />
              <label for="vehicle1" className="font-medium"> I have a bike</label>
            </div>
          </form>
          
        </div>
      </div>
    </div>
  );
}
