function NewGame() {
  return (
    <main className="h-screen mx-6 flex flex-col flex-nowrap justify-center items-center">
      <img src="./logo.svg" alt="" />
      <div className="tile my-8 ">
        <h4>Pick player 1&rsquo;s mark</h4>
        <div className="toggle grid grid-cols-2 mt-6 mb-[17px]">
          <div className="mark-selector ">
            <img src="./icon-x-silver-full.svg" alt="" />
          </div>
          <div className="mark-selector bg-silver">
            <img src="./icon-o-silver-empty.svg" alt="" />
          </div>
        </div>
        <p className="text-center">REMEMBER : X GOES FIRST</p>
      </div>
      <div>
        <button className="big-btn yellow-btn-big-shadow bg-light-yellow hover:bg-light-yellow-hover mb-4">
          New game (vs CPU)
        </button>
        <button className="big-btn blue-btn-big-shadow bg-light-blue hover:bg-light-blue-hover">
          New game (vs player)
        </button>
      </div>
    </main>
  );
}

export default NewGame;
