const ProfileInfo = (props) => {
  return (
    <main>
      <div className="vertical-text">Start</div>
      <div className="left">
        <button
          onClick={this.handleProfileSelectionType("developer")}
          className="btn btn-black"
        >
          Entwickler
        </button>
      </div>
      <div className="right">
        <button
          onClick={this.handleProfileSelectionType("client")}
          className="btn btn-green"
        >
          Kunde
        </button>
      </div>
    </main>
  );
};

export default ProfileInfo;
