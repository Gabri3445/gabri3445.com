function ServerInfo() {
  return (
    <div className="flex flex-row mt-2.5 ml-5">
      <div>
        <img src="/server.png"></img>
      </div>
      <div className="block ml-28">
        <div className="text-3xl">Connected to</div>
        <div className="text-3xl">gabri3445 server</div>
        <div className="text-xl">@ 93.43.233.0</div>
      </div>
    </div>
  );
}

export default ServerInfo;
