function Userprofile(props) {
    const { name, title, avatar_url, skills } = props;
  
    const style = {
      border: "thick",
      borderRadius: "50%",
      width: "200px"
    };
    return (
      <div>
        <div className="top">
          <div className="titlebox">
            <div className="title">
              <div>
                <h1>{name}</h1>
              </div>
              <div>
                <button style={{ backgroundColor: "black", color: "white" }}>
                  Follow
                </button>
              </div>
            </div>
            <div style={{textAlign:"left"}}>{title}</div>
            <div className="skillset">{skills}</div>
          </div>
          <div>
            <img style={style} src={avatar_url} alt="" />
          </div>
        </div>
      </div>
    );
  }
  
  export default Userprofile;
  